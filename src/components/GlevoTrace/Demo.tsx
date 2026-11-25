import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { Eyebrow } from "../Reveal";

const cities = ["Douala", "Yaoundé", "Ngaoundéré", "Garoua"];

const toneClass: Record<string, string> = {
  ok: "bg-[#E2F5EA] text-[#0F6B3C]",
  warn: "bg-[#FFF0D4] text-[#8A4B00]",
  info: "bg-[#E3E6FF] text-[#0015CC]",
};

const Demo = () => {
  const { t } = useLanguage();
  const d = t.glevotrace.demo;
  const [step, setStep] = useState(0);
  const current = d.steps[step];
  const isLast = step === d.steps.length - 1;

  return (
    <section id="demo" className="scroll-mt-20 relative overflow-hidden bg-[#070B1F] text-white py-20 md:py-24">
      <div className="absolute inset-0 gs-dots opacity-40" />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <Eyebrow dark>{d.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold tracking-tight">{d.title}</h2>
          <p className="mt-3 text-[#C2C7DE]">{d.hint}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 items-start">
          <ol className="space-y-3" role="tablist" aria-label={d.title}>
            {d.steps.map((s, i) => {
              const active = i === step;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setStep(i)}
                    className={`w-full text-left rounded-2xl border p-5 flex gap-4 transition-colors ${
                      active
                        ? "bg-[#1C2550] border-[#6E7BFF]"
                        : "bg-[#121938] border-[#222B55] hover:border-[#3A4260]"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold ${
                        active ? "bg-[#F5A524] text-[#0B1020]" : "bg-[#222B55] text-[#C2C7DE]"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      {active && (
                        <span className="mt-1 block text-sm text-[#C2C7DE] leading-relaxed">{s.desc}</span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div>
            <div className="mb-6 flex items-center" aria-hidden="true">
              {cities.map((c, i) => (
                <div key={c} className={`flex items-center ${i < cities.length - 1 ? "flex-1" : ""}`}>
                  <div className="flex flex-col items-center">
                    <span
                      className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${
                        i <= step ? "bg-[#F5A524] border-[#F5A524]" : "bg-transparent border-[#3A4260]"
                      }`}
                    />
                    <span className={`mt-2 text-[11px] sm:text-xs ${i <= step ? "text-white" : "text-[#5A6078]"}`}>
                      {c}
                    </span>
                  </div>
                  {i < cities.length - 1 && (
                    <span
                      className={`mx-1 mb-6 h-0.5 flex-1 transition-colors ${
                        i < step ? "bg-[#F5A524]" : "bg-[#222B55]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-sm rounded-[28px] border-[6px] border-[#1C2550] bg-white text-[#0B1020] p-5 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-bold text-lg">{current.panel.title}</p>
                  <p className="text-sm text-[#5A6078]">{current.panel.sub}</p>
                  <ul className="mt-4 space-y-2">
                    {current.panel.rows.map((r) => (
                      <li
                        key={r.label}
                        className="flex items-center justify-between gap-3 rounded-xl border border-[#E9EBF3] px-3 py-2.5"
                      >
                        <span>
                          <span className="block text-xs text-[#5A6078]">{r.label}</span>
                          <span className="block text-sm font-semibold">{r.value}</span>
                        </span>
                        {r.status && (
                          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${toneClass[r.tone]}`}>
                            {r.status}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {isLast ? (
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-[#E2F5EA] px-4 py-3">
                      <span className="font-semibold text-[#0F6B3C]">{d.marginLabel}</span>
                      <span className="text-lg font-bold text-[#0F6B3C]">{d.marginValue}</span>
                    </div>
                  ) : (
                    <div className="mt-4 rounded-xl bg-[#0015CC] text-white text-center text-sm font-semibold py-3">
                      {current.panel.button}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-center text-xs text-[#8A90A6]">{d.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
