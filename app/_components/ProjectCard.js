import React from 'react';
import SubTitle from './SubTitle';
import LinkNav from './LinkNav';
import ProjectText from "./ProjectText"
import TechTag from "./TechTag"



export default function ProjectCard({link, title, descriptions, technologies}) {
    return (
        <div className="mb-10">
            <SubTitle>{title}</SubTitle>
            <ProjectText>{descriptions}</ProjectText>
            <TechnologiesList technologies={technologies} className="mb-4"/>
            <LinkNav add={link}>View Project</LinkNav>
        </div>
    );
}

function TechnologiesList({ technologies, className }) {
    return (
        <div className={`flex flex-wrap gap-2 ${className || ''}`}>
            {technologies.map((technology, index) => (
                <TechTag key={index} tech={technology} />
            ))}
        </div>
    );
}


