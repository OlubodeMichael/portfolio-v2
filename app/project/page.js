import Title from "@/app/_components/Title.js";
import ProjectCard from "@/app/_components/ProjectCard";

export const metadata = {
  title: "Project",
}

export default function Project() {
    return (
    <div>
        <Title>My Projects</Title>
        <ProjectCard 
          title="Portfolio" 
          technologies={["Swift", "Xcode", "Firebase", "Firestore", "Final Cut", "Lucid Charts"]}
          link="https://michaelolubode-v2.vercel.app/"
        />
      </div>
    );
  }
  