import "../index.css";

interface ProjectCardComponentProps {
  name: string;
  description: string;
  icon: JSX.Element;
  url: string;
}
export default function ProjectCardComponent(props: ProjectCardComponentProps) {
  console.log(props);

  return (
    <div className="background-gradient mb-3 flex w-full max-w-5xl gap-3 rounded border-[2px] border-indigo-700 px-8 py-8 shadow-custom-shadow shadow-violet-800 transition-all duration-150 ease-in-out">
      <div className="flex flex-col items-start justify-between gap-3 text-base font-normal text-zinc-300">
        <div className="flex items-center gap-2 text-indigo-600">
          {props.icon}
          <h2 className="text-lg font-bold">{props.name}</h2>
        </div>
        <p>{props.description}</p>
        <a
          className="z-20 flex h-12 w-full items-center justify-center rounded border border-zinc-200 font-bold transition-all duration-150 ease-in-out hover:bg-zinc-200 hover:text-zinc-950"
          href={props.url}
          target="_blank"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}
