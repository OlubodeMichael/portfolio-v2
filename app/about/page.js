import Title from "../_components/Title";
import Text from "../_components/Text";
import ExperienceCard from "../_components/ExperienceCard";
import Technologies from "@/app/_components/Technologies";
import Accordion from "../_components/Accordion";
import { 
    CPlusPlusIcon, JavaScriptIcon, PythonIcon, 
    ReactIcon, SwiftIcon, MySQLIcon, 
    JavaIcon, HTML5Icon, NodeJsIcon, NextJsIcon, ExpressJsDarkIcon, TailwindCSSIcon, ReactNativeIcon,
} from "developer-icons"; 


export const metadata = {
    title: "About",
}

export default function About() {
    const languages = [
        { component: <CPlusPlusIcon />, label: 'C++' },
        { component: <JavaScriptIcon />, label: 'JavaScript' },
        { component: <PythonIcon />, label: 'Python' },
        { component: <SwiftIcon />, label: 'Swift' },
        { component: <JavaIcon />, label: 'Java' },
        { component: <HTML5Icon />, label: 'HTML' },
        { component: <MySQLIcon />, label: 'Sql' },
        //{ component: <ReactNativeIcon />, label: 'React Native'}
        
      ];
    
      const frameworks = [
        { component: <ReactIcon />, label: 'ReactJS' },
        { component: <NodeJsIcon />, label: 'NodeJs' },
        { component: <NextJsIcon />, label: 'NextJS' },
        { component: <ExpressJsDarkIcon />, label: 'ExpressJs' },
        { component: <TailwindCSSIcon />, label: 'Tailwind css' },
      ]
    return (
    <div>
        <Title>About</Title>
        <Text>My expertise spans a wide range of programming languages, frameworks, and tools, allowing me to seamlessly bridge the gap between design and functionality. From creating dynamic, responsive user interfaces to building robust server-side applications and managing databases, I thrive on tackling challenges across the entire tech stack.</Text>
        <br></br>
        <Text>I am committed to continuous learning and staying updated with the latest industry trends and technologies. My approach to software development is driven by a dedication to excellence and a desire to build products that make a meaningful impact.</Text>

        {/*Education section */}
        <Accordion title="Education">
            <p className="pt-2 font-thin"><span className="font-normal">Degree: </span> Bachelor of Science in Computer Science</p>
            <p className="py-2 font-thin"><span className="font-normal">Institution: </span> University of Maryland Eastern Shore, Princess Anne, Maryland, USA</p>
        </Accordion>


        {/*Skills section */}
        <Accordion title="Skills">
            <h6>Programming Languages</h6>
            <Technologies left={true} list={languages}/>
            <h6 className="">Frameworks</h6>
            <Technologies left={false} list={frameworks}/>
        </Accordion>
        

        {/*Experience section */}
        <Accordion title="Experience">
            <ExperienceCard
                date="Jun 2024 - Present"
                title="Total Operational Weather Readiness-Satellites (TOWR-S)"
                role="Software Developer"
                technologies={["Python", "JavaScript", "Linux OS", "SQL", "Git", "Jenkins", "AWS DynamoDB", "HTML/CSS", "AWS S3", "Python Sphinx"]}
            >
                Maintained and enhanced an existing Python framework for compiling pre-written JavaScript components, facilitating data-driven web applications. Contributed to feature planning and task delegation while supporting the Continuous Deployment pipeline in Jenkins for Python Sphinx documentation. Played a key role in developing, testing, and integrating new functionalities for a React web application using agile methodologies. Monitored satellite data product flow, provided prompt customer support during outages, and utilized AWS S3 and DynamoDB to extend the framework’s capabilities. Engaged in collaborative efforts to ensure seamless project execution and improve overall system performance.
            </ExperienceCard>
            <ExperienceCard 
                date="Jan - May 2024"
                title="IOS Developer"
                technologies={["Swift", "Xcode", "Firebase", "Firestore", "Final Cut", "Lucid Charts"]}
                role="Backend engineer / Manager"
            >
                Spearheaded the full-stack development of an iOS mental health platform funded by an Apple innovation grant. Leveraged Swift, Xcode, and Firebase for robust authentication and Firestore for real-time encrypted messaging. Engineered and optimized the application's architecture for high performance and scalability, employing unit and integration testing frameworks to ensure fault tolerance and seamless user interactions. Authored detailed technical documentation and created README videos and app flow diagrams using Final Cut and Lucid Charts, enhancing developer handoff and user understanding.
            </ExperienceCard>
        </Accordion>
    </div>
    );
  }
  
