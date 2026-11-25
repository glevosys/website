import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

const Truck = () => (
  <g className="gt-truck">
    <rect x="0" y="-26" width="46" height="24" rx="3" fill="#FFFFFF" />
    <rect x="48" y="-20" width="20" height="18" rx="3" fill="#F5A524" />
    <rect x="56" y="-17" width="9" height="7" rx="1" fill="#0015CC" />
    <circle cx="12" cy="0" r="5" fill="#070B1F" />
    <circle cx="36" cy="0" r="5" fill="#070B1F" />
    <circle cx="60" cy="0" r="5" fill="#070B1F" />
  </g>
);

const Hero = () => {
  const { t } = useLanguage();
  const h = t.glevotrace.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-[#0015CC] text-white">
      <div className="absolute inset-0 gs-dots opacity-30" />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 md:pt-20 pb-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[1px] text-[#FFD27A] mb-5">
            {h.eyebrow}
          </p>
          <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.12] tracking-[-1.2px] font-bold">
            {h.title}
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">{h.description}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#pilote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#0015CC] hover:bg-[#F3F4FF] px-6 py-3.5 font-semibold transition-colors"
            >
              {h.ctaPrimary}
              <FiArrowRight />
            </a>
            <a
              href="#presentation"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 hover:border-white px-6 py-3.5 font-semibold transition-colors"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="gs-float rounded-2xl bg-white text-[#0B1020] p-6 shadow-2xl max-w-md w-full lg:justify-self-end"
        >
          <p className="text-lg font-bold">{h.card.route}</p>
          <p className="text-sm text-[#5A6078]">{h.card.sub}</p>
          <dl className="mt-5 divide-y divide-[#E9EBF3]">
            {h.card.rows.map((r) => (
              <div key={r.label} className="flex justify-between gap-4 py-2.5 text-sm">
                <dt className="text-[#5A6078]">{r.label}</dt>
                <dd className="font-semibold">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-[#E2F5EA] px-4 py-3">
            <span className="font-semibold text-[#0F6B3C]">{h.card.marginLabel}</span>
            <span className="text-xl font-bold text-[#0F6B3C]">{h.card.marginValue}</span>
          </div>
          <p className="mt-3 text-xs text-[#8A90A6]">{h.card.note}</p>
        </motion.div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 pb-8" aria-hidden="true">
        <svg viewBox="0 0 1000 60" className="w-full h-auto">
          <line x1="20" y1="44" x2="980" y2="44" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="14" strokeLinecap="round" />
          <line x1="20" y1="44" x2="980" y2="44" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="18 8" className="gt-road" />
          <circle cx="20" cy="44" r="7" fill="#FFD27A" />
          <circle cx="980" cy="44" r="7" fill="#FFD27A" />
          <text x="20" y="20" fill="#FFFFFF" fontSize="14" fontWeight="600">Douala</text>
          <text x="980" y="20" fill="#FFFFFF" fontSize="14" fontWeight="600" textAnchor="end">Garoua</text>
          <g transform="translate(560 40)">
            <Truck />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
