import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
  rating?: number;
}

export function TestimonialCard({ quote, clientName, clientPosition, clientImage, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <ImageWithFallback 
          src={clientImage}
          alt={clientName}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{clientName}</h4>
          <p className="text-sm text-gray-600">{clientPosition}</p>
        </div>
      </div>
    </div>
  );
}
