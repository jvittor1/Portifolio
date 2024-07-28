import SectionTitleComponent from "../components/sectionTitle";
import secondaryImg from "../assets/secondary-image.svg";
import ExperienceItemCard from "../components/experienceItemCard";
import { experiencesData } from "../data/experiencesData";
interface AboutProps {}
export default function About(_props: AboutProps) {
  return (
    <section id="about" className="flex w-full flex-col px-8 md:px-32">
      <div className="rounded-md border-[2px] border-indigo-700 bg-gradient-to-br from-[#4c33b15c] to-[rgba(74,23,141,0.05)] px-6 py-4 shadow-custom-shadow shadow-violet-800 backdrop-blur-3xl">
        <div className="mt-4 flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-1">
            <img src={secondaryImg} alt="Secondary Image" className="w-full" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-8">
            <SectionTitleComponent title="About" />

            <p className="text-justify text-base font-medium text-zinc-300 2xl:text-lg">
              My name is João Vitor. I am from Itajubá, Minas Gerais, and I am
              currently pursuing a degree in Information Systems at the Federal
              University of Itajubá (UNIFEI). I have always been interested in
              technology and enjoy learning new tools and methodologies. I
              believe that technology has the potential to transform lives, and
              I strive to contribute positively through my work. My goal is to
              continue evolving as a professional and to apply my knowledge to
              solve real-world problems, helping to create innovative and
              efficient solutions.
            </p>

            <div className="flex w-full flex-col gap-4">
              <span className="font-medium text-zinc-300 2xl:text-lg">
                Technologies Experiences:{" "}
              </span>
              <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5">
                {experiencesData.map((experience, index) => (
                  <ExperienceItemCard
                    key={index}
                    name={experience.name}
                    icon={experience.icon}
                    color={experience.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
