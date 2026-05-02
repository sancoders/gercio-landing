"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, Users, Zap, ChefHat, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap size={14} />
              Sistema de gestión con IA para restaurantes
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Duplicá tus mesas{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                sin contratar
              </span>{" "}
              más mozos
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
            >
              Sistema completo de gestión con IA para restaurantes argentinos.
              Menú digital, chat inteligente, pagos automáticos y cocina
              sincronizada — todo desde el QR de tu mesa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Empezá gratis 30 días
                <ArrowRight size={20} />
              </a>
              <a
                href="https://v0-gercio.vercel.app/?table=7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/5"
              >
                <Play size={18} />
                Ver demo en vivo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp size={16} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold">+20%</div>
                  <div className="text-xs">rotación de mesas</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold">ROI 18x</div>
                  <div className="text-xs">retorno garantizado</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Star size={16} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-bold">48 horas</div>
                  <div className="text-xs">setup completo</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-16 h-5 bg-black rounded-full" />
                    </div>
                  </div>

                  {/* App UI */}
                  <div className="bg-white px-4 py-4 min-h-[480px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          Mesa 7 — Café Gutierrez
                        </div>
                        <div className="text-xs text-gray-500">
                          Asistente IA · en línea
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                    </div>

                    {/* Chat */}
                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-3 py-2 text-xs text-gray-700 max-w-[80%]">
                        ¿Qué diferencia hay entre el flat white y el cortado?
                      </div>
                      <div className="bg-blue-600 rounded-2xl rounded-tr-none px-3 py-2 text-xs text-white max-w-[80%] ml-auto">
                        El flat white tiene más leche cremosa (200ml) y doble
                        espresso, más suave. El cortado es 50ml leche + 1
                        espresso, más intenso. ¿Cuál preferís?
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-3 py-2 text-xs text-gray-700 max-w-[80%]">
                        Perfecto, dame un flat white y dos medialunas
                      </div>
                    </div>

                    {/* Order summary */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-3">
                      <div className="text-xs font-semibold text-emerald-800 mb-2">
                        Tu pedido:
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Flat White</span>
                        <span className="font-medium">$2,800</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 mb-2">
                        <span>Medialunas x2</span>
                        <span className="font-medium">$1,400</span>
                      </div>
                      <div className="border-t border-emerald-200 pt-2 flex justify-between text-xs font-bold text-gray-900">
                        <span>Total</span>
                        <span>$4,200</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white text-xs font-semibold py-3 rounded-xl">
                      Confirmar pedido →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating kitchen card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 max-w-[160px]"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 mb-2">
                  <ChefHat size={14} className="text-orange-500" />
                  Cocina
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <span className="text-xs text-gray-600">Mesa 7 — nuevo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-600">Mesa 3 — listo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-xs text-gray-600">Mesa 1 — cocina</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating payment card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -left-4 bottom-1/4 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 max-w-[150px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MP</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">Pago OK</span>
                </div>
                <div className="text-xs text-gray-500">Mesa 5 — $8,400</div>
                <div className="text-xs text-emerald-600 font-medium">
                  + $840 propina
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 0 0 30L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
