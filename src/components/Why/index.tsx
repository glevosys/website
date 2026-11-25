import { FiCheck, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const Why = () => {
  const { t } = useLanguage();

  return (
    <section id="pourquoi" className="scroll-mt-20 bg-[#F7F8FC] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <Eyebrow>{t.why.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {t.why.title}
          </h2>
          <ul className="mt-8 space-y-4">
            {t.why.reasons.map((r) => (
              <li key={r.strong} className="flex gap-3 text-[#444B63]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0015CC] text-white">
                  <FiCheck className="h-3.5 w-3.5" />
                </span>
                <span>
                  <strong className="text-[#0B1020]">{r.strong}</strong>
                  {r.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl border border-[#E6E8F0] bg-white p-7 md:p-8 self-start">
          <h3 className="font-semibold text-[#0B1020] mb-5">{t.why.sectorsTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {t.why.sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#E6E8F0] px-3.5 py-1.5 text-sm text-[#2B3045]"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-[#5A6078] border-t border-[#E9EBF3] pt-5">
            <FiMapPin className="text-[#0015CC]" />
            {t.why.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Why;
