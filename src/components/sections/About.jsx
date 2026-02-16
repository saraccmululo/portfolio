import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "TailwindCSS", "Bootstrap"];
  const backendSkills = ["Python", "Django", "Flask", "MySQL", "SQLite", "RESTful APIs"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from from-[#f6552d] to-[#bb8476] bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-2 text-lg text-center">
              Passionate full-stack software developer leveraging a background
              in psychology and digital marketing with expertise in crafting
              responsive, accessible web experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((item, key) => (
                    <span
                      key={key}
                      className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((item, key) => (
                    <span
                      key={key}
                      className="bg-[#915c4f] text-white py-1 px-3 rounded-full text-sm hover:bg-[#915c4f]/50 hover: shadow-[0_2px_8px_rgba(145,92,79,0.2)] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transtion-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Harvard University CS50 Courses - Web Programming with
                    Python and JavaScript, Database with SQL, Python
                    Programming, Computer Science Introduction
                  </strong>
                  - Harvard University (2025-2026)
                </li>
                {/* 
                <li>
                  <strong>CS50 Database with SQL</strong> - Harvard University
                  (2025)
                </li>
                <li>
                  <strong>CS50 Python Programming</strong> - Harvard University
                  (2025)
                </li>
                <li>
                  <strong>CS50 Computer Science Introduction</strong> - Harvard
                  University (2025)
                </li>
                */}
                <li>
                  <strong>Algorithms and Data Structure</strong> - Colt Steele
                  (2025)
                </li>
                {/* 
                <li>
                  <strong>TypeScript in React</strong> - Academind (2025)
                </li>
               
                <li>
                  <strong>React.js/Next.js Course</strong> - Academind (2025)
                </li>
                 */}
                <li>
                  <strong>React.js Course</strong> - ComIT organization (2025)
                </li>
                <li>
                  <strong>JavaScript Essentials 1</strong> - Cisco Networking
                  Academy (2024)
                </li>
                <li>
                  <strong>Digital Marketing</strong> - University of Winnipeg
                  (2022-2024)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transtion-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li className="font-bold">
                    Document Processing Clerk at CRA (2024)
                  </li>
                  <p>
                    Processed 200+ documents daily with speed and accuracy using
                    CRA internal systems.
                  </p>

                  <li className="font-bold">
                    Youth Mentor at Ma Mawi Wi Chi Itata Centre (2018-2019)
                  </li>

                  <p>
                    Maintained safety and cared for 10+ youth while managing
                    conflict and behavioral challenges.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
