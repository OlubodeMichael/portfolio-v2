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
            title="High-Performance Multithreaded HTTP Server in C++" 
            descriptions="Developed a high-performance, multithreaded HTTP server in C++ to efficiently handle client requests and serve static files. The server supports concurrent connections, allowing multiple users to access resources simultaneously. Implemented custom request processing to serve HTML, CSS, JavaScript, images, and API responses in JSON format.
            Designed with socket programming and multithreading, the server optimizes request handling for better performance. Integrated logging mechanisms to track server events and client interactions, ensuring robust monitoring. Added caching strategies to improve response times and reduce redundant processing.
            Future enhancements include SSL/TLS encryption for secure HTTPS connections, WebSocket support for real-time applications, and containerization using Docker for scalable deployments."
            technologies={["C++", "Multithreading", "Socket Programming", "HTTP Protocol", "File I/O", "JSON Parsing"]}
            link="https://github.com/OlubodeMichael/HTTPServer"
          />

        <ProjectCard 
          title="Search Engine" 
          descriptions="Developed a full-stack search engine application utilizing Python for backend processing and React.js for the frontend interface. Implemented web crawling and indexing algorithms to efficiently gather and organize web content. Engineered a responsive search interface with real-time results display and advanced filtering capabilities. Utilized Python's natural language processing libraries for text analysis and ranking algorithms to deliver relevant search results. Optimized query performance and implemented caching mechanisms to handle concurrent user searches effectively."
          technologies={["Python", "React.js", "HTML", "CSS", "RESTful API", "Natural Language Processing"]}
          link="https://github.com/OlubodeMichael/Search-Engine-Project"
        />

        <ProjectCard 
          title="Pati Cam" 
          descriptions="A social photo-sharing app designed for parties and events. It simplifies how attendees capture and share memories by allowing them to create dedicated party albums, share access via QR codes, and enable real-time photo uploads and viewing. Users can securely sign in to create albums or join existing ones by scanning QR codes. The app enhances collaboration and keeps party memories in one convenient, shared space, accessible on both Android and iOS platforms."
          technologies={["React Native", "JavaScript", "Firebase", "CSS"]}
          link="https://github.com/OlubodeMichael/PatiCam"
        />

      </div>
    );
  }
  