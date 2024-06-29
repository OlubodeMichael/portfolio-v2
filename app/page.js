import LinkNav from "./components/LinkNav";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";

export default function Home() {
  return (
    <div>
      <Title>My Portfolio</Title>
      <div>
        <div className="flex flex-col space-y-4">
          <p className="text-[16px] text-slate-100 font-light">
            Hello, I'm Michael Olubode, a dedicated software engineer. I specialize in designing and developing software solutions that drive overall product success. With a strong commitment to user-centric design and a passion for clean, intuitive interfaces, I thrive on transforming complex requirements into seamless user experiences. I bring a blend of creativity and technical expertise to deliver solutions that meet strategic business objectives and exceed user expectations.
          </p>
          <LinkNav add="/resume.pdf" target="_blank" className="text-zinc-400 py-4 w-32">Resume</LinkNav>
        </div>
        <div>
          <div>
            <SubTitle>
              Relevant Courses
            </SubTitle>
            <ul className="text-base ">
              <li className="py-2 font-thin">
                <span className="font-normal">Data Structures and Algorithms: </span>
                Studied fundamental algorithms and data structures, including their design, analysis, and implementation.
              </li>
              <li className="py-2 font-thin">
                <span className="font-normal">Software Engineering: </span>
                Learned software development methodologies, project management, and software lifecycle models.
              </li>
              <li className="py-2 font-thin">
                <span className="font-normal">Database Management Systems: </span>
                Covered database design, SQL, and management of relational databases.
              </li>
              <li className="pt-2  pb-6 font-thin">
                <span className="font-normal">Internet Programming: </span>
                Gained proficiency in HTML, CSS, JavaScript, and modern web frameworks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
