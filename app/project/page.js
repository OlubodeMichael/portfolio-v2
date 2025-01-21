import Title from "@/app/_components/Title.js";
import ProjectCard from "@/app/_components/ProjectCard";

export const metadata = {
  title: "Project",
}

//link, title, descriptions, technologies
export default function Project() {
    return (
    <div>
        <Title>My Projects</Title>
        <ProjectCard 
          title="Portfolio" 
          descriptions="Spearheaded the full-stack development of an iOS mental health platform funded by an Apple innovation grant. Leveraged Swift, Xcode, and Firebase for robust authentication and Firestore for real-time encrypted messaging. Engineered and optimized the application's architecture for high performance and scalability, employing unit and integration testing frameworks to ensure fault tolerance and seamless user interactions. Authored detailed technical documentation and created README videos and app flow diagrams using Final Cut and Lucid Charts, enhancing developer handoff and user understanding."
          technologies={["Swift", "Xcode", "Firebase", "Firestore", "Final Cut", "Lucid Charts"]}
          link="https://michaelolubode-v2.vercel.app/"
        />
      </div>
    );
  }
  