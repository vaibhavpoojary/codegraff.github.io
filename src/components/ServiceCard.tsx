import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="card-elegant group cursor-pointer h-full">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 flex-shrink-0">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;