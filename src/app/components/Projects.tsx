"use client";

import { ReactNode, useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
  FaApple,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaPython,
  FaReact,
  FaServer,
  FaRobot,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJquery,
  SiSwift,
  SiFirebase,
} from "react-icons/si";

type Tech =
  | "PHP"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "jQuery"
  | "MySQL"
  | "SQL Server"
  | "Java"
  | "Spring Boot"
  | "SwiftUI"
  | "Swift"
  | "Firebase"
  | "Python"
  | "React Native"
  | "Hugging Face"
  | "API REST";

type ProjectCategory = "Web" | "Móvil" | "API";

const projectFilters: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Web",
  "Móvil",
  "API",
];

const techIcons: Record<Tech, ReactNode> = {
  PHP: <FaPhp className="text-indigo-600 text-lg" />,
  HTML: <FaHtml5 className="text-orange-500 text-lg" />,
  CSS: <FaCss3Alt className="text-blue-500 text-lg" />,
  JavaScript: <FaJs className="text-yellow-400 text-lg" />,
  jQuery: <SiJquery className="text-blue-600 text-lg" />,
  MySQL: <SiMysql className="text-blue-600 text-lg" />,
  "SQL Server": <FaDatabase className="text-red-600 text-lg" />,
  Java: <FaJava className="text-red-600 text-lg" />,
  "Spring Boot": <SiSpringboot className="text-green-600 text-lg" />,
  SwiftUI: <FaApple className="text-gray-900 dark:text-white text-lg" />,
  Swift: <SiSwift className="text-orange-500 text-lg" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg" />,
  Python: <FaPython className="text-blue-500 text-lg" />,
  "React Native": <FaReact className="text-cyan-500 text-lg" />,
  "Hugging Face": <FaRobot className="text-yellow-500 text-lg" />,
  "API REST": <FaServer className="text-green-600 text-lg" />,
};

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  learned?: string;
  technologies: Tech[];
  categories: ProjectCategory[];
  images: string[];
  date: string;
  role?: string;
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Tienda Web de Equipo y Periféricos de Cómputo",
    categories: ["Web"],
    description:
      "Página web desarrollada para una empresa local, permitiendo a los usuarios explorar productos de cómputo, agregarlos al carrito y realizar compras desde una interfaz web funcional.",

    longDescription:
      "Sistema web desarrollado para digitalizar la venta de equipo y periféricos de cómputo. La plataforma permite mostrar productos mediante un catálogo dinámico, gestionar usuarios, administrar productos, categorías y pedidos, además de generar reportes gráficos para apoyar el análisis de ventas del negocio.",

    problem:
      "La empresa necesitaba una forma más organizada de mostrar sus productos y administrar sus ventas, ya que el proceso manual dificultaba el control de pedidos, productos disponibles y clientes registrados.",

    solution:
      "Se desarrolló una tienda web con catálogo de productos, carrito de compras, proceso de checkout, autenticación de usuarios y un panel administrativo para gestionar la información del negocio.",

    impact:
      "El sistema permitió centralizar la gestión de productos, clientes y pedidos, facilitando la administración del negocio y mejorando la experiencia de los usuarios al consultar y comprar productos.",

    learned:
      "En este proyecto reforcé mis conocimientos en desarrollo web con PHP, manejo de sesiones, operaciones CRUD, conexión con bases de datos MySQL, creación de carritos de compra y generación de reportes gráficos.",

    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],

    date: "Diciembre 2020",

    role: "Desarrollador web",

    features: [
      "Catálogo dinámico de productos.",
      "Carrito de compras.",
      "Proceso de checkout.",
      "Inicio de sesión y gestión de usuarios.",
      "Panel administrativo para productos, categorías y pedidos.",
      "Gestión de clientes.",
      "Generación de reportes gráficos estadísticos.",
      "Registro de compras y generación de factura.",
      "Integración con base de datos MySQL.",
      "Operaciones CRUD para la administración del sistema.",
    ],

    images: [
      "/images/Proyectos/computerstore/principal.png",
      "/images/Proyectos/computerstore/login.png",
      "/images/Proyectos/computerstore/carrito.png",
      "/images/Proyectos/computerstore/compras.png",
      "/images/Proyectos/computerstore/factura.png",
    ],
  },
  {
    title: "Sistema Web de Gestión Ganadera",
    categories: ["Web"],
    description:
      "Sistema web desarrollado para la administración integral de una granja bovina, permitiendo controlar animales, producción de leche y procesos reproductivos desde una interfaz clara y funcional.",

    longDescription:
      "Sistema web desarrollado bajo el patrón Modelo-Vista-Controlador (MVC) para gestionar información ganadera de una granja bovina. La plataforma permite registrar información individual de cada vaca, controlar parentesco, estado de gestación, producción diaria de leche y generar reportes estadísticos para apoyar la toma de decisiones dentro de la granja.",

    problem:
      "La granja necesitaba mejorar el control de la información del ganado, ya que llevar registros manuales sobre producción de leche, gestación y parentesco podía provocar desorden, pérdida de datos y dificultad para analizar el rendimiento de los animales.",

    solution:
      "Se desarrolló un sistema web administrativo que permite registrar y consultar información detallada del ganado, controlar la producción lechera, gestionar procesos reproductivos y visualizar reportes estadísticos.",

    impact:
      "El sistema ayudó a organizar los registros ganaderos, facilitó el seguimiento de cada animal y permitió consultar información productiva de forma más rápida y estructurada.",

    learned:
      "En este proyecto fortalecí mis conocimientos en Java, arquitectura MVC, conexión con SQL Server, consultas a bases de datos relacionales, manejo de formularios y desarrollo de módulos administrativos.",

    technologies: ["Java", "HTML", "CSS", "jQuery", "SQL Server"],

    date: "Diciembre 2021",

    role: "Desarrollador del sistema",

    features: [
      "Registro e identificación individual de cada vaca.",
      "Gestión de parentesco para control genético del ganado.",
      "Monitoreo del estado de gestación.",
      "Control de procesos reproductivos.",
      "Registro y seguimiento de la producción diaria de leche.",
      "Panel administrativo para gestión de datos ganaderos.",
      "Generación de reportes estadísticos sobre producción y rendimiento.",
      "Integración con base de datos SQL Server.",
      "Operaciones CRUD para la gestión de animales y registros productivos.",
    ],

    images: [
      "/images/Proyectos/Proyecto Granja/login.png",
      "/images/Proyectos/Proyecto Granja/principal.png",
      "/images/Proyectos/Proyecto Granja/vacas.png",
      "/images/Proyectos/Proyecto Granja/datosgenerales.png",
    ],
  },
  {
    title: "Sistema de Control de Inventario para Empresa CRIO",
    categories: ["Web"],
    description:
      "Sistema web desarrollado para gestionar productos, almacenes y movimientos de inventario, facilitando el control de entradas, salidas y disponibilidad de mercancías.",

    longDescription:
      "Sistema web desarrollado bajo el patrón MVC para mejorar la administración del inventario de la empresa CRIO. La solución permite registrar productos, gestionar almacenes, controlar entradas y salidas de mercancía, consultar existencias disponibles y administrar usuarios del sistema desde una interfaz web.",

    problem:
      "La empresa necesitaba una forma más ordenada de controlar su inventario, ya que el manejo manual de productos, almacenes y movimientos podía generar errores, pérdida de información y dificultad para consultar la disponibilidad de mercancías.",

    solution:
      "Se desarrolló un sistema web que centraliza la gestión de productos, almacenes, usuarios y movimientos de inventario, permitiendo registrar entradas y salidas de mercancía de forma más eficiente.",

    impact:
      "El sistema permitió organizar mejor la información del inventario, agilizar la consulta de existencias y reducir la dependencia de registros manuales.",

    learned:
      "En este proyecto reforcé mis conocimientos en desarrollo web con PHP, conexión a bases de datos MySQL, operaciones CRUD, manejo de sesiones y organización del código bajo el patrón MVC.",

    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],

    date: "Octubre 2022",

    role: "Desarrollador del sistema",

    features: [
      "Inicio de sesión para usuarios autorizados.",
      "Gestión de productos registrados en el inventario.",
      "Administración de almacenes.",
      "Registro de entradas de mercancía.",
      "Registro de salidas de mercancía.",
      "Consulta de disponibilidad de productos.",
      "Administración de usuarios del sistema.",
      "Control de registros desde una interfaz web.",
    ],

    images: [
      "/images/Proyectos/SistemaCrio/login.png",
      "/images/Proyectos/SistemaCrio/dashboard.png",
      "/images/Proyectos/SistemaCrio/carrusel.png",
      "/images/Proyectos/SistemaCrio/products.png",
      "/images/Proyectos/SistemaCrio/updates.png",
    ],
  },
  {
    title: "Aplicación de Chat Educativo para iOS",
    categories: ["Móvil"],
    description:
      "Aplicación móvil desarrollada para facilitar la comunicación entre usuarios en un entorno educativo, permitiendo el intercambio de mensajes en tiempo real.",

    longDescription:
      "Aplicación móvil desarrollada para iOS utilizando SwiftUI y el patrón de arquitectura MVVM. Integra Firebase como servicio de autenticación y base de datos NoSQL, permitiendo a los usuarios registrarse, iniciar sesión y comunicarse mediante mensajes en tiempo real con otros usuarios registrados.",

    problem:
      "En un entorno educativo, los usuarios necesitaban una forma sencilla de comunicarse en tiempo real desde una aplicación móvil, manteniendo acceso mediante cuentas registradas y conversaciones organizadas.",

    solution:
      "Se desarrolló una aplicación iOS con autenticación de usuarios, registro de cuentas y mensajería en tiempo real utilizando SwiftUI, Firebase Authentication y Firebase Firestore.",

    impact:
      "La aplicación permitió crear una base funcional para la comunicación educativa mediante chat, integrando autenticación, almacenamiento en la nube y actualización de mensajes en tiempo real.",

    learned:
      "En este proyecto aprendí a estructurar una aplicación móvil con SwiftUI, aplicar el patrón MVVM, integrar Firebase Authentication, utilizar Firestore como base de datos NoSQL y manejar comunicación en tiempo real.",

    technologies: ["SwiftUI", "Swift", "Firebase"],

    date: "Diciembre 2023",

    role: "Desarrollador de la aplicación",

    features: [
      "Registro de usuarios mediante Firebase Authentication.",
      "Inicio de sesión de usuarios registrados.",
      "Mensajería en tiempo real.",
      "Gestión de usuarios y conversaciones.",
      "Almacenamiento de mensajes en Firebase Firestore.",
      "Arquitectura basada en el patrón MVVM.",
      "Interfaz desarrollada con SwiftUI.",
      "Base de datos NoSQL en la nube.",
    ],

    images: [
      "/images/Proyectos/educhat/login.png",
      "/images/Proyectos/educhat/register2.png",
      "/images/Proyectos/educhat/principal.png",
      "/images/Proyectos/educhat/principal2.png",
      "/images/Proyectos/educhat/principal3.png",
      "/images/Proyectos/educhat/principal4.png",
    ],
  },
  {
    title: "Aplicación Móvil de Interpretación Coloquial Salvadoreña",
    categories: ["Móvil", "API"],

    description:
      "Aplicación móvil desarrollada para interpretar expresiones coloquiales de El Salvador al inglés estadounidense y viceversa, utilizando un modelo preentrenado de Hugging Face consumido mediante una API en Python.",

    longDescription:
      "Aplicación móvil desarrollada con React Native que funciona como un intérprete de lenguaje coloquial salvadoreño. El sistema permite ingresar frases en español de El Salvador para obtener una interpretación al inglés estadounidense, y también interpretar frases del inglés estadounidense al español usado en El Salvador. Para el procesamiento del lenguaje se utilizó un modelo preentrenado de Hugging Face, integrado mediante una API desarrollada en Python.",

    problem:
      "Muchas expresiones coloquiales de El Salvador no se traducen correctamente con traductores convencionales, ya que suelen depender del contexto cultural, modismos y formas de hablar propias del país. Esto puede dificultar la comunicación entre personas salvadoreñas y hablantes de inglés estadounidense.",

    solution:
      "Se desarrolló una aplicación móvil en React Native que consume una API REST creada con Python. Esta API se encarga de procesar las frases utilizando un modelo preentrenado de Hugging Face para interpretar el lenguaje coloquial salvadoreño al inglés estadounidense y viceversa.",

    impact:
      "La aplicación permite acercar el lenguaje cotidiano salvadoreño a usuarios que necesitan comprender expresiones locales, ofreciendo una solución práctica para interpretar frases coloquiales con un enfoque cultural más específico.",

    learned:
      "En este proyecto reforcé mis conocimientos en desarrollo móvil con React Native, creación y consumo de APIs REST con Python, integración de modelos preentrenados de Hugging Face y manejo de comunicación entre una aplicación móvil y un servicio backend.",

    technologies: ["React Native", "Python", "Hugging Face", "API REST"],

    date: "Diciembre 2024",

    role: "Desarrollador de la aplicación móvil y API",

    features: [
      "Interpretación de expresiones coloquiales de El Salvador al inglés estadounidense.",
      "Interpretación de frases del inglés estadounidense al español coloquial salvadoreño.",
      "Consumo de una API REST desarrollada con Python.",
      "Integración de un modelo preentrenado de Hugging Face.",
      "Interfaz móvil desarrollada con React Native.",
      "Comunicación entre la aplicación móvil y el backend mediante peticiones HTTP.",
      "Procesamiento de texto orientado a modismos y expresiones culturales.",
      "Diseño de una solución enfocada en interpretación lingüística y contexto local.",
    ],

    images: [
      "/images/Proyectos/translateapp/login.png",
      "/images/Proyectos/translateapp/principal.png",
      "/images/Proyectos/translateapp/spanish.png",
      "/images/Proyectos/translateapp/change.png",
      "/images/Proyectos/translateapp/english.png",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"Todos" | ProjectCategory>(
    "Todos",
  );

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest dark:text-blue-400">
            Portafolio
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 dark:text-white">
            Proyectos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
            Proyectos desarrollados aplicando tecnologías web, bases de datos y
            lógica de negocio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:text-blue-600 dark:bg-slate-900 dark:text-gray-300 dark:border-slate-700 dark:hover:text-blue-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden dark:bg-slate-900 dark:border-slate-800 dark:shadow-slate-950"
            >
              <div className="grid grid-cols-1 xl:grid-cols-[0.75fr_1.25fr]">
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {project.date}
                      </span>

                      {project.role && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full dark:bg-blue-950/40 dark:text-blue-300">
                          {project.role}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-7">
                      {project.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full shadow-sm dark:bg-slate-800"
                        >
                          {techIcons[tech]}
                          <span className="text-sm text-gray-700 dark:text-gray-200">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-fit px-5 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    Ver detalles del proyecto
                  </button>
                </div>

                <div className="bg-gray-100 p-4 md:p-6 transition-colors duration-300 dark:bg-slate-800/70">
                  <ImageViewer
                    images={project.images}
                    variant="preview"
                    onImageClick={() => setSelectedProject(project)}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-full max-w-[1600px] max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-5 md:px-8 py-4 flex items-center justify-between gap-4 dark:bg-slate-900 dark:border-slate-800">
              <div>
                <p className="text-sm text-blue-600 font-semibold dark:text-blue-400">
                  {selectedProject.date}
                </p>

                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalles del proyecto"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition flex-shrink-0 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-[1.45fr_0.55fr] gap-8 p-5 md:p-8">
              <div>
                <ImageViewer
                  images={selectedProject.images}
                  title="Capturas del proyecto"
                  variant="detail"
                  enableZoom
                />

                <p className="text-center text-sm text-gray-500 mt-3 dark:text-gray-400">
                  Haz clic sobre la imagen para verla en pantalla completa.
                </p>
              </div>

              <aside className="space-y-7">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                    Descripción
                  </h4>

                  <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                    {selectedProject.longDescription ||
                      selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      Problema
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      Solución
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      Impacto
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                {selectedProject.learned && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      Aprendizaje
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.learned}
                    </p>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 dark:text-white">
                      Funcionalidades
                    </h4>

                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-gray-600 leading-relaxed dark:text-gray-300"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 dark:bg-blue-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 dark:text-white">
                    Tecnologías
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl dark:bg-slate-800"
                      >
                        {techIcons[tech]}
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {(selectedProject.demoUrl || selectedProject.githubUrl) && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition dark:bg-blue-600 dark:hover:bg-blue-500"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    )}

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
                      >
                        <FaGithub />
                        Repositorio
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
