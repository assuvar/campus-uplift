import { CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ProcessStep {
  step: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [steps]);

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <div className="space-y-8">
        {steps.map((item, index) => {
          const isVisible = visibleSteps.includes(index);
          const isChecked = isVisible;
          
          return (
            <div
              key={index}
              className={`flex gap-6 items-start transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              {/* Checkbox */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded border-2 flex items-center justify-center transition-all duration-500 ${
                    isChecked
                      ? 'bg-accent border-accent shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'bg-white border-primary/20'
                  }`}
                >
                  <CheckCircle2
                    className={`w-7 h-7 transition-all duration-500 ${
                      isChecked ? 'text-white scale-100' : 'text-primary/30 scale-75'
                    }`}
                  />
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-display font-bold text-deep mb-2">
                  {item.step}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
