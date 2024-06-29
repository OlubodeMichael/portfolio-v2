import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

export default function About() {
    return (
    <div>
        <Title>About</Title>
        <SubTitle>Education</SubTitle>
        <p className="pt-2 font-thin">
            <span className="font-normal">
                Degree: 
            </span>
            Bachelor of Science in Computer Science
        </p>
        <p className="py-2 font-thin">
            <span className="font-normal">
                Institution: 
            </span>
            University of Maryland Eastern Shore, Princess Anne, Maryland, USA
        </p>
        <br></br>
        <SubTitle>Skills</SubTitle>
        <h6>Programming Languages</h6>
    </div>
    );
  }
  