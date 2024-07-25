import { useEffect, useState } from "react";
import "../index.css";
import ResponsiveMenuComponent from "./responsiveMenu";

interface HeaderItemComponentProps {
  href: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

export function HeaderItemComponent(props: HeaderItemComponentProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <>
      <a
        onClick={handleClick}
        href={props.href}
        className={`${
          props.selected ? "text-zinc-100" : "text-zinc-500"
        } transition-all duration-150 ease-in-out hover:text-zinc-100`}
      >
        {props.text}
      </a>
    </>
  );
}

interface HeaderComponentProps {}
export default function HeaderComponent(_props: HeaderComponentProps) {
  const [selected, setSelected] = useState<string>("Home");

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="relative z-0 flex h-16 w-full items-center justify-between bg-transparent px-12 py-5 text-zinc-100">
      <span className="text-gradient text-xl font-bold uppercase">Logo</span>
      <nav className="hidden gap-8 font-semibold md:flex">
        <HeaderItemComponent
          href="/"
          text="Home"
          selected={selected == "Home"}
          onClick={() => setSelected("Home")}
        />
        <HeaderItemComponent
          href="/about"
          text="About"
          selected={selected == "About"}
          onClick={() => setSelected("About")}
        />
        <HeaderItemComponent
          href="/projects"
          text="Projects"
          selected={selected == "Projects"}
          onClick={() => setSelected("Projects")}
        />
        <HeaderItemComponent
          href="/contact"
          text="Contact"
          selected={selected == "Contact"}
          onClick={() => setSelected("Contact")}
        />
      </nav>
      <div className="block md:hidden">
        <ResponsiveMenuComponent />
      </div>
    </div>
  );
}
