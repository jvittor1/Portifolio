import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "../index.css";

export function IconComponent({
  Icon,
  href,
}: {
  Icon: IconType;
  href: string;
}) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <div
      className="icon-container flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-transparent text-base text-zinc-300 transition-all duration-300 ease-in-out hover:bg-zinc-200 hover:text-zinc-900 2xl:h-10 2xl:w-10 2xl:text-lg"
      onClick={handleClick}
    >
      <Icon className="icon" />
    </div>
  );
}

interface SocialMediaIconsProps {}
export default function SocialMediaIcons(_props: SocialMediaIconsProps) {
  return (
    <div className="flex items-center gap-2">
      <IconComponent Icon={MdEmail} href="mailto:joaovitorbsilva31@gmail.com" />
      <IconComponent
        Icon={FaLinkedin}
        href="https://www.linkedin.com/in/joão-vitor-batista-385a2431a"
      />
      <IconComponent Icon={FaGithub} href="https://github.com/jvittor1" />
    </div>
  );
}
