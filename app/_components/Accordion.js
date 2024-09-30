"use client";

import { useState } from 'react';
import SubTitle from './SubTitle';
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Accordion({ children, title }) {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="border-b border-gray-600">
            <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={toggleAccordion}
            >
                <SubTitle>{title}</SubTitle>
                {isActive ? <GoChevronUp /> : <GoChevronDown />}
            </div>
            {isActive && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
