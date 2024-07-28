import { FaSpotify, FaStore } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { SiLeagueoflegends } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

interface IProjectData {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

export const projectsData: IProjectData[] = [
  {
    title: "Spotify Clone",
    description:
      "This is a clone of the Spotify web application. It was built using Angular and the Spotify API. The application allows users to search for songs, artists, and albums. The application also has a login feature that allows users to log in with their Spotify account.",
    icon: <FaSpotify />,
    href: "https://github.com/jvittor1/SpotifyClone",
  },
  {
    title: "League of Legends Profile",
    description:
      "This is a web application that allows users to search for a League of Legends profile. The application uses the Riot Games API to get the user's profile information. The application was built using Angular and Node.js.",
    icon: <SiLeagueoflegends />,
    href: "https://github.com/jvittor1/League-Profile",
  },

  {
    title: "Sql Injection",
    description:
      "This is a web application that allows users to insert SQL injection in a form. The application was built using Angular and Node.js.",
    icon: <TbFileTypeSql />,
    href: "https://github.com/jvittor1/Sql-Injection",
  },

  {
    title: "Task Management",
    description:
      "This is a application that allows users to manage their tasks. The application was built using Vite, Tailwind CSS, and .NET Core. The application has a login feature that allows users to log in with their account and read, create, update, and delete tasks.",
    icon: <MdTask />,
    href: "https://github.com/jvittor1/Task-Management",
  },
];

export const participatedProject: IProjectData = {
  title: "Projeto Web",
  description:
    "This is a application that shows the discounts of products and which store has the best price. The application was built using Angular, NestJs, and MongoDB. I participated in the development of the frontend of the application.",
  icon: <FaStore />,
  href: "https://github.com/Ratos-de-Capa/Projeto",
};
