import { LucideIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

const StatsCounter = ({ value, label, icon: Icon }: StatsCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && numericValue) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, numericValue]);

  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-6 text-center hover:bg-white/10 transition-all group">
      <Icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/70 font-grotesk font-medium">{label}</div>
    </div>
  );
};

export default StatsCounter;
