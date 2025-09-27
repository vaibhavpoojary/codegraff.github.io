import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showPattern?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  showPattern = true 
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0 bg-gradient-subtle">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1)_0%,transparent_50%)]" />
        </div>
      )}
      
      <div className="relative z-10 container-padding text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
            <Sparkles size={16} />
            <span>AI-Powered Solutions</span>
          </div>
          
          {/* Main Title */}
          <h1 className="hero-text">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* Description */}
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              {primaryCTA && (
                <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6">
                  <Link to={primaryCTA.href} className="flex items-center space-x-2">
                    <span>{primaryCTA.text}</span>
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;