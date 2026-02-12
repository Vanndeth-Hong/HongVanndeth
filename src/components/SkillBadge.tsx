interface SkillBadgeProps {
  skill: string;
  color: 'orange' | 'blue' | 'pink' | 'green' | 'red' | 'orange-dark';
}

export function SkillBadge({ skill, color }: SkillBadgeProps) {
  const colorClasses = {
    orange: 'bg-gradient-to-r from-[#F59E0B] to-[#D97706]',
    blue: 'bg-gradient-to-r from-[#6366F1] to-[#4F46E5]',
    pink: 'bg-gradient-to-r from-[#EC4899] to-[#DB2777]',
    green: 'bg-gradient-to-r from-[#10B981] to-[#059669]',
    red: 'bg-gradient-to-r from-[#EF4444] to-[#DC2626]',
    'orange-dark': 'bg-gradient-to-r from-[#F97316] to-[#EA580C]'
  };

  return (
    <div
      className={`${colorClasses[color]} text-white px-8 py-4 rounded-2xl font-semibold text-lg text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 min-w-[200px]`}
    >
      {skill}
    </div>
  );
}
