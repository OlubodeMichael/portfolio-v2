import Title from "../_components/Title";
import SubTitle from "../_components/SubTitle";
import Text from "../_components/Text";
import ExperienceCard from "../_components/ExperienceCard";


export const metadata = {
    title: "About",
}

export default function About() {
    return (
    <div>
        <Title>About</Title>
        <Text>My expertise spans a wide range of programming languages, frameworks, and tools, allowing me to seamlessly bridge the gap between design and functionality. From creating dynamic, responsive user interfaces to building robust server-side applications and managing databases, I thrive on tackling challenges across the entire tech stack.</Text>
        <br></br>
        <Text>I am committed to continuous learning and staying updated with the latest industry trends and technologies. My approach to software development is driven by a dedication to excellence and a desire to build products that make a meaningful impact.</Text>

        {/*Education section */}
        <SubTitle>Education</SubTitle>
        <p className="pt-2 font-thin"><span className="font-normal">Degree: </span> Bachelor of Science in Computer Science</p>
        <p className="py-2 font-thin"><span className="font-normal">Institution: </span> University of Maryland Eastern Shore, Princess Anne, Maryland, USA</p>

        {/*Skills section */}
        <SubTitle>Skills</SubTitle>
        <h6>Programming Languages</h6>

        {/*Experience section */}
        <SubTitle>Experiences</SubTitle>
        <ExperienceCard 
            date="Jan - May 2024"
            title="IOS Developer"
            technologies={["Swift", "Xcode", "Firebase", "Firestore", "Final Cut", "Lucid Charts"]}
            role="Backend engineer / Manager"
        >
            Spearheaded the full-stack development of an iOS mental health platform funded by an Apple innovation grant. Leveraged Swift, Xcode, and Firebase for robust authentication and Firestore for real-time encrypted messaging. Engineered and optimized the application's architecture for high performance and scalability, employing unit and integration testing frameworks to ensure fault tolerance and seamless user interactions. Authored detailed technical documentation and created README videos and app flow diagrams using Final Cut and Lucid Charts, enhancing developer handoff and user understanding.
        </ExperienceCard>

        <ExperienceCard
            date="Jun 2024 - Present"
            title="Total Operational Weather Readiness-Satellites (TOWR-S)"
            role="Software Developer"
            technologies={["Python", "JavaScript", "Linux OS", "SQL", "Git"]}
        >
            Worked as a Software Developer at TOWR-S, focusing on JavaScript-based scientific visualization with d3.js, processing remote sensing data for feature extraction, and advancing data sciences projects using Python, Redhat/CentOS Linux, and Git for software development and version control.
        </ExperienceCard>
        
    </div>
    );
  }
  