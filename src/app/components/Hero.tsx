"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function Hero() {
    const [showAbout, setShowAbout] = useState(false);
  return (
    <section
      id="inicio"
      className="flex justify-center items-center py-20 px-6 bg-gradient-to-b from-gray-100 to-white"
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Imagen con animación */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotate: 2, scale: 1.05 }}
        >
          <Image
            src="/images/diegoperfil.jpg"
            alt="Foto de Diego Ceron"
            width={360}
            height={360}
            className="rounded-full shadow-lg object-cover border-4"
          />
        </motion.div>

        {/* Presentación */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 tracking-tight">
            Diego&nbsp;Alejandro&nbsp;Ceron
        </h2>
        <h5 className="text-xs md:text-sm text-gray-500 font-light">
            Desarrollador&nbsp;Junior&nbsp;Back&nbsp;End
        </h5>

     <br />
      {/* Botón dinámico */}
      <button
        onClick={() => setShowAbout(!showAbout)}
        className="px-6 py-2 border-2 border-red-800 text-red-800 font-semibold rounded-lg hover:bg-red-800 hover:text-white transition-all duration-300 ease-in-out"
        >
        {showAbout ? "Ver menos" : "Sobre mí"}
      </button>

      {/* Contenido dinámico */}
      {showAbout && (
        <div className="mt-6 max-w-2xl animate-fadeIn">
          <p className="text-lg text-gray-600 leading-relaxed">
            Desarrollador Back End autodidacta, Ingeniero en Sistemas graduado de la Universidad Tecnologica de El Salvador
          </p>
        </div>
      )}

        
      </motion.div>
    </section>
  );
}
