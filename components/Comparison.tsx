"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, AlertTriangle, Bot } from "lucide-react";

const features = [
  "Menú digital con QR",
  "Chat IA conversacional",
  "Pagos integrados",
  "Pantalla cocina en tiempo real",
  "Actualizaciones en vivo",
  "Sin app para el cliente",
  "Hecho para Argentina",
  "Costo mensual",
];

type CellValue = true | false | "partial";

const competitors: {
  name: string;
  highlight: boolean;
  color: string;
  values: CellValue[];
  cost: string;
  costColor: string;
}[] = [
  {
    name: "Gercio",
    highlight: true,
    color: "bg-blue-600 text-white",
    values: [true, true, true, true, true, true, true, true],
    cost: "1.5% ventas app",
    costColor: "text-emerald-600 font-bold",
  },
  {
    name: "Fudo",
    highlight: false,
    color: "bg-gray-100 text-gray-700",
    values: [true, false, false, true, false, true, true, true],
    cost: "$60-90k flat",
    costColor: "text-gray-600",
  },
  {
    name: "PedidosYa",
    highlight: false,
    color: "bg-gray-100 text-gray-700",
    values: [false, false, true, false, "partial", false, "partial", true],
    cost: "25-30% comisión",
    costColor: "text-red-500",
  },
  {
    name: "MP QR",
    highlight: false,
    color: "bg-gray-100 text-gray-700",
    values: [false, false, true, false, false, true, true, true],
    cost: "3.5% transacción",
    costColor: "text-gray-600",
  },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
          <Check size={14} className="text-emerald-600" />
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
          <X size={14} className="text-red-400" />
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center">
        <AlertTriangle size={12} className="text-amber-500" />
      </div>
    </div>
  );
}

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-white" id="comparacion">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por qué Gercio
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            El único sistema que combina IA conversacional, pagos integrados y
            gestión de cocina en tiempo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-500 w-[200px]">
                  Funcionalidad
                </th>
                {competitors.map((c) => (
                  <th key={c.name} className="px-2 py-4">
                    <div
                      className={`${c.color} px-4 py-2 rounded-xl text-sm font-bold ${c.highlight ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
                    >
                      {c.name}
                      {c.highlight && (
                        <span className="block text-xs font-normal text-blue-200">
                          ← mejor opción
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} rounded-lg`}
                >
                  <td className="py-3 pr-4 text-sm font-medium text-gray-700 rounded-l-lg pl-3">
                    {feature}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`px-2 py-3 text-center ${c.highlight ? "bg-blue-50/50" : ""}`}
                    >
                      {feature === "Costo mensual" ? (
                        <span className={`text-xs font-semibold ${c.costColor}`}>
                          {c.cost}
                        </span>
                      ) : (
                        <Cell value={c.values[i]} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 rounded-2xl p-6 text-center"
        >
          <div className="inline-flex items-center gap-3 text-2xl font-black text-gray-900 mb-2">
            <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Bot size={22} className="text-white" />
            </span>
            Único con IA conversacional
          </div>
          <p className="text-gray-600">
            Ningún competidor tiene chat IA integrado al menú. Gercio es el
            único que responde preguntas del cliente en tiempo real — sin mozos,
            sin esperas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
