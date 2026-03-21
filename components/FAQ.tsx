"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito cambiar mi sistema actual (caja, POS)?",
    a: "No. Gercio funciona completamente en paralelo. Seguís usando tu caja/POS para el cierre y administración. Gercio maneja la interacción con el cliente (pedidos, pagos) sin interferir con tus sistemas existentes.",
  },
  {
    q: "¿Funciona con delivery y takeaway?",
    a: "Sí. Los pedidos digitales también pueden llegar a la pantalla de cocina para delivery o takeaway. La IA puede responder preguntas sobre tiempos de entrega y disponibilidad.",
  },
  {
    q: "¿Qué pasa si el cliente no tiene smartphone?",
    a: "Puede seguir llamando al mozo como siempre. Gercio es un complemento, no un reemplazo. El 95% de los clientes en Argentina tiene smartphone, pero siempre tenés la opción tradicional.",
  },
  {
    q: "¿Cuánto tiempo toma la instalación completa?",
    a: "48-72 horas desde el primer contacto hasta tener todas las mesas operativas. Día 1: setup y capacitación. Día 2: lanzamiento suave con 2-3 mesas. Día 3: operación full.",
  },
  {
    q: "¿Cómo funciona el chat IA? ¿Está entrenado con mi menú?",
    a: "Sí. Durante el setup cargamos todo tu menú (platos, ingredientes, precios, alérgenos, preparaciones) en el sistema. La IA queda entrenada específicamente con tu restaurante. Si cambiás precios o platos, actualizamos la IA en menos de 24 horas.",
  },
  {
    q: "¿Los datos de mis clientes son seguros?",
    a: "Absolutamente. Los datos son tuyos — nunca los vendemos ni compartimos. Usamos infraestructura en servidores argentinos y europeos con encriptación de extremo a extremo. Cumplimos con las normativas de privacidad vigentes.",
  },
  {
    q: "¿Puedo pausar o cancelar el servicio?",
    a: "Sí. Sin contratos largos. El servicio es mes a mes y podés pausar o cancelar cuando quieras, sin penalidades. Solo avisás con 30 días de anticipación.",
  },
  {
    q: "¿Qué incluye la prueba gratis de 30 días?",
    a: "Acceso full a todas las funcionalidades: menú digital, chat IA, pedidos, pagos y pantalla de cocina. Funcional en 2-3 mesas piloto. Sin tarjeta de crédito, sin compromiso. Al finalizar decidís si continuás.",
  },
  {
    q: "¿Cómo es el soporte técnico?",
    a: "WhatsApp, email y teléfono. Respuesta garantizada en menos de 2 horas en horario comercial (9-21hs). Para problemas críticos durante el servicio, soporte inmediato 24/7.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-500">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className="text-gray-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                      <div className="pt-3">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
