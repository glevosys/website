import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

const center = { x: 220, y: 190 };
const nodes = [
  { x: 80, y: 80, amber: false, label: { left: "4%", top: "8%" }, float: "gs-float" },
  { x: 360, y: 100, amber: false, label: { right: "0%", top: "14%" }, float: "gs-float-2" },
  { x: 330, y: 310, amber: true, label: { right: "4%", bottom: "12%" }, float: "gs-float-3" },
  { x: 100, y: 300, amber: false, label: { left: "0%", bottom: "16%" }, float: "gs-float-2" },
];

const NetworkVisual = ({ labels }: { labels: string[] }) => (
  <div className="relative w-full max-w-[440px] mx-auto aspect-[440/400]" aria-hidden="true">
    <svg viewBox="0 0 440 400" className="absolute inset-0 w-full h-full">
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke="#3B4AE0"
          strokeWidth="1.5"
          className="gs-flow"
        />
      ))}
      <line x1={80} y1={80} x2={360} y2={100} stroke="#222B55" strokeWidth="1" />
      <line x1={100} y1={300} x2={330} y2={310} stroke="#222B55" strokeWidth="1" />
      {nodes.map((n, i) => (
        <g key={`n-${i}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r="9"
            fill={n.amber ? "#F5A524" : "#6E7BFF"}
            className={i % 2 ? "gs-pulse-2" : "gs-pulse"}
          />
          <circle cx={n.x} cy={n.y} r="7" fill={n.amber ? "#F5A524" : "#6E7BFF"} />
        </g>
      ))}
      <circle cx={center.x} cy={center.y} r="40" fill="#0015CC" opacity="0.25" className="gs-pulse" />
      <circle cx={center.x} cy={center.y} r="30" fill="#0015CC" />
      <text
        x={center.x}
        y={center.y + 5}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="14"
        fontWeight="700"
      >
        GS
      </text>
    </svg>
    {nodes.map((n, i) => (
      <span
        key={`label-${i}`}
        style={n.label}
        className={`absolute ${n.float} rounded-lg bg-white text-[#0B1020] text-xs sm:text-[13px] font-semibold px-3 py-1.5 shadow-lg whitespace-nowrap`}
      >
        {labels[i]}
      </span>
    ))}
  </div>
);

const Intro = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#070B1F] text-white">
      <div className="absolute inset-0 gs-dots gs-fade-b opacity-70" />
      <svg
        className="absolute -top-40 -right-40 w-[560px] h-[560px] opacity-40 pointer-events-none"
        viewBox="0 0 560 560"
        aria-hidden="true"
      >
        <g className="gs-spin" fill="none" stroke="#3B4AE0" strokeWidth="1">
          <circle cx="280" cy="280" r="270" strokeDasharray="4 10" />
          <circle cx="280" cy="280" r="200" />
          <circle cx="280" cy="280" r="130" strokeDasharray="2 8" />
        </g>
      </svg>

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[1px] text-[#FFD27A] mb-5">
            {t.intro.eyebrow}
          </p>
          <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] tracking-[-1.5px] font-bold">
            {t.intro.title}
          </h1>
          <p className="mt-6 text-lg text-[#C2C7DE] max-w-xl leading-relaxed">
            {t.intro.description}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0015CC] hover:bg-[#000E8A] px-6 py-3.5 font-semibold transition-colors"
            >
              {t.intro.ctaPrimary}
              <FiArrowRight />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-xl border border-[#3A4260] hover:border-white px-6 py-3.5 font-semibold transition-colors"
            >
              {t.intro.ctaSolutions}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <NetworkVisual labels={t.intro.nodes} />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
