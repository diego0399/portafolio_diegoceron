"use client";

import { ReactNode, useEffect, useState } from "react";
import ImageViewer from "./ImageViewer";
import type { Language } from "./translations";

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
type ProjectFilter = "Todos" | ProjectCategory;

type ProjectsProps = {
  language: Language;
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

const projectFilters: ProjectFilter[] = ["Todos", "Web", "Móvil", "API"];

const uiText = {
  es: {
    portfolio: "Portafolio",
    title: "Proyectos",
    description:
      "Proyectos desarrollados aplicando tecnologías web, bases de datos y lógica de negocio.",
    filters: {
      Todos: "Todos",
      Web: "Web",
      Móvil: "Móvil",
      API: "API",
    },
    detailsButton: "Ver detalles del proyecto",
    closeLabel: "Cerrar detalles del proyecto",
    screenshotsTitle: "Capturas del proyecto",
    clickImageText: "Haz clic sobre la imagen para verla en pantalla completa.",
    descriptionTitle: "Descripción",
    problemTitle: "Problema",
    solutionTitle: "Solución",
    impactTitle: "Impacto",
    learnedTitle: "Aprendizaje",
    featuresTitle: "Funcionalidades",
    technologiesTitle: "Tecnologías",
    demo: "Demo",
    repository: "Repositorio",
  },
  en: {
    portfolio: "Portfolio",
    title: "Projects",
    description:
      "Projects developed using web technologies, databases, and business logic.",
    filters: {
      Todos: "All",
      Web: "Web",
      Móvil: "Mobile",
      API: "API",
    },
    detailsButton: "View project details",
    closeLabel: "Close project details",
    screenshotsTitle: "Project screenshots",
    clickImageText: "Click on the image to view it in full screen.",
    descriptionTitle: "Description",
    problemTitle: "Problem",
    solutionTitle: "Solution",
    impactTitle: "Impact",
    learnedTitle: "What I learned",
    featuresTitle: "Features",
    technologiesTitle: "Technologies",
    demo: "Demo",
    repository: "Repository",
  },
};

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

const projectsByLanguage: Record<Language, Project[]> = {
  es: [
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
  ],

  en: [
    {
      title: "Computer Equipment and Peripherals Web Store",
      categories: ["Web"],
      description:
        "Website developed for a local company, allowing users to browse computer products, add them to the cart, and make purchases through a functional web interface.",
      longDescription:
        "Web system developed to digitize the sale of computer equipment and peripherals. The platform displays products through a dynamic catalog, manages users, products, categories, and orders, and also generates graphical reports to support sales analysis.",
      problem:
        "The company needed a more organized way to display products and manage sales, since the manual process made it difficult to control orders, available products, and registered customers.",
      solution:
        "A web store was developed with a product catalog, shopping cart, checkout process, user authentication, and an administrative panel to manage business information.",
      impact:
        "The system centralized product, customer, and order management, making business administration easier and improving the user experience when browsing and purchasing products.",
      learned:
        "In this project, I strengthened my knowledge of web development with PHP, session management, CRUD operations, MySQL database connections, shopping carts, and graphical report generation.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      date: "December 2020",
      role: "Web Developer",
      features: [
        "Dynamic product catalog.",
        "Shopping cart.",
        "Checkout process.",
        "Login and user management.",
        "Administrative panel for products, categories, and orders.",
        "Customer management.",
        "Statistical graphical report generation.",
        "Purchase registration and invoice generation.",
        "MySQL database integration.",
        "CRUD operations for system administration.",
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
      title: "Livestock Management Web System",
      categories: ["Web"],
      description:
        "Web system developed for the complete administration of a cattle farm, allowing users to manage animals, milk production, and reproductive processes through a clear and functional interface.",
      longDescription:
        "Web system developed using the Model-View-Controller architecture to manage cattle farm information. The platform allows individual cow registration, parentage tracking, pregnancy status monitoring, daily milk production control, and statistical report generation to support decision-making.",
      problem:
        "The farm needed to improve livestock information control, since manual records for milk production, pregnancy, and parentage could cause disorder, data loss, and difficulty analyzing animal performance.",
      solution:
        "An administrative web system was developed to register and consult detailed livestock information, manage milk production, handle reproductive processes, and visualize statistical reports.",
      impact:
        "The system helped organize livestock records, made it easier to track each animal, and allowed productive information to be consulted faster and in a more structured way.",
      learned:
        "In this project, I strengthened my knowledge of Java, MVC architecture, SQL Server connections, relational database queries, form handling, and administrative module development.",
      technologies: ["Java", "HTML", "CSS", "jQuery", "SQL Server"],
      date: "December 2021",
      role: "System Developer",
      features: [
        "Individual registration and identification of each cow.",
        "Parentage management for livestock genetic control.",
        "Pregnancy status monitoring.",
        "Reproductive process control.",
        "Daily milk production registration and tracking.",
        "Administrative panel for livestock data management.",
        "Statistical report generation for production and performance.",
        "SQL Server database integration.",
        "CRUD operations for animal and production record management.",
      ],
      images: [
        "/images/Proyectos/Proyecto Granja/login.png",
        "/images/Proyectos/Proyecto Granja/principal.png",
        "/images/Proyectos/Proyecto Granja/vacas.png",
        "/images/Proyectos/Proyecto Granja/datosgenerales.png",
      ],
    },
    {
      title: "Inventory Control System for CRIO Company",
      categories: ["Web"],
      description:
        "Web system developed to manage products, warehouses, and inventory movements, making it easier to control stock entries, exits, and product availability.",
      longDescription:
        "Web system developed using the MVC pattern to improve inventory administration for CRIO company. The solution allows product registration, warehouse management, stock entry and exit control, available inventory consultation, and user administration through a web interface.",
      problem:
        "The company needed a more organized way to control its inventory, since manual product, warehouse, and movement management could cause errors, information loss, and difficulty checking product availability.",
      solution:
        "A web system was developed to centralize product, warehouse, user, and inventory movement management, allowing stock entries and exits to be registered more efficiently.",
      impact:
        "The system helped organize inventory information, speed up stock availability queries, and reduce dependence on manual records.",
      learned:
        "In this project, I strengthened my knowledge of web development with PHP, MySQL database connections, CRUD operations, session management, and MVC-based code organization.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      date: "October 2022",
      role: "System Developer",
      features: [
        "Login for authorized users.",
        "Management of products registered in inventory.",
        "Warehouse administration.",
        "Registration of stock entries.",
        "Registration of stock exits.",
        "Product availability consultation.",
        "System user administration.",
        "Record control through a web interface.",
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
      title: "Educational Chat App for iOS",
      categories: ["Móvil"],
      description:
        "Mobile application developed to facilitate communication between users in an educational environment, allowing real-time message exchange.",
      longDescription:
        "Mobile application developed for iOS using SwiftUI and the MVVM architecture pattern. It integrates Firebase as an authentication and NoSQL database service, allowing users to register, log in, and communicate through real-time messages with other registered users.",
      problem:
        "In an educational environment, users needed a simple way to communicate in real time from a mobile application, while keeping access through registered accounts and organized conversations.",
      solution:
        "An iOS application was developed with user authentication, account registration, and real-time messaging using SwiftUI, Firebase Authentication, and Firebase Firestore.",
      impact:
        "The application created a functional foundation for educational communication through chat, integrating authentication, cloud storage, and real-time message updates.",
      learned:
        "In this project, I learned how to structure a mobile application with SwiftUI, apply the MVVM pattern, integrate Firebase Authentication, use Firestore as a NoSQL database, and handle real-time communication.",
      technologies: ["SwiftUI", "Swift", "Firebase"],
      date: "December 2023",
      role: "Application Developer",
      features: [
        "User registration with Firebase Authentication.",
        "Login for registered users.",
        "Real-time messaging.",
        "User and conversation management.",
        "Message storage in Firebase Firestore.",
        "Architecture based on the MVVM pattern.",
        "Interface developed with SwiftUI.",
        "Cloud-based NoSQL database.",
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
      title: "Mobile App for Salvadoran Colloquial Interpretation",
      categories: ["Móvil", "API"],
      description:
        "Mobile application developed to interpret Salvadoran colloquial expressions into American English and vice versa, using a pretrained Hugging Face model consumed through a Python API.",
      longDescription:
        "Mobile application developed with React Native that works as an interpreter for Salvadoran colloquial language. The system allows users to enter phrases in Salvadoran Spanish to obtain an interpretation in American English, and also interpret American English phrases into Spanish used in El Salvador. A pretrained Hugging Face model was used for language processing, integrated through an API developed in Python.",
      problem:
        "Many Salvadoran colloquial expressions are not translated correctly by conventional translators because they depend on cultural context, idioms, and local ways of speaking. This can make communication difficult between Salvadorans and American English speakers.",
      solution:
        "A React Native mobile application was developed that consumes a REST API created with Python. This API processes phrases using a pretrained Hugging Face model to interpret Salvadoran colloquial language into American English and vice versa.",
      impact:
        "The application helps users understand everyday Salvadoran language by offering a practical solution for interpreting colloquial phrases with a more culturally specific approach.",
      learned:
        "In this project, I strengthened my knowledge of mobile development with React Native, REST API creation and consumption with Python, pretrained Hugging Face model integration, and communication between a mobile application and a backend service.",
      technologies: ["React Native", "Python", "Hugging Face", "API REST"],
      date: "December 2024",
      role: "Mobile App and API Developer",
      features: [
        "Interpretation of Salvadoran colloquial expressions into American English.",
        "Interpretation of American English phrases into Salvadoran colloquial Spanish.",
        "Consumption of a REST API developed with Python.",
        "Integration of a pretrained Hugging Face model.",
        "Mobile interface developed with React Native.",
        "Communication between the mobile application and backend through HTTP requests.",
        "Text processing focused on idioms and cultural expressions.",
        "Solution designed for linguistic interpretation and local context.",
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
        "Institutional System for Book Consultation and Certification Generation",
      categories: ["Web"],
      description:
        "Web system developed with Java EE, JPA, and Oracle for a public institution, focused on book consultation and certification generation.",
      longDescription:
        "Web system developed for a public institution with the purpose of facilitating the consultation of books registered in the system and allowing certifications to be generated immediately. The solution was built with Java EE, using JPA for data persistence and Oracle as the database, allowing information to be managed in a structured and efficient way within an institutional environment.",
      problem:
        "Manual bibliographic information consultation and certification preparation can slow down service processes, making quick data access harder and increasing response times within the institution.",
      solution:
        "A web system was developed with Java EE that allows users to consult books stored in an Oracle database and generate certifications immediately from registered information. JPA was used for data persistence, making information management and access easier from the application.",
      impact:
        "The system speeds up information consultation and reduces the time required to issue certifications, improving process efficiency and providing a more organized tool for institutional management.",
      learned:
        "In this project, I strengthened my knowledge of web application development with Java EE, data persistence with JPA, Oracle database management, and building solutions focused on institutional processes.",
      technologies: ["Java EE", "Java", "JPA", "Oracle"],
      date: "December 2025",
      role: "System Developer",
      features: [
        "Consultation of books registered in the system.",
        "Bibliographic information search.",
        "Immediate certification generation.",
        "Data persistence with JPA.",
        "Information management in an Oracle database.",
        "System focused on institutional processes.",
      ],
      images: [
        "/images/Proyectos/certificaciones/login.png",
        "/images/Proyectos/certificaciones/principal.png",
        "/images/Proyectos/certificaciones/consulta.png",
        "/images/Proyectos/certificaciones/libros.png",
      ],
    },
    {
      title: "CRUD Web System with Angular and Spring Boot",
      categories: ["Web", "API"],
      description:
        "Web system developed with Angular that consumes a REST API created with Spring Boot, JPA, and Oracle, allowing record management through CRUD operations.",
      longDescription:
        "Web system developed with Angular for managing records through a clear and dynamic interface. The application consumes a REST API created with Spring Boot and Spring Data JPA, connected to an Oracle database, allowing users to create, read, update, and delete data. The backend handles system logic, data persistence, and database communication, while the frontend allows users to interact with the information easily.",
      problem:
        "Manual information management can create disorder, data loss, and difficulty consulting, updating, or deleting records efficiently.",
      solution:
        "A web solution divided into frontend and backend was developed. The frontend was created with Angular to display and manage information, while the backend was developed with Spring Boot and Spring Data JPA through a REST API connected to Oracle, responsible for processing CRUD operations and managing data persistence.",
      impact:
        "The system makes it possible to manage information in a more organized, fast, and centralized way, making registration, consultation, editing, and deletion of data easier from a web interface connected to a structured backend.",
      learned:
        "In this project, I strengthened my knowledge of frontend development with Angular, REST API creation with Spring Boot, data persistence with Spring Data JPA, Oracle database connections, HTTP service consumption, and separation between frontend, backend, and database.",
      technologies: [
        "Angular",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "API REST",
        "Oracle",
      ],
      date: "January 2026",
      role: "Frontend and Backend Developer",
      features: [
        "List of records obtained from a REST API.",
        "Creation of new records through Angular forms.",
        "Editing existing information.",
        "Record deletion.",
        "HTTP service consumption from Angular.",
        "REST API developed with Spring Boot.",
        "Data persistence using Spring Data JPA.",
        "Backend connection with an Oracle database.",
        "Separation between frontend, backend, and database.",
      ],
      images: [
        "/images/Proyectos/crudspring/login.png",
        "/images/Proyectos/crudspring/principal.png",
        "/images/Proyectos/crudspring/post.png",
        "/images/Proyectos/crudspring/put.png",
        "/images/Proyectos/crudspring/delete.png",
      ],
    },
  ],
};

export default function Projects({ language }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Todos");

  const t = uiText[language];
  const projects = projectsByLanguage[language];

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
      className="py-12 px-4 sm:py-16 md:py-20 md:px-6 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest dark:text-blue-400">
            {t.portfolio}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 dark:text-white">
            {t.title}
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
            {t.description}
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
              {t.filters[filter]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden dark:bg-slate-900 dark:border-slate-800 dark:shadow-slate-950"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between">
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
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
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
                    className="w-full sm:w-fit px-5 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    {t.detailsButton}
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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-full max-w-[1600px] max-h-[94vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-start justify-between gap-4 dark:bg-slate-900 dark:border-slate-800">
              <div>
                <p className="text-sm text-blue-600 font-semibold dark:text-blue-400">
                  {selectedProject.date}
                </p>

                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={t.closeLabel}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition flex-shrink-0 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-[1.45fr_0.55fr] gap-6 md:gap-8 p-4 md:p-8">
              <div>
                <ImageViewer
                  images={selectedProject.images}
                  title={t.screenshotsTitle}
                  variant="detail"
                  enableZoom
                />

                <p className="text-center text-sm text-gray-500 mt-3 dark:text-gray-400">
                  {t.clickImageText}
                </p>
              </div>

              <aside className="space-y-7">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                    {t.descriptionTitle}
                  </h4>

                  <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                    {selectedProject.longDescription ||
                      selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      {t.problemTitle}
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      {t.solutionTitle}
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      {t.impactTitle}
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                {selectedProject.learned && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                      {t.learnedTitle}
                    </h4>

                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      {selectedProject.learned}
                    </p>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 dark:text-white">
                      {t.featuresTitle}
                    </h4>

                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={`${feature}-${index}`}
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
                    {t.technologiesTitle}
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech}
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
                        {t.demo}
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
                        {t.repository}
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
