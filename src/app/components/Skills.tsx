/* eslint-disable @next/next/no-img-element */

type Skill = {
  name: string;
  img: string;
};

type SkillGridProps = {
  title: string;
  skills: Skill[];
};

export default function Skills() {
  const frontendSkills: Skill[] = [
    {
      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://www.adaweb.es/wp-content/uploads/2022/05/logotipo_css-min.png",
    },
    {
      name: "React Native",
      img: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/330px-Typescript_logo_2020.svg.png",
    },
  ];

  const SGBDSkills: Skill[] = [
    {
      name: "SQL SERVER",
      img: "https://red9.com/wp-content/uploads/2024/03/sql-server-builds.jpg",
    },
    {
      name: "MYSQL",
      img: "https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png",
    },
    {
      name: "ORACLE",
      img: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
    },
    {
      name: "Firebase",
      img: "https://www.gstatic.com/devrel-devsite/prod/vbbbf67a54a0fa61d452a62d016ca62f820d4cb99ab70cea0bd30d469bb65aaf5/firebase/images/touchicon-180.png",
    },
  ];

  const backendSkills: Skill[] = [
    {
      name: "Java",
      img: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    },
    {
      name: "PHP",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png",
    },
    {
      name: "C Sharp",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    },
  ];

  const SkillGrid = ({ title, skills }: SkillGridProps) => (
    <div className="mb-14">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 dark:text-gray-100">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 dark:shadow-slate-950"
          >
            <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 p-3 dark:bg-slate-800">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-gray-800 font-semibold mb-2 dark:text-gray-100">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-50 text-center transition-colors duration-300 dark:bg-slate-950"
    >
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest dark:text-blue-400">
        Tecnologías
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4 dark:text-white">
        Habilidades
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-300">
        Tecnologías y herramientas con las que he trabajado en desarrollo web,
        backend, bases de datos y aplicaciones.
      </p>

      <div className="max-w-6xl mx-auto">
        <SkillGrid title="Back-end" skills={backendSkills} />
        <SkillGrid title="SGBD" skills={SGBDSkills} />
        <SkillGrid title="Front-end" skills={frontendSkills} />
      </div>
    </section>
  );
}
