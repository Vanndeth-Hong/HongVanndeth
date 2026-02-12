import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  category: string;
  title: string;
  image: string;
  layout?: 'single' | 'triple';
}

export function ProjectCard({ category, title, image, layout = 'single' }: ProjectCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-gray-50 hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-block px-4 py-1 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-medium mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <button className="w-10 h-10 bg-[#007BFF] text-white rounded-full flex items-center justify-center hover:bg-[#0066DD] transition-all group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
