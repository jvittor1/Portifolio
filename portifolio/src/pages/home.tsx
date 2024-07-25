import "../index.css";
import primaryImg from "../assets/primary-image.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import HeaderComponent from "../components/header";

interface HomeProps {}
export default function Home(_props: HomeProps) {
  return (
    <div className="home-container flex h-screen w-full flex-col">
      <HeaderComponent />
      <div className="flex w-full flex-1 flex-col-reverse items-center justify-between gap-4 px-8 md:flex-row md:gap-32 md:px-32">
        <div className="flex flex-1 flex-col gap-8 text-zinc-300">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Hi, I'm <span className="text-gradient">João Vitor,</span>
          </h1>
          <p className="text-justify text-lg text-zinc-400">
            I'm a software engineer, I love to code and I'm always looking for
            new challenges.
            <br /> I'm passionate about technology and I'm always looking for
            new things to learn.
          </p>

          <span className="mt-12 flex items-center gap-4 text-xl font-semibold text-zinc-200">
            Learn More{" "}
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-base transition-all duration-150 ease-in-out hover:border-zinc-950 hover:bg-zinc-200 hover:text-zinc-950">
              <FaArrowRightLong />
            </button>
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <img
            src={primaryImg}
            alt="Primary Image"
            className="w-full animate-float"
          />
        </div>
      </div>
    </div>
  );
}
