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
  SiAngular,
  SiTypescript,
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
  | "Java EE"
  | "JPA"
  | "Spring Boot"
  | "Spring Data JPA"
  | "SwiftUI"
  | "Swift"
  | "Firebase"
  | "Python"
  | "React Native"
  | "Hugging Face"
  | "API REST"
  | "Angular"
  | "TypeScript"
  | "Oracle";

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
  "Java EE": <FaJava className="text-red-700 text-lg" />,
  JPA: <FaDatabase className="text-purple-600 text-lg" />,

  "Spring Boot": <SiSpringboot className="text-green-600 text-lg" />,
  "Spring Data JPA": <SiSpringboot className="text-green-700 text-lg" />,

  SwiftUI: <FaApple className="text-gray-900 dark:text-white text-lg" />,
  Swift: <SiSwift className="text-orange-500 text-lg" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg" />,
  Python: <FaPython className="text-blue-500 text-lg" />,
  "React Native": <FaReact className="text-cyan-500 text-lg" />,
  "Hugging Face": <FaRobot className="text-yellow-500 text-lg" />,
  "API REST": <FaServer className="text-green-600 text-lg" />,
  Angular: <SiAngular className="text-red-600 text-lg" />,
  TypeScript: <SiTypescript className="text-blue-600 text-lg" />,
  Oracle: <FaDatabase className="text-red-700 text-lg" />,
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
  {
    title:
      "Sistema Institucional de Consulta de Libros y Generación de Certificaciones",
    categories: ["Web"],

    description:
      "Sistema web desarrollado con Java EE, JPA y Oracle para una institución pública, orientado a la consulta de libros y la generación de certificaciones.",

    longDescription:
      "Sistema web desarrollado para una institución pública con el objetivo de facilitar la consulta de libros registrados en el sistema y permitir la generación de certificaciones de forma inmediata. La solución fue construida con Java EE, utilizando JPA para la persistencia de datos y Oracle como base de datos, permitiendo gestionar la información de manera estructurada y eficiente dentro de un entorno institucional.",

    problem:
      "La consulta manual de información bibliográfica y la elaboración de certificaciones puede volver más lento el proceso de atención, dificultando el acceso rápido a los datos y aumentando el tiempo de respuesta dentro de la institución.",

    solution:
      "Se desarrolló un sistema web con Java EE que permite consultar libros almacenados en una base de datos Oracle y generar certificaciones de forma inmediata a partir de la información registrada. Para la persistencia de datos se utilizó JPA, facilitando la gestión y acceso a la información desde la aplicación.",

    impact:
      "El sistema agiliza la consulta de información y reduce el tiempo necesario para emitir certificaciones, mejorando la eficiencia del proceso y brindando una herramienta más organizada para la gestión institucional.",

    learned:
      "En este proyecto reforcé mis conocimientos en desarrollo de aplicaciones web con Java EE, persistencia de datos con JPA, manejo de bases de datos Oracle y construcción de soluciones orientadas a procesos institucionales.",

    technologies: ["Java EE", "Java", "JPA", "Oracle"],

    date: "Diciembre 2025",

    role: "Desarrollador del sistema",

    features: [
      "Consulta de libros registrados en el sistema.",
      "Búsqueda de información bibliográfica.",
      "Generación inmediata de certificaciones.",
      "Persistencia de datos con JPA.",
      "Gestión de información en base de datos Oracle.",
      "Sistema orientado a procesos institucionales.",
    ],

    images: [
      "/images/Proyectos/certificaciones/login.png",
      "/images/Proyectos/certificaciones/principal.png",
      "/images/Proyectos/certificaciones/consulta.png",
      "/images/Proyectos/certificaciones/libros.png",
    ],
  },
  {
    title: "Sistema Web CRUD con Angular y Spring Boot",
    categories: ["Web", "API"],

    description:
      "Sistema web desarrollado con Angular que consume una API REST creada con Spring Boot, JPA y Oracle, permitiendo gestionar registros mediante operaciones CRUD.",

    longDescription:
      "Sistema web desarrollado con Angular para la gestión de registros desde una interfaz clara y dinámica. La aplicación consume una API REST creada con Spring Boot y Spring Data JPA, conectada a una base de datos Oracle, permitiendo realizar operaciones de creación, consulta, actualización y eliminación de datos. El backend se encarga de manejar la lógica del sistema, la persistencia de datos y la comunicación con la base de datos, mientras que el frontend permite al usuario interactuar con la información de forma sencilla.",

    problem:
      "La gestión manual de información puede generar desorden, pérdida de datos y dificultad para consultar, actualizar o eliminar registros de forma eficiente.",

    solution:
      "Se desarrolló una solución web dividida en frontend y backend. El frontend fue creado con Angular para mostrar y gestionar la información, mientras que el backend fue desarrollado con Spring Boot y Spring Data JPA mediante una API REST conectada a Oracle, encargada de procesar las operaciones CRUD y administrar la persistencia de los datos.",

    impact:
      "El sistema permite administrar información de manera más ordenada, rápida y centralizada, facilitando el registro, consulta, edición y eliminación de datos desde una interfaz web conectada a un backend estructurado.",

    learned:
      "En este proyecto reforcé mis conocimientos en desarrollo frontend con Angular, creación de APIs REST con Spring Boot, persistencia de datos con Spring Data JPA, conexión a bases de datos Oracle, consumo de servicios HTTP y separación entre frontend, backend y base de datos.",

    technologies: [
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "API REST",
      "Oracle",
    ],

    date: "Enero 2026",

    role: "Desarrollador frontend y backend",

    features: [
      "Listado de registros obtenidos desde una API REST.",
      "Creación de nuevos registros desde formularios en Angular.",
      "Edición de información existente.",
      "Eliminación de registros.",
      "Consumo de servicios HTTP desde Angular.",
      "API REST desarrollada con Spring Boot.",
      "Persistencia de datos mediante Spring Data JPA.",
      "Conexión del backend con base de datos Oracle.",
      "Separación entre frontend, backend y base de datos.",
    ],

    images: [
      "/images/Proyectos/crudspring/login.png",
      "/images/Proyectos/crudspring/principal.png",
      "/images/Proyectos/crudspring/post.png",
      "/images/Proyectos/crudspring/put.png",
      "/images/Proyectos/crudspring/delete.png",
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
   <section className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Portafolio
      </span>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        Proyectos
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
        Proyectos desarrollados aplicando tecnologías web, bases de datos y lógica de negocio.
      </p>
    </div>

    <div className="mt-8 flex flex-wrap justify-center gap-3">
      {projectFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-5 ${
            activeFilter === filter
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {filteredProjects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <span>{project.date}</span>
                {project.role && <span>• {project.role}</span>}
              </div>

              <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-gray-300"
                  >
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 sm:w-auto"
              >
                Ver detalles del proyecto
              </button>
            </div>

            <div className="p-4 sm:p-5">
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
</section>
    {selectedProject && (
  <div
    onClick={() => setSelectedProject(null)}
    className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl dark:bg-slate-950 sm:max-w-5xl sm:rounded-3xl sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-semibold text-blue-600">
            {selectedProject.date}
          </span>

          <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            {selectedProject.title}
          </h3>
        </div>

        <button
          onClick={() => setSelectedProject(null)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 dark:bg-slate-800 dark:text-white"
        >
          ×
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <ImageViewer
            images={selectedProject.images}
            variant="detail"
            enableZoom
          />
        </div>

        <div className="space-y-6 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Descripción
            </h4>
            <p className="mt-2">
              {selectedProject.longDescription || selectedProject.description}
            </p>
          </div>

          {selectedProject.problem && (
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Problema
              </h4>
              <p className="mt-2">{selectedProject.problem}</p>
            </div>
          )}

          {selectedProject.solution && (
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Solución
              </h4>
              <p className="mt-2">{selectedProject.solution}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}
  );
}
