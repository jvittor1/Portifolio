import ProjectCardComponent from "../components/projectCard";
import SectionTitleComponent from "../components/sectionTitle";
import "../index.css";

interface ProjectsProps {}
export default function Projects(_props: ProjectsProps) {
  return (
    <div className="mt-14 flex w-full flex-col items-start gap-6 px-8 md:px-32">
      <SectionTitleComponent name="Projects" />
      <div className="projects-container grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <ProjectCardComponent
          name="Project 1"
          description="Description 1"
          image=""
          url="/"
        />
        <ProjectCardComponent
          name="Project 1"
          description="Description 1"
          image=""
          url="/"
        />
        <ProjectCardComponent
          name="Project 1"
          description="Description 1"
          image=""
          url="/"
        />
        <ProjectCardComponent
          name="Project 1"
          description="Description 1"
          image=""
          url="/"
        />
      </div>

      <span className="text-gradient mb-2 mt-8 w-full text-center text-2xl font-semibold">
        Project that I have worked on
      </span>

      <ProjectCardComponent
        name="Project 1"
        description="Description 1"
        image=""
        url="/"
      />
    </div>
  );
}
