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
  | "Firebase";

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
  SwiftUI: <FaApple className="text-gray-900 text-lg" />,
  Swift: <SiSwift className="text-orange-500 text-lg" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg" />,
};
interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: Tech[];
  images: string[];
  date: string;
  role?: string;
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Página web para compra de equipo y perifericos de cómputo",
    description:
      "Página web desarrollada para una empresa local, permitiendo a los usuarios explorar y adquirir productos de cómputo a través de una interfaz atractiva y funcional.",
    longDescription:
      "Además de la funcionalidad de compra, la página incluye un sistema de administración para gestionar productos, categorías y pedidos, facilitando la operación del negocio en línea.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    date: "Diciembre 2020",
    role: "Desarrollador web",
    features: [
      "Desarrollo de catálogo de productos dinámico.",
      "Implementación de carrito de compras y proceso de checkout.",
      "Sistema de autenticación y gestión de usuarios.",
      "Panel de administración para productos, categorías y pedidos.",
      "Generación de reportes gráficos estadísticos para análisis de ventas.",
      "Integración con base de datos relacional para almacenamiento de información.",
      "Operaciones CRUD para la gestión de productos y clientes.",
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
    description:
      "Sistema web desarrollado para la administración integral de una granja bovina, permitiendo el control de animales, producción de leche y procesos reproductivos mediante una interfaz clara y funcional.",
    longDescription:
      "La plataforma fue desarrollada bajo el patrón de arquitectura Modelo-Vista-Controlador (MVC), permite gestionar información detallada de cada vaca, incluyendo identificación, parentesco, estado de gestación y producción lechera. Además, incorpora un sistema administrativo que facilita el control de registros, análisis de datos productivos y apoyo en la toma de decisiones dentro de la granja.",
    technologies: ["Java", "HTML", "CSS", "jQuery", "SQL Server"],
    date: "Diciembre 2021",
    role: "Desarrollador del sistema",
    features: [
      "Registro e identificación individual de cada vaca.",
      "Gestión de parentesco para control genético del ganado.",
      "Monitoreo del estado de gestación y control reproductivo.",
      "Registro y seguimiento de la producción diaria de leche.",
      "Panel administrativo para gestión de datos ganaderos.",
      "Generación de reportes estadísticos sobre producción y rendimiento.",
      "Integración con base de datos relacional para almacenamiento seguro de la información.",
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
    title: "Sistema de Control de Inventario para Empresa Crio",
    description:
      "Sistema diseñado para supervisar, organizar y gestionar el stock de mercancías, permitiendo un control eficiente de entradas, salidas y disponibilidad de productos.",
    longDescription:
      "Sistema web desarrollado bajo el patrón de diseño MVC, para administrar productos, almacenes, usuarios y movimientos de inventario. Permite controlar entradas, salidas y disponibilidad de mercancías de forma más ordenada.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    date: "Octubre 2022",
    role: "Desarrollador del sistema",
    features: [
      "Inicio de sesión para usuarios del sistema.",
      "Gestión de productos y almacenes.",
      "Control de entradas y salidas de inventario.",
      "Consulta de disponibilidad de productos.",
      "Administración de registros desde una interfaz web.",
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
    description:
      "Aplicación móvil desarrollada para facilitar la comunicación entre usuarios en un entorno educativo, permitiendo el intercambio de mensajes en tiempo real.",
    longDescription:
      "Aplicación desarrollada en iOS utilizando SwiftUI y el patrón de arquitectura MVVM. Integra Firebase como base de datos NoSQL y servicio de autenticación, permitiendo a los usuarios registrarse, iniciar sesión y comunicarse mediante chat en tiempo real con otros usuarios registrados.",
    technologies: ["SwiftUI", "Swift", "Firebase"],
    date: "Diciembre 2023",
    role: "Desarrollador de la aplicación",
    features: [
      "Registro e inicio de sesión de usuarios mediante Firebase Authentication.",
      "Mensajería en tiempo real entre usuarios registrados.",
      "Arquitectura basada en el patrón MVVM.",
      "Integración con base de datos NoSQL (Firebase Firestore).",
      "Gestión de usuarios y conversaciones.",
      "Interfaz desarrollada con SwiftUI.",
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
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Portafolio
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Proyectos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Proyectos desarrollados aplicando tecnologías web, bases de datos y
            lógica de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 xl:grid-cols-[0.75fr_1.25fr]">
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-blue-600">
                        {project.date}
                      </span>

                      {project.role && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                          {project.role}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-7">
                      {project.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full shadow-sm"
                        >
                          {techIcons[tech]}
                          <span className="text-sm text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-fit px-5 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Ver detalles del proyecto
                  </button>
                </div>

                <div className="bg-gray-100 p-4 md:p-6">
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
            className="bg-white w-full max-w-[1600px] max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-5 md:px-8 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-blue-600 font-semibold">
                  {selectedProject.date}
                </p>

                <h3 className="text-xl md:text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition flex-shrink-0"
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

                <p className="text-center text-sm text-gray-500 mt-3">
                  Haz clic sobre la imagen para verla en pantalla completa.
                </p>
              </div>

              <aside className="space-y-7">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Descripción
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.longDescription ||
                      selectedProject.description}
                  </p>
                </div>

                {selectedProject.features && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Funcionalidades
                    </h4>

                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-gray-600 leading-relaxed"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Tecnologías
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl"
                      >
                        {techIcons[tech]}
                        <span className="text-sm text-gray-700">{tech}</span>
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
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
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
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
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
