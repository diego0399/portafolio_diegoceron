"use client";

import { ReactNode } from "react";
import type { Language } from "./translations";

import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
  FaPython,
  FaReact,
  FaServer,
  FaApple,
  FaRobot,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJquery,
  SiSwift,
  SiFirebase,
  SiAngular,
  SiTypescript,
} from "react-icons/si";

type SkillName =
  | "Java"
  | "Java EE"
  | "Spring Boot"
  | "Spring Data JPA"
  | "JPA"
  | "PHP"
  | "Python"
  | "API REST"
  | "Hugging Face"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Angular"
  | "jQuery"
  | "React Native"
  | "SwiftUI"
  | "Swift"
  | "MySQL"
  | "SQL Server"
  | "Oracle"
  | "Firebase";

type Skill = {
  name: SkillName;
  description: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

type Stat = {
  number: string;
  label: string;
};

type SkillsProps = {
  language: Language;
};

const skillIcons: Record<SkillName, ReactNode> = {
  Java: <FaJava className="text-red-600 text-3xl" />,
  "Java EE": <FaJava className="text-red-700 text-3xl" />,
  "Spring Boot": <SiSpringboot className="text-green-600 text-3xl" />,
  "Spring Data JPA": <SiSpringboot className="text-green-700 text-3xl" />,
  JPA: <FaDatabase className="text-purple-600 text-3xl" />,
  PHP: <FaPhp className="text-indigo-600 text-3xl" />,
  Python: <FaPython className="text-blue-500 text-3xl" />,
  "API REST": <FaServer className="text-green-600 text-3xl" />,
  "Hugging Face": <FaRobot className="text-yellow-500 text-3xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-3xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-3xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-3xl" />,
  Angular: <SiAngular className="text-red-600 text-3xl" />,
  jQuery: <SiJquery className="text-blue-600 text-3xl" />,
  "React Native": <FaReact className="text-cyan-500 text-3xl" />,
  SwiftUI: <FaApple className="text-gray-900 text-3xl dark:text-white" />,
  Swift: <SiSwift className="text-orange-500 text-3xl" />,
  MySQL: <SiMysql className="text-blue-600 text-3xl" />,
  "SQL Server": <FaDatabase className="text-red-600 text-3xl" />,
  Oracle: <FaDatabase className="text-red-700 text-3xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-3xl" />,
};

const skillsContent: Record<
  Language,
  {
    badge: string;
    title: string;
    description: string;
    stats: Stat[];
    groups: SkillGroup[];
  }
> = {
  es: {
    badge: "Tecnologías",
    title: "Habilidades",
    description:
      "Tecnologías que he utilizado en proyectos web, aplicaciones móviles, APIs, bases de datos y soluciones orientadas a la lógica de negocio.",
    stats: [
      {
        number: "8+",
        label: "Tecnologías backend",
      },
      {
        number: "9+",
        label: "Tecnologías frontend y móvil",
      },
      {
        number: "4",
        label: "Bases de datos utilizadas",
      },
    ],
    groups: [
      {
        title: "Back-end y APIs",
        description:
          "Tecnologías utilizadas para crear lógica de negocio, servicios, persistencia de datos y comunicación entre sistemas.",
        skills: [
          {
            name: "Java",
            description: "Desarrollo backend y lógica de negocio.",
          },
          {
            name: "Java EE",
            description: "Aplicaciones web empresariales.",
          },
          {
            name: "Spring Boot",
            description: "Creación de APIs y servicios backend.",
          },
          {
            name: "Spring Data JPA",
            description: "Persistencia de datos en aplicaciones Java.",
          },
          {
            name: "JPA",
            description: "Mapeo y gestión de entidades.",
          },
          {
            name: "PHP",
            description: "Desarrollo de sistemas web dinámicos.",
          },
          {
            name: "Python",
            description: "Creación de servicios y consumo de modelos.",
          },
          {
            name: "API REST",
            description: "Comunicación entre frontend y backend.",
          },
          {
            name: "Hugging Face",
            description: "Integración de modelos mediante API.",
          },
        ],
      },
      {
        title: "Front-end y móvil",
        description:
          "Tecnologías utilizadas para construir interfaces web, aplicaciones móviles y experiencias de usuario.",
        skills: [
          {
            name: "HTML",
            description: "Estructura de interfaces web.",
          },
          {
            name: "CSS",
            description: "Diseño visual y estilos responsivos.",
          },
          {
            name: "JavaScript",
            description: "Interactividad en aplicaciones web.",
          },
          {
            name: "TypeScript",
            description: "Código más seguro y mantenible.",
          },
          {
            name: "Angular",
            description: "Desarrollo de interfaces web modernas.",
          },
          {
            name: "jQuery",
            description: "Manipulación del DOM e interacciones web.",
          },
          {
            name: "React Native",
            description: "Aplicaciones móviles multiplataforma.",
          },
          {
            name: "SwiftUI",
            description: "Interfaces modernas para aplicaciones iOS.",
          },
          {
            name: "Swift",
            description: "Desarrollo de aplicaciones para iOS.",
          },
        ],
      },
      {
        title: "Bases de datos",
        description:
          "Motores y servicios de almacenamiento usados en proyectos web y móviles.",
        skills: [
          {
            name: "MySQL",
            description: "Bases de datos relacionales para sistemas web.",
          },
          {
            name: "SQL Server",
            description: "Gestión de datos en entornos empresariales.",
          },
          {
            name: "Oracle",
            description: "Base de datos para aplicaciones institucionales.",
          },
          {
            name: "Firebase",
            description: "Autenticación y base de datos en tiempo real.",
          },
        ],
      },
    ],
  },

  en: {
    badge: "Technologies",
    title: "Skills",
    description:
      "Technologies I have used in web projects, mobile applications, APIs, databases, and business-logic-oriented solutions.",
    stats: [
      {
        number: "8+",
        label: "Backend technologies",
      },
      {
        number: "9+",
        label: "Frontend and mobile technologies",
      },
      {
        number: "4",
        label: "Databases used",
      },
    ],
    groups: [
      {
        title: "Back-end and APIs",
        description:
          "Technologies used to create business logic, services, data persistence, and communication between systems.",
        skills: [
          {
            name: "Java",
            description: "Backend development and business logic.",
          },
          {
            name: "Java EE",
            description: "Enterprise web applications.",
          },
          {
            name: "Spring Boot",
            description: "API and backend service development.",
          },
          {
            name: "Spring Data JPA",
            description: "Data persistence in Java applications.",
          },
          {
            name: "JPA",
            description: "Entity mapping and management.",
          },
          {
            name: "PHP",
            description: "Dynamic web system development.",
          },
          {
            name: "Python",
            description: "Service creation and model consumption.",
          },
          {
            name: "API REST",
            description: "Communication between frontend and backend.",
          },
          {
            name: "Hugging Face",
            description: "Model integration through APIs.",
          },
        ],
      },
      {
        title: "Front-end and mobile",
        description:
          "Technologies used to build web interfaces, mobile applications, and user experiences.",
        skills: [
          {
            name: "HTML",
            description: "Web interface structure.",
          },
          {
            name: "CSS",
            description: "Visual design and responsive styles.",
          },
          {
            name: "JavaScript",
            description: "Interactivity in web applications.",
          },
          {
            name: "TypeScript",
            description: "Safer and more maintainable code.",
          },
          {
            name: "Angular",
            description: "Modern web interface development.",
          },
          {
            name: "jQuery",
            description: "DOM manipulation and web interactions.",
          },
          {
            name: "React Native",
            description: "Cross-platform mobile applications.",
          },
          {
            name: "SwiftUI",
            description: "Modern interfaces for iOS applications.",
          },
          {
            name: "Swift",
            description: "iOS application development.",
          },
        ],
      },
      {
        title: "Databases",
        description:
          "Storage engines and services used in web and mobile projects.",
        skills: [
          {
            name: "MySQL",
            description: "Relational databases for web systems.",
          },
          {
            name: "SQL Server",
            description: "Data management in enterprise environments.",
          },
          {
            name: "Oracle",
            description: "Database for institutional applications.",
          },
          {
            name: "Firebase",
            description: "Authentication and real-time database.",
          },
        ],
      },
    ],
  },
};

function SkillGroupCard({ title, description, skills }: SkillGroup) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-7 text-left">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-blue-500/40"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 dark:bg-slate-800">
              {skillIcons[skill.name]}
            </div>

            <div className="text-left">
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                {skill.name}
              </h4>

              <p className="mt-1 text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ language }: SkillsProps) {
  const content = skillsContent[language];

  return (
    <section
      id="skills"
      className="py-12 px-4 sm:py-16 md:py-20 md:px-6 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest dark:text-blue-400">
            {content.badge}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 dark:text-white">
            {content.title}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12 md:mb-16">
          {content.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm dark:bg-slate-900 dark:border-slate-800 ${
                index === 2 ? "sm:col-span-2 md:col-span-1" : ""
              }`}
            >
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.number}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {content.groups.map((group) => (
          <SkillGroupCard
            key={group.title}
            title={group.title}
            description={group.description}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
}
