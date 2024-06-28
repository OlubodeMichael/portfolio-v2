import LinkNav from "./components/LinkNav";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl py-10">My Portfolio</h1>
      <div>
        <div className="flex flex-col space-y-4">
          <p className="text-[16px] text-slate-100 font-light">
            Hello, I'm Michael Olubode, a dedicated software engineer. I specialize in designing and developing software solutions that drive overall product success. With a strong commitment to user-centric design and a passion for clean, intuitive interfaces, I thrive on transforming complex requirements into seamless user experiences. I bring a blend of creativity and technical expertise to deliver solutions that meet strategic business objectives and exceed user expectations.
          </p>
          <LinkNav add="/resume.pdf" target="_blank" className="text-zinc-400 py-4">Resume</LinkNav>
        </div>
        <div>
          <div>
            <h5 className="py-2 text-base font-bold">
              Relevant Courses
            </h5>
            <ul className="px-2 text-base list-disc list-inside">
              <li>
                <span className="font-bold">Data Structures and Algorithms: </span>
                Studied fundamental algorithms and data structures, including their design, analysis, and implementation.
              </li>
              <li>
                <span className="font-bold">Software Engineering: </span>
                Learned software development methodologies, project management, and software lifecycle models.
              </li>
              <li>
                <span className="font-bold">Database Management Systems: </span>
                Covered database design, SQL, and management of relational databases.
              </li>
              <li>
                <span className="font-bold">Internet Programming: </span>
                Gained proficiency in HTML, CSS, JavaScript, and modern web frameworks.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="py-6 text-lg">Interests and Hobbies</h3>
        </div>
      </div>
    </div>
  );
}
