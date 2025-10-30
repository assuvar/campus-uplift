import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
  compact?: boolean;
}

const ProgramCard = ({ icon: Icon, title, description, featured, compact }: ProgramCardProps) => {
  if (featured) {
    return (
      <Card className="card-glow h-full overflow-hidden border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Icon Section */}
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--glow)] group-hover:shadow-[var(--glow-strong)] transition-all duration-300">
              <Icon className="w-16 h-16 text-white" />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-3 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-grotesk font-semibold uppercase tracking-wide w-fit">
              Featured Program
            </div>
            <CardTitle className="text-2xl mb-3 font-display text-deep">{title}</CardTitle>
            <CardDescription className="text-base mb-4 leading-relaxed font-sans">
              {description}
            </CardDescription>
            <button className="flex items-center gap-2 text-primary hover:text-accent font-grotesk font-semibold group/btn transition-all">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  if (compact) {
    return (
      <Card className="card-glow h-full overflow-hidden border-primary/10 group">
        <CardHeader>
          <div className="w-12 h-12 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-lg font-display text-deep">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed font-sans">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-glow h-full overflow-hidden border-primary/10 group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="relative">
        <div className="w-16 h-16 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-display text-deep">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <CardDescription className="text-base mb-4 leading-relaxed font-sans">
          {description}
        </CardDescription>
        <button className="flex items-center gap-2 text-primary hover:text-accent font-grotesk font-semibold group/btn transition-all">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
