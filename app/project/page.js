import Title from "@/app/_components/Title.js";
import ProjectCard from "@/app/_components/ProjectCard";
import projectsData from "@/app/data/projects.json";

export const metadata = {
  title: "Project",
};

export default function Project() {
  return (
    <div>
      <Title>My Projects</Title>
      {projectsData.projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          descriptions={project.descriptions}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
}
