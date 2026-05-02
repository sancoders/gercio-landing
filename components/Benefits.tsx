"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  SmilePlus,
  Banknote,
  CheckCircle2,
  Star,
  Zap,
  Clock,
  ShoppingCart,
  Rocket,
  Briefcase,
  UserCircle2,
  Smile,
} from "lucide-react";

const columns = [
  {
    title: "Para el dueño",
    headIcon: Briefcase,
    color: "blue",
    bg: "from-blue-600 to-blue-700",
    lightBg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
    items: [
      {
        icon: TrendingUp,
        text: "+20% ventas por mayor rotación de mesas",
        highlight: "+$4-6M/mes",
      },
      {
        icon: DollarSign,
        text: "Cada mozo rinde como 2 o 3 — ahorro $400k/mes",
        highlight: "Menos staff",
      },
      {
        icon: CheckCircle2,
        text: "Cero errores en pedidos — cliente satisfecho vuelve",
        highlight: "0 errores",
      },
      {
        icon: BarChart3,
        text: "Dashboard en tiempo real: qué se vende, cuándo, cuánto",
        highlight: "Data real",
      },
    ],
  },
  {
    title: "Para el mozo",
    headIcon: UserCircle2,
    color: "emerald",
    bg: "from-emerald-500 to-emerald-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-600",
    items: [
      {
        icon: SmilePlus,
        text: "Menos estrés — no toma pedidos ni cobra cuentas",
        highlight: "Menos presión",
      },
      {
        icon: Banknote,
        text: "Más propinas porque puede dedicarse al servicio",
        highlight: "+propinas",
      },
      {
        icon: Target,
        text: "Sin errores = sin reclamos = sin mal clima",
        highlight: "Paz mental",
      },
      {
        icon: Star,
        text: "Trabajo más digno: solo lleva y sirve la comida",
        highlight: "Calidad",
      },
    ],
  },
  {
    title: "Para el cliente",
    headIcon: Smile,
    color: "amber",
    bg: "from-amber-500 to-amber-600",
    lightBg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-600",
    items: [
      {
        icon: Zap,
        text: "IA responde en segundos, 24/7, sin esperar al mozo",
        highlight: "Respuesta instant.",
      },
      {
        icon: ShoppingCart,
        text: "Pide y modifica cuando quiere, sin presión",
        highlight: "A su ritmo",
      },
      {
        icon: Clock,
        text: "Paga cuando quiere — no espera la cuenta",
        highlight: "Autonomía",
      },
      {
        icon: Rocket,
        text: "Entra y sale 30% más rápido. Cero errores en el pedido",
        highlight: "30% más rápido",
      },
    ],
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-white" id="beneficios">
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
            Todos ganan
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Gercio no es solo para el dueño. Mejora la experiencia de todos los
            que interactúan con tu restaurante.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl border ${col.border} overflow-hidden`}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${col.bg} px-6 py-5 text-white`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-3">
                  <col.headIcon size={22} className="text-white" />
                </div>
                <div className="font-bold text-xl">{col.title}</div>
              </div>

              {/* Items */}
              <div className={`${col.lightBg} p-6 space-y-4`}>
                {col.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <item.icon size={16} className={col.iconColor} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-700 leading-snug">
                        {item.text}
                      </div>
                      <div
                        className={`text-xs font-bold mt-0.5 ${col.iconColor}`}
                      >
                        {item.highlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
