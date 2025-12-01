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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    },
    {
      name: "Firebase",
      img: "https://www.gstatic.com/devrel-devsite/prod/vbbbf67a54a0fa61d452a62d016ca62f820d4cb99ab70cea0bd30d469bb65aaf5/firebase/images/touchicon-180.png",
    },
  ];

  const backendSkills: Skill[] = [
    { name: "Java", img: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    {
      name: "PHP",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      name: "C Sharp",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    },
  ];

  const SkillGrid = ({ title, skills }: SkillGridProps) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-200"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-gray-800 font-semibold mb-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-50 text-center transition-all duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
        Habilidades
      </h2>

      <div className="max-w-6xl mx-auto">
        <SkillGrid title="Back-end" skills={backendSkills} />
        <SkillGrid title="SGBD" skills={SGBDSkills} />
        <SkillGrid title="Front-end" skills={frontendSkills} />
      </div>
    </section>
  );
}
