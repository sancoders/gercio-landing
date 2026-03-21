"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Check, Zap } from "lucide-react";

const setupIncludes = [
  "Instalación completa del sistema",
  "Configuración del menú con fotos y precios",
  "QRs personalizados para cada mesa",
  "Capacitación del equipo (2-3 horas)",
  "Soporte prioritario los primeros 30 días",
  "Integración con Mercado Pago",
];

const monthlyIncludes = [
  "Hosting y mantenimiento del sistema",
  "IA actualizada con tu menú siempre",
  "Actualizaciones automáticas",
  "Soporte 24/7 por WhatsApp y email",
  "Sin contratos largos — mes a mes",
  "Dashboard de analytics en tiempo real",
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billing, setBilling] = useState(20);

  const processedInApp = billing * 1_000_000 * 0.5;
  const variable = Math.round(processedInApp * 0.015 / 1000);
  const total = 100 + variable;

  return (
    <section className="py-16 lg:py-24 bg-white" id="precios">
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
            Pricing transparente
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Sin sorpresas. Pagás solo por lo que usás. Si no procesás ventas por
            la app, tu costo variable es $0.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Setup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Setup inicial
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-black text-gray-900">$100k</span>
            </div>
            <div className="text-sm text-gray-400 mb-6">pago único</div>
            <ul className="space-y-3 mb-8">
              {setupIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Monthly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-2 border-blue-600 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Mensual
            </div>
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Mensual
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-black text-gray-900">$100k</span>
              <span className="text-gray-400 text-lg pb-2">base</span>
            </div>
            <div className="text-blue-600 font-semibold text-sm mb-6">
              + 1.5% sobre ventas procesadas en app
            </div>
            <ul className="space-y-3 mb-8">
              {monthlyIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Zap size={18} className="text-amber-400" />
            <h3 className="font-bold text-white text-lg">
              Calculá tu costo exacto
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-slate-300 text-sm font-medium">
                  Facturación mensual
                </label>
                <span className="text-white font-black text-xl">${billing}M</span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={billing}
                onChange={(e) => setBilling(Number(e.target.value))}
                className="w-full h-2 bg-slate-600 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$5M</span>
                <span>$50M</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-slate-300">
                  <span>Base mensual</span>
                  <span>$100k</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>1.5% × ${billing / 2}M (50% en app)</span>
                  <span>${variable}k</span>
                </div>
                <div className="flex justify-between font-bold text-white border-t border-white/10 pt-2">
                  <span>Total</span>
                  <span className="text-blue-400">${total}k/mes</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 text-center">
                Para ${billing}M facturación → ${total}k/mes ({((total * 1000) / (billing * 1_000_000) * 100).toFixed(1)}% de tu facturación)
              </div>
            </div>
          </div>
        </motion.div>

        {/* No risk badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-3">
            <Shield size={20} className="text-emerald-600" />
            <div>
              <div className="font-semibold text-emerald-800 text-sm">Sin riesgo</div>
              <div className="text-xs text-emerald-600">Si procesás $0 en app → pagás $0 variable</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-3">
            <Zap size={20} className="text-blue-600" />
            <div>
              <div className="font-semibold text-blue-800 text-sm">Prueba 30 días</div>
              <div className="text-xs text-blue-600">Full funcional, sin tarjeta, sin compromiso</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
