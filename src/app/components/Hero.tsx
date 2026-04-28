"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  const whatsappNumber = "50374211963";
  const whatsappMessage =
    "Hola Diego, vi tu portafolio y me gustaría contactarte.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section
      id="inicio"
      className="flex justify-center items-center py-20 px-6 bg-gradient-to-b from-gray-100 to-white transition-colors duration-300 dark:from-slate-950 dark:to-slate-900"
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl text-center border border-gray-200 transition-colors duration-300 dark:bg-slate-900 dark:border-slate-800 dark:shadow-slate-950"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Brillo de fondo */}
          <div className="absolute inset-0 flex justify-center items-center">
            <motion.div
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-400/20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 1],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Marco degradado */}
          <motion.div
            className="relative p-2 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-green-400 shadow-2xl"
            initial={{
              opacity: 0,
              rotate: -6,
              y: 20,
            }}
            animate={{
              opacity: 1,
              rotate: [-6, 4, -2, 0],
              y: [20, -10, 0],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotate: 2,
            }}
          >
            <div className="p-1 rounded-full bg-white dark:bg-slate-900">
              <motion.div
                initial={{
                  rotate: -3,
                  y: 10,
                }}
                animate={{
                  rotate: [-3, 3, 0],
                  y: [10, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/diegoperfil.jpg"
                  alt="Foto de Diego Alejandro Ceron"
                  width={400}
                  height={400}
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800"
                  unoptimized
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          Disponible para nuevas oportunidades
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight dark:text-white">
          Diego Alejandro Ceron
        </h1>

        <h2 className="text-base md:text-lg text-blue-600 font-semibold dark:text-blue-400">
          Desarrollador Junior Back End
        </h2>

        <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl mx-auto dark:text-gray-300">
          Desarrollador Back End con formación en Ingeniería de Sistemas,
          enfocado en la creación de sistemas web, APIs, bases de datos y
          soluciones orientadas a la lógica de negocio.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowAbout(!showAbout)}
            aria-expanded={showAbout}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            {showAbout ? "Ver menos" : "Sobre mí"}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            Contactar por WhatsApp
          </a>
        </div>

        {showAbout && (
          <motion.div
            className="mt-8 text-left bg-gray-50 rounded-2xl p-6 border border-gray-100 dark:bg-slate-800/70 dark:border-slate-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
              Sobre mí
            </h3>

            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              Soy Desarrollador Back End autodidacta e Ingeniero en Sistemas
              graduado de la Universidad Tecnológica de El Salvador. Me interesa
              seguir creciendo profesionalmente en el desarrollo de sistemas,
              trabajando con tecnologías como Java, Spring Boot, PHP, SQL
              Server, MySQL y Oracle.
            </p>

            <div className="mt-6 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm dark:bg-slate-900 dark:border-slate-700">
              <h4 className="text-lg font-bold text-gray-900 mb-2 dark:text-white">
                Atención y soporte
              </h4>

              <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                Estoy atento a cualquier consulta, problema o necesidad
                relacionada con sistemas web, bases de datos, desarrollo Back
                End o mejoras en proyectos existentes. Puedes contactarme y con
                gusto revisaré cómo puedo ayudarte.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
