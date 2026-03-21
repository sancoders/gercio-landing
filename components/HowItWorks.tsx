"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Users, Rocket, Settings } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    color: "from-blue-500 to-blue-600",
    title: "Setup (Día 1 - mañana)",
    items: [
      "Llamada de 30 minutos con tu equipo",
      "Configuramos el menú completo con fotos y precios",
      "Creamos los QRs personalizados para cada mesa",
      "Configuramos la IA con el conocimiento de tu menú",
    ],
  },
  {
    number: "02",
    icon: Users,
    color: "from-violet-500 to-violet-600",
    title: "Capacitación (Día 1 - tarde)",
    items: [
      "1 hora de training con todo el equipo",
      "Mozos aprenden el panel de control",
      "Cocina aprende la pantalla de pedidos",
      "Probamos el flujo completo con pedidos reales",
    ],
  },
  {
    number: "03",
    icon: Settings,
    color: "from-emerald-500 to-emerald-600",
    title: "Lanzamiento suave (Día 2)",
    items: [
      "Activamos 2-3 mesas piloto primero",
      "Monitoreamos en tiempo real",
      "Ajustamos según feedback del equipo",
      "Soporte dedicado durante todo el día",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    color: "from-amber-500 to-amber-600",
    title: "Full operación (Día 3)",
    items: [
      "Todas las mesas activas con QR",
      "IA respondiendo preguntas de clientes",
      "Pagos integrados con Mercado Pago",
      "Dashboard en vivo + soporte 24/7",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            De 0 a funcionando en 48 horas
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Proceso simple, sin interrumpir tu operación. Instalamos todo y
            capacitamos a tu equipo en dos días.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Number background */}
              <div className="absolute top-2 right-3 text-6xl font-black text-gray-50 leading-none pointer-events-none select-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md`}
                >
                  <step.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full text-sm">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold text-gray-700">
              Setup completo en 48 horas — sin cambiar tu sistema actual
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
