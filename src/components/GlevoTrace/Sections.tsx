import { FiCheck } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

export const Strengths = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white border-b border-[#E9EBF3]">
      <ul className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#2B3045]">
        {t.glevotrace.strengths.map((s) => (
          <li key={s} className="flex items-center gap-2">
            <FiCheck className="text-[#0F6B3C]" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Problem = () => {
  const { t } = useLanguage();
  const p = t.glevotrace.problem;
  return (
    <section id="probleme" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <Eyebrow>{p.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {p.title}
          </h2>
          <p className="mt-3 text-[#5A6078]">{p.subtitle}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#E6E8F0] p-6 border-t-4 border-t-[#F5A524]">
                <h3 className="font-semibold text-[#0B1020]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#5A6078] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Promises = () => {
  const { t } = useLanguage();
  const p = t.glevotrace.promises;
  return (
    <section className="bg-[#F7F8FC] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight mb-12">
            {p.title}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {p.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.05}>
              <div className="h-full rounded-2xl border border-[#E6E8F0] bg-white p-7 flex gap-5">
                <span className="text-3xl font-bold text-[#0015CC] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1020]">{item.title}</h3>
                  <p className="mt-2 text-[#5A6078] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatsApp = () => {
  const { t } = useLanguage();
  const w = t.glevotrace.whatsapp;
  return (
    <section id="whatsapp" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="mx-auto max-w-sm rounded-[28px] overflow-hidden border border-[#E6E8F0] shadow-xl">
            <div className="flex items-center gap-3 bg-[#075E54] text-white px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0015CC] text-sm font-bold">
                GT
              </span>
              <span>
                <span className="block font-semibold text-sm">{w.assistant}</span>
                <span className="block text-xs text-white/75">{w.online}</span>
              </span>
            </div>
            <div className="bg-[#ECE5DD] p-4 space-y-3">
              {w.chat.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] rounded-xl px-3 py-2 text-sm shadow-sm ${
                    m.from === "driver" ? "ml-auto bg-[#DCF8C6]" : "bg-white"
                  }`}
                >
                  {m.title && (
                    <span className="mb-1 flex h-16 items-center justify-center rounded-lg bg-[#C9CEDD] text-xs text-[#444B63]">
                      📷 {m.title}
                    </span>
                  )}
                  <span className="text-[#0B1020]">{m.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Eyebrow>{w.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {w.title}
          </h2>
          <ul className="mt-6 space-y-3 text-[#444B63]">
            {w.points.map((p) => (
              <li key={p.strong} className="flex gap-3">
                <FiCheck className="mt-1 shrink-0 text-[#0015CC]" />
                <span>
                  <strong className="text-[#0B1020]">{p.strong}</strong>
                  {p.text}
                </span>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-semibold text-[#0B1020]">{w.rolesTitle}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {w.roles.map((r) => (
              <div key={r.role} className="rounded-xl border border-[#E6E8F0] p-4">
                <p className="font-semibold text-[#0B1020]">{r.role}</p>
                <p className="text-sm text-[#5A6078]">{r.action}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
