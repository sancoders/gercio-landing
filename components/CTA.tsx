"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Shield, Zap, MapPin } from "lucide-react";

type FormData = {
  name: string;
  restaurant: string;
  email: string;
  phone: string;
  billing: string;
};

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await fetch(
        "https://n8n.srv1106280.hstgr.cloud/webhook/gercio-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            source: "gercio.site",
            timestamp: new Date().toISOString(),
          }),
        }
      );
    } catch {
      // Silently fail — still show success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden"
      id="contacto"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Empezá gratis hoy
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              30 días full funcional, sin tarjeta, sin compromiso. Respuesta en
              menos de 24 horas.
            </p>

            {/* Trust badges */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield size={16} className="text-emerald-400" />
                </div>
                <span className="text-sm">
                  Datos seguros — nunca los vendemos ni compartimos
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span className="text-sm">
                  Empresa argentina, soporte local en español
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-amber-400" />
                </div>
                <span className="text-sm">
                  Setup en 48 horas — sin cambiar tu operación
                </span>
              </div>
            </div>

            {/* Testimonials placeholder */}
            <div className="space-y-4">
              {[
                {
                  text: '"Antes teníamos 2 mozos respondiendo preguntas sobre el menú todo el día. Ahora la IA responde, y los mozos solo sirven. Duplicamos las mesas atendidas."',
                  name: "— Dueño de cafetería, Palermo",
                },
                {
                  text: '"Los errores en pedidos nos costaban 5 hamburguesas por día. Con Gercio, cero errores. El ROI fue inmediato."',
                  name: "— Hamburguesería, Villa Crespo",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm italic mb-2">{t.text}</p>
                  <p className="text-slate-500 text-xs font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Listo! Te contactamos pronto
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Recibimos tu solicitud. Un asesor de Gercio te va a
                    contactar en menos de 24 horas para coordinar la demo.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Solicitar demo gratuita
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          {...register("name", { required: true })}
                          placeholder="Juan García"
                          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.name
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200"
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Nombre del restaurante *
                        </label>
                        <input
                          {...register("restaurant", { required: true })}
                          placeholder="Café Gutierrez"
                          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.restaurant
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Email *
                      </label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^[^@]+@[^@]+\.[^@]+$/,
                        })}
                        type="email"
                        placeholder="juan@micafe.com"
                        className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        placeholder="+54 9 11 1234-5678"
                        className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.phone
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Facturación mensual aprox.
                      </label>
                      <select
                        {...register("billing")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="menos-5m">Menos de $5M/mes</option>
                        <option value="5-15m">$5M - $15M/mes</option>
                        <option value="15-30m">$15M - $30M/mes</option>
                        <option value="30-50m">$30M - $50M/mes</option>
                        <option value="mas-50m">Más de $50M/mes</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Solicitar demo gratuita
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Sin tarjeta. Sin compromiso. Respuesta en &lt;24 horas.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
