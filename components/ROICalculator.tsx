"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";

function formatARS(amount: number): string {
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}k`;
  }
  return `$${amount}`;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = display;
    const end = value;
    const duration = 800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span>{formatARS(display)}</span>;
}

export default function ROICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [billing, setBilling] = useState(20);
  const [usePayments, setUsePayments] = useState(true);

  const billingAmount = billing * 1_000_000;
  const processedInApp = usePayments ? billingAmount * 0.5 : 0;
  const gercioBase = 100_000;
  const gercioVariable = processedInApp * 0.015;
  const gercioTotal = gercioBase + gercioVariable;
  const extraSales = billingAmount * 0.2;
  const errorSavings = 250_000;
  const staffSavings = 350_000;
  const totalBenefit = extraSales + errorSavings + staffSavings;
  const netGain = totalBenefit - gercioTotal;
  const roi = Math.round(totalBenefit / gercioTotal);

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="roi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator size={14} />
            Calculadora de ROI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cuánto ganarías con Gercio?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ajustá tu facturación y calculá el retorno en tiempo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Inputs */}
            <div className="p-8">
              <h3 className="font-bold text-gray-900 text-lg mb-6">
                Tu restaurante
              </h3>

              {/* Billing slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Facturación mensual
                  </label>
                  <span className="text-2xl font-black text-blue-600">
                    ${billing}M
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={billing}
                  onChange={(e) => setBilling(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$5M</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Toggle payments */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-semibold text-sm text-gray-800">
                    Usar pagos integrados
                  </div>
                  <div className="text-xs text-gray-500">
                    MP/tarjeta vía Gercio (50% ventas)
                  </div>
                </div>
                <button
                  onClick={() => setUsePayments(!usePayments)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    usePayments ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      usePayments ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Cost breakdown */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="text-sm font-semibold text-blue-900 mb-3">
                  Costo Gercio:
                </div>
                <div className="space-y-1 text-xs text-blue-700">
                  <div className="flex justify-between">
                    <span>Base mensual</span>
                    <span className="font-semibold">$100k</span>
                  </div>
                  {usePayments && (
                    <div className="flex justify-between">
                      <span>1.5% sobre {formatARS(processedInApp)}</span>
                      <span className="font-semibold">
                        {formatARS(gercioVariable)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-blue-900 pt-1 border-t border-blue-200">
                    <span>Total</span>
                    <span>{formatARS(gercioTotal)}/mes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={18} className="text-emerald-400" />
                <h3 className="font-bold text-lg">Tu ganancia estimada</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-slate-300">
                      +20% rotación de mesas
                    </div>
                    <div className="text-xs text-slate-500">ventas extra</div>
                  </div>
                  <div className="text-emerald-400 font-bold text-lg">
                    +<AnimatedNumber value={extraSales} />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-slate-300">Menos errores</div>
                    <div className="text-xs text-slate-500">
                      pedidos y retrabajo
                    </div>
                  </div>
                  <div className="text-emerald-400 font-bold text-lg">
                    +<AnimatedNumber value={errorSavings} />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <div>
                    <div className="text-sm text-slate-300">Ahorro de staff</div>
                    <div className="text-xs text-slate-500">
                      1 mozo = 2.5 mozos
                    </div>
                  </div>
                  <div className="text-emerald-400 font-bold text-lg">
                    +<AnimatedNumber value={staffSavings} />
                  </div>
                </div>
              </div>

              {/* Net result */}
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <div className="text-slate-300 text-sm mb-1">
                  Ganancia neta por mes
                </div>
                <div className="text-4xl font-black text-white mb-1">
                  +<AnimatedNumber value={netGain} />
                </div>
                <div className="text-slate-400 text-xs mb-3">
                  después de pagar Gercio ({formatARS(gercioTotal)}/mes)
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ROI: <AnimatedNumber value={roi} />x
                </div>
              </div>

              <a
                href="#contacto"
                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                Quiero este ROI
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-4">
          * Estimación conservadora basada en datos de 18 restaurantes. Los
          resultados reales pueden variar.
        </p>
      </div>
    </section>
  );
}
