import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";
import { Eyebrow } from "../Reveal";

const fieldClass =
  "w-full rounded-[10px] border border-[#C9CEDD] bg-white px-3.5 py-3 text-[#0B1020] placeholder:text-[#8A90A6] focus:outline-none focus:ring-2 focus:ring-[#0015CC]/30 focus:border-[#0015CC]";
const labelClass = "block text-sm font-medium text-[#2B3045] mb-1.5";

const Pilot = () => {
  const { t } = useLanguage();
  const p = t.glevotrace.pilot;
  const f = p.form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`${f.subject} - ${data.get("societe")}`);
    const body = encodeURIComponent(
      `${f.name}: ${data.get("nom")}\n` +
        `${f.company}: ${data.get("societe")}\n` +
        `${f.whatsapp}: ${data.get("whatsapp")}\n` +
        `${f.trucks}: ${data.get("camions")}\n\n` +
        `${f.lastTrip}:\n${data.get("voyage")}`,
    );
    window.location.href = `mailto:info@glevosys.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pilote" className="scroll-mt-20 bg-[#F7F8FC] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0015CC] text-white p-8 md:p-10">
          <div className="absolute inset-0 gs-dots opacity-25 pointer-events-none" />
          <div className="relative">
            <Eyebrow dark>{p.badge}</Eyebrow>
            <h2 className="text-3xl md:text-[36px] leading-tight font-bold tracking-tight">{p.title}</h2>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {p.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-xs text-white/75">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/85 leading-relaxed">{p.included}</p>
            <div className="mt-8 border-t border-white/20 pt-6 space-y-1.5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[1px] text-[#FFD27A] mb-2">
                {p.contactTitle}
              </p>
              <p>
                {p.phoneLabel}{" "}
                <a href="tel:+237687218062" className="font-semibold hover:underline">
                  +237 687 218 062
                </a>
              </p>
              <p>
                {p.emailLabel}{" "}
                <a href="mailto:info@glevosys.com" className="font-semibold hover:underline">
                  info@glevosys.com
                </a>
              </p>
              <p className="text-white/70">{p.location}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-[#E6E8F0] bg-white p-8 md:p-10 space-y-4">
          <h3 className="text-2xl font-bold text-[#0B1020]">{p.formTitle}</h3>
          <p className="text-[#5A6078]">{p.formSubtitle}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <label>
              <span className={labelClass}>{f.name}</span>
              <input name="nom" required className={fieldClass} />
            </label>
            <label>
              <span className={labelClass}>{f.company}</span>
              <input name="societe" required className={fieldClass} />
            </label>
            <label>
              <span className={labelClass}>
                <FaWhatsapp className="mr-1.5 inline-block h-4 w-4 align-[-2px] text-[#075E54]" aria-hidden="true" />
                {f.whatsapp}
              </span>
              <input name="whatsapp" type="tel" required placeholder={f.whatsappPlaceholder} className={fieldClass} />
            </label>
            <label>
              <span className={labelClass}>{f.trucks}</span>
              <input name="camions" type="number" min={1} className={fieldClass} />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>{f.lastTrip}</span>
            <textarea name="voyage" rows={3} placeholder={f.lastTripPlaceholder} className={fieldClass} />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#0015CC] hover:bg-[#000E8A] text-white font-semibold py-3.5 transition-colors"
          >
            {f.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Pilot;
