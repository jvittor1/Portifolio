import {
  FaReact,
  FaAngular,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDotnet,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite, TbHexagonLetterCFilled } from "react-icons/tb";

interface ExperienceData {
  name: string;
  icon: JSX.Element;
  color: string;
}

export const experiencesData: ExperienceData[] = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-blue-500",
  },
  {
    name: "Angular",
    icon: <FaAngular />,
    color: "text-red-500",
  },
  {
    name: "Vite",
    icon: <TbBrandVite />,
    color: "text-violet-500",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-700",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-300",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-700",
  },
  {
    name: "SCSS",
    icon: <DiSass />,
    color: "text-pink-500",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    color: "text-teal-500",
  },
  {
    name: "Node",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-blue-800",
  },
  {
    name: "C",
    icon: <TbHexagonLetterCFilled />,
    color: "text-blue-600",
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    color: "text-purple-700",
  },
];
