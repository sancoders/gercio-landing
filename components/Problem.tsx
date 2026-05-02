"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Clock, MessageSquare, ChefHat, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
    stat: "67%",
    title: "Tu mozo pierde 2 horas/día explicando el menú",
    desc: '"¿Qué tiene el flat white?" "¿Sin TACC?" "¿Viene con papas?" — preguntas repetitivas que roban tiempo valioso.',
  },
  {
    icon: Clock,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    stat: "89%",
    title: "Hora pico = caos. Clientes esperan 20 minutos para pagar",
    desc: "La mesa sigue ocupada aunque el cliente ya terminó. Perdés 2-3 turnos de mesa por día.",
  },
  {
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    stat: "78%",
    title: "3-5 errores en pedidos por día costan $200-300k/mes",
    desc: "Anotación manual, modificaciones perdidas, pedidos sin mesa asignada. El cliente se va molesto y no vuelve.",
  },
  {
    icon: ChefHat,
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    stat: "56%",
    title: "Comandas en papel. 2-3 pedidos extraviados por semana",
    desc: "Papel mojado, letra ilegible, sin mesa asignada. La cocina no sabe qué está pendiente y qué ya se entregó.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-white" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingDown size={14} />
            Basado en entrevistas a restaurantes de Buenos Aires
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Te suena conocido?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Hablamos con decenas de restaurantes de CABA y GBA. Estos son los
            problemas que casi todos tienen — y que están perdiendo plata.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${p.border} ${p.bg} p-6 hover:shadow-lg transition-shadow`}
            >
              {/* Stat badge */}
              <div className="absolute -top-3 right-4 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                {p.stat} de los casos
              </div>

              <div
                className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}
              >
                <p.icon size={20} className={p.color} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white"
        >
          <div className="text-5xl font-black mb-2">$500k+</div>
          <div className="text-lg text-gray-300 mb-1">
            perdidos por mes en promedio
          </div>
          <div className="text-sm text-gray-400">
            entre errores, tiempo perdido y mesas no rotadas — en un restaurante
            de $15-30M/mes de facturación
          </div>
        </motion.div>
      </div>
    </section>
  );
}
