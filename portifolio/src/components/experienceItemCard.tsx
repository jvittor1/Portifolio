import { IconType } from "react-icons";

interface ExperienceItemCardProps {
  name: string;
  icon: IconType;
}

export default function ExperienceItemCard(props: ExperienceItemCardProps) {
  const { icon: Icon } = props;

  return (
    <div className="flex flex-col items-center gap-1 text-sm font-normal text-zinc-400">
      <Icon size={22} color="lightblue" />
      <span>{props.name}</span>
    </div>
  );
}
