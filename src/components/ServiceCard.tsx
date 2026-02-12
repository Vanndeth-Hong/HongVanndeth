import { Code, Smartphone, Palette, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: 'code' | 'smartphone' | 'palette';
  title: string;
  description: string;
  features: string[];
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export function ServiceCard({ icon, title, description, features, variant = 'primary' }: ServiceCardProps) {
  const bgColors = {
    primary: 'bg-gradient-to-br from-[#007BFF] to-[#0066DD]',
    secondary: 'bg-gradient-to-br from-[#00A3FF] to-[#007BFF]',
    tertiary: 'bg-gradient-to-br from-[#40B4FF] to-[#00A3FF]'
  };

  const IconComponent = icon === 'code' ? Code : icon === 'smartphone' ? Smartphone : Palette;

  return (
    <div className={`${bgColors[variant]} text-white rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
          <IconComponent className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3">{title}</h3>

        {/* Description */}
        <p className="text-white/90 mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-white/80">•</span>
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Arrow Button */}
        <button className="self-start w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all group-hover:translate-x-2">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
