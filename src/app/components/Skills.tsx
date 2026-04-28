"use client";

import { ReactNode } from "react";
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

type Skill = {
  name: string;
  icon: ReactNode;
  description: string;
};

type SkillGroupProps = {
  title: string;
  description: string;
  skills: Skill[];
};

export default function Skills() {
  const backendSkills: Skill[] = [
    {
      name: "Java",
      icon: <FaJava className="text-red-600 text-3xl" />,
      description: "Desarrollo backend y lógica de negocio.",
    },
    {
      name: "Java EE",
      icon: <FaJava className="text-red-700 text-3xl" />,
      description: "Aplicaciones web empresariales.",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-600 text-3xl" />,
      description: "Creación de APIs y servicios backend.",
    },
    {
      name: "Spring Data JPA",
      icon: <SiSpringboot className="text-green-700 text-3xl" />,
      description: "Persistencia de datos en aplicaciones Java.",
    },
    {
      name: "JPA",
      icon: <FaDatabase className="text-purple-600 text-3xl" />,
      description: "Mapeo y gestión de entidades.",
    },
    {
      name: "PHP",
      icon: <FaPhp className="text-indigo-600 text-3xl" />,
      description: "Desarrollo de sistemas web dinámicos.",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500 text-3xl" />,
      description: "Creación de servicios y consumo de modelos.",
    },
    {
      name: "API REST",
      icon: <FaServer className="text-green-600 text-3xl" />,
      description: "Comunicación entre frontend y backend.",
    },
    {
      name: "Hugging Face",
      icon: <FaRobot className="text-yellow-500 text-3xl" />,
      description: "Integración de modelos mediante API.",
    },
  ];

  const frontendMobileSkills: Skill[] = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
      description: "Estructura de interfaces web.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
      description: "Diseño visual y estilos responsivos.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-3xl" />,
      description: "Interactividad en aplicaciones web.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-3xl" />,
      description: "Código más seguro y mantenible.",
    },
    {
      name: "Angular",
      icon: <SiAngular className="text-red-600 text-3xl" />,
      description: "Desarrollo de interfaces web modernas.",
    },
    {
      name: "jQuery",
      icon: <SiJquery className="text-blue-600 text-3xl" />,
      description: "Manipulación del DOM e interacciones web.",
    },
    {
      name: "React Native",
      icon: <FaReact className="text-cyan-500 text-3xl" />,
      description: "Aplicaciones móviles multiplataforma.",
    },
    {
      name: "SwiftUI",
      icon: <FaApple className="text-gray-900 text-3xl dark:text-white" />,
      description: "Interfaces modernas para aplicaciones iOS.",
    },
    {
      name: "Swift",
      icon: <SiSwift className="text-orange-500 text-3xl" />,
      description: "Desarrollo de aplicaciones para iOS.",
    },
  ];

  const databaseSkills: Skill[] = [
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600 text-3xl" />,
      description: "Bases de datos relacionales para sistemas web.",
    },
    {
      name: "SQL Server",
      icon: <FaDatabase className="text-red-600 text-3xl" />,
      description: "Gestión de datos en entornos empresariales.",
    },
    {
      name: "Oracle",
      icon: <FaDatabase className="text-red-700 text-3xl" />,
      description: "Base de datos para aplicaciones institucionales.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-3xl" />,
      description: "Autenticación y base de datos en tiempo real.",
    },
  ];

  const SkillGroup = ({ title, description, skills }: SkillGroupProps) => (
    <div className="mb-16">
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
              {skill.icon}
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

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-6 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest dark:text-blue-400">
            Tecnologías
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 dark:text-white">
            Habilidades
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
            Tecnologías que he utilizado en proyectos web, aplicaciones móviles,
            APIs, bases de datos y soluciones orientadas a la lógica de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              8+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tecnologías backend
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              9+
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Tecnologías frontend y móvil
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              4
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Bases de datos utilizadas
            </p>
          </div>
        </div>

        <SkillGroup
          title="Back-end y APIs"
          description="Tecnologías utilizadas para crear lógica de negocio, servicios, persistencia de datos y comunicación entre sistemas."
          skills={backendSkills}
        />

        <SkillGroup
          title="Front-end y móvil"
          description="Tecnologías utilizadas para construir interfaces web, aplicaciones móviles y experiencias de usuario."
          skills={frontendMobileSkills}
        />

        <SkillGroup
          title="Bases de datos"
          description="Motores y servicios de almacenamiento usados en proyectos web y móviles."
          skills={databaseSkills}
        />
      </div>
    </section>
  );
}
