import SectionTitleComponent from "../components/sectionTitle";
import secondaryImg from "../assets/secondary-image.svg";
import ExperienceItemCard from "../components/experienceItemCard";
import { experiencesData } from "../data/experiencesData";
interface AboutProps {}
export default function About(_props: AboutProps) {
  return (
    <section className="flex w-full flex-col px-8 md:px-32">
      <div className="rounded-md border-[2px] border-indigo-700 bg-gradient-to-br from-[#4c33b15c] to-[rgba(74,23,141,0.05)] px-6 py-4 shadow-custom-shadow shadow-violet-800 backdrop-blur-3xl">
        <div className="mt-4 flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-1">
            <img src={secondaryImg} alt="Secondary Image" className="w-full" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-8">
            <SectionTitleComponent title="About" />

            <p className="text-justify text-base font-medium text-zinc-300 2xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              nulla beatae harum earum reprehenderit assumenda dolore iusto
              aperiam culpa tenetur quidem, placeat, ipsum dolorum dignissimos
              quaerat illum voluptate aut impedit!Lorem Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nisi nulla nam est amet commodi
              illum quos. Dolorum, quia similique neque aspernatur velit,
              necessitatibus nam in asperiores tenetur quidem modi perferendis.
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
