export default function ExperienceCard({ children, date, title, role, technologies }) {
    return (
        <div className="flex items-start w-full mb-6 flex-col ">
            <p className="text-sm font-light text-zinc-400 pr-4 whitespace-nowrap">{date}</p>
            <div className="flex-1">
                <h4 className="text-md font-normal mb-1">{title}</h4>
                <p className="text-sm italic mb-2">{role}</p>
                <div className="text-sm font-light leading-relaxed mb-2">
                    {children}
                </div>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-sm rounded font-extralight px-2 py-1 border border-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
