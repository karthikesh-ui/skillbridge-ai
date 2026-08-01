import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradient = false,
}: FeatureCardProps) {
  return (
    <div
      className={`group relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        gradient
          ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10 hover:border-accent/30'
          : 'bg-white dark:bg-slate-800 border-border hover:border-accent/50'
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
          <div className="text-white">{icon}</div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
