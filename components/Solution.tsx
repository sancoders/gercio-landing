"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { QrCode, Bot, UtensilsCrossed, CreditCard, ArrowDown, Sparkles } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    color: "from-blue-500 to-blue-600",
    step: "01",
    title: "Escanea el QR",
    desc: "El cliente escanea el QR de la mesa. Sin app, directo en el navegador. El menú completo con fotos y precios.",
  },
  {
    icon: Bot,
    color: "from-violet-500 to-violet-600",
    step: "02",
    title: "IA responde todo",
    desc: "Chat GPT-4o entrenado con tu menú responde en segundos. Ingredientes, alérgenos, recomendaciones — sin esperar al mozo.",
  },
  {
    icon: UtensilsCrossed,
    color: "from-emerald-500 to-emerald-600",
    step: "03",
    title: "Pedido directo a cocina",
    desc: "El pedido llega instantáneamente a la pantalla de cocina y por Telegram. Con la mesa, modificaciones y estado en tiempo real.",
  },
  {
    icon: CreditCard,
    color: "from-amber-500 to-amber-600",
    step: "04",
    title: "Pago automático",
    desc: "El cliente paga cuando quiere: Mercado Pago, tarjeta, efectivo. Propina opcional. El mozo solo lleva la comida.",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={14} />
            La solución completa
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Así funciona Gercio
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Un flujo completo de 4 pasos que transforma cómo funciona tu
            restaurante — sin cambiar lo que ya usás.
          </p>
        </motion.div>

        {/* Steps - vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 via-emerald-200 to-amber-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}
                >
                  <step.icon size={36} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center">
                    <span className="text-xs font-black text-gray-700">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Arrow (mobile only) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden text-gray-300 mb-6">
                    <ArrowDown size={20} />
                  </div>
                )}

                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="https://v0-gercio.vercel.app/?table=7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg"
          >
            Probá el demo en vivo
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold group-hover:bg-blue-700 group-hover:text-white">
              GRATIS
            </span>
          </a>
          <p className="text-sm text-gray-400 mt-3">
            Demo completa: pedí, chateá con la IA, pagá con MP (modo prueba)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
