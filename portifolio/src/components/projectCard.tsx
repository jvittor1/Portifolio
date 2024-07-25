import image from "../assets/primary-image.svg";
import "../index.css";
interface ProjectCardComponentProps {
  name: string;
  description: string;
  image: string;
  url: string;
}
export default function ProjectCardComponent(props: ProjectCardComponentProps) {
  return (
    <div className="background-gradient flex w-full gap-3 rounded border-[2px] border-indigo-700 px-8 py-8 shadow-custom-shadow shadow-violet-800 transition-all duration-150 ease-in-out">
      <div className="hidden flex-1 items-center justify-center sm:flex">
        <img className="w-full max-w-72" src={image} alt={props.name} />
      </div>
      <div className="flex flex-1 flex-col items-start justify-between gap-2 text-base font-normal text-zinc-300">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dicta
          laudantium! Consequatur cumque quisquam nostrum molestias dolore totam
          ipsa provident aspernatur, at optio doloribus eius, eligendi commodi
          facilis fuga odit?
        </p>
        <a
          className="z-20 flex h-12 w-full items-center justify-center rounded border border-zinc-200 font-bold transition-all duration-150 ease-in-out hover:bg-zinc-200 hover:text-zinc-950"
          href={props.url}
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}
