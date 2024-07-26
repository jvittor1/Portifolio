interface ExperienceItemCardProps {
  name: string;
  icon: JSX.Element;
  color: string;
}

export default function ExperienceItemCard(props: ExperienceItemCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-1 text-lg font-normal ${props.color}`}
    >
      {props.icon}
      <span className="text-sm text-zinc-300">{props.name}</span>
    </div>
  );
}
