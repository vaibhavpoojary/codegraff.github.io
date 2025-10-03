import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  details?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, details }: ServiceCardProps) => {
  return (
    <div className="card-elegant group cursor-pointer h-full flex flex-col">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0 shadow-lg">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
        {description}
      </p>

      {details && (
        <p className="text-sm text-muted-foreground/80 mb-6 leading-relaxed italic border-l-2 border-primary/30 pl-4">
          {details}
        </p>
      )}
      
      {features && features.length > 0 && (
        <div className="mt-auto pt-4 border-t border-border">
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Key Features</p>
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-start space-x-3 text-sm text-muted-foreground group/item"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2 group-hover/item:scale-150 transition-transform duration-200" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;