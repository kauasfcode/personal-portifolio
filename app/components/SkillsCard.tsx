interface SkillCardProps {
  title: string;
  description: string;
}

export function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className="min-w-[150px] h-[110px] max-w-[300px] border border-zinc-700 rounded-2xl p-4 transition-all duration-300 hover:border-zinc-500 hover:shadow-md">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-zinc-300">{description}</p>
    </div>
  );
}
