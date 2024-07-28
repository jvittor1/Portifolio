import ProjectCardComponent from "../components/projectCard";
import SectionTitleComponent from "../components/sectionTitle";
import { participatedProject, projectsData } from "../data/projectsData";
import "../index.css";

interface ProjectsProps {}
export default function Projects(_props: ProjectsProps) {
  const projects = projectsData;
  const projectParticipated = participatedProject;

  return (
    <section
      id="projects"
      className="mt-20 flex w-full flex-col items-start gap-6 px-8 md:px-32"
    >
      <SectionTitleComponent title="Projects" />
      <div className="projects-container grid w-full grid-cols-1 justify-between gap-3 lg:grid-cols-2 2xl:flex">
        {projects.map((project, index) => (
          <ProjectCardComponent
            key={index}
            name={project.title}
            icon={project.icon}
            description={project.description}
            url={project.href}
          />
        ))}
      </div>

      <div className="mb-2 mt-8 flex flex-col-reverse items-start gap-8 md:flex-row">
        <div className="flex flex-1">
          {
            <ProjectCardComponent
              name={projectParticipated.title}
              icon={projectParticipated.icon}
              description={projectParticipated.description}
              url={projectParticipated.href}
            />
          }
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <span className="text-gradient w-full text-start text-2xl font-semibold">
            Project that I have worked on
          </span>

          <p className="text-justify font-medium text-zinc-300">
            This project is a web application that aggregates a wide range of
            products from different stores, showcasing the variety of prices
            these items have. It serves as an intermediary between the customer
            and the desired product's store. The aim is to present users with as
            many options as possible for a given product, enabling them to make
            informed financial decisions based on the available information. The
            primary benefit of this application is the potential savings users
            can achieve by comparing different product options and purchasing
            from the store with the most affordable price.
          </p>
        </div>
      </div>
    </section>
  );
}
