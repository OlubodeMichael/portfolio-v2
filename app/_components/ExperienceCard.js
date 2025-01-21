import ProjectText from "./ProjectText"
import TechTag from "./TechTag"

export default function ExperienceCard({ children, date, title, role, technologies }) {
    return (
        <div className="flex items-start w-full mb-6 flex-col ">
            <p className="text-sm font-light text-zinc-400 pr-4 whitespace-nowrap">{date}</p>
            <div className="flex-1">
                <h4 className="text-md font-normal mb-1">{title}</h4>
                <p className="text-sm italic mb-2">{role}</p>
                <ProjectText>
                    {children}
                </ProjectText>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <TechTag key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}
