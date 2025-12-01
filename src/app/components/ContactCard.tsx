"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactCard() {
  return (
    <section className="flex justify-center items-center py-16 px-6 bg-gradient-to-b from-white to-gray-100">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contacto</h3>

        <p className="text-gray-500 mb-6 text-sm">
          Puede contactarme por cualquiera de estos medios
        </p>

        <div className="space-y-4 text-left">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-xl border"
          >
            <Mail size={28} />
            diego-0399@hotmail.com
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-xl border"
          >
            <Github size={28} />
            github.com/diego0399
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-xl border"
          >
            <Linkedin size={28} />
            linkedin.com/in/diego-ceron-70646925a
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
