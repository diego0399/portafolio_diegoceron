"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <section className="flex justify-center items-center py-16 px-6 bg-gradient-to-b from-white to-gray-100 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-200 transition-colors duration-300 dark:bg-slate-900 dark:border-slate-800 dark:shadow-slate-950"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
          Contacto
        </h3>

        <p className="text-gray-500 mb-6 text-sm dark:text-gray-400">
          Puede contactarme por cualquiera de estos medios
        </p>

        <div className="space-y-4 text-left">
          <motion.a
            href="mailto:diego-0399@hotmail.com"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            <Mail size={28} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm break-all">diego-0399@hotmail.com</span>
          </motion.a>

          <motion.a
            href="https://github.com/diego0399"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            <Github size={28} className="text-gray-900 dark:text-white" />
            <span className="text-sm break-all">github.com/diego0399</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/diego-ceron-70646925a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            <Linkedin size={28} className="text-blue-700 dark:text-blue-400" />
            <span className="text-sm break-all">
              linkedin.com/in/diego-ceron-70646925a
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
