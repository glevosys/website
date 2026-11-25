import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const fieldClass =
  "w-full rounded-[10px] border border-[#C9CEDD] bg-white px-3.5 py-3 text-[#0B1020] placeholder:text-[#8A90A6] focus:outline-none focus:ring-2 focus:ring-[#0015CC]/30 focus:border-[#0015CC]";
const labelClass = "block text-sm font-medium text-[#2B3045] mb-1.5";

const Contact = () => {
  const { t } = useLanguage();
  const f = t.contact.form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom"),
      entreprise: formData.get("entreprise"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };
    const subject = encodeURIComponent(
      `Nouveau contact de ${data.nom} - Glevosys`,
    );
    const body = encodeURIComponent(
      `Nom: ${data.nom}\n` +
        `Entreprise: ${data.entreprise}\n` +
        `Email: ${data.email}\n` +
        `Service: ${data.service}\n\n` +
        `Message:\n${data.message}`,
    );
    window.location.href = `mailto:info@glevosys.com?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    {
      icon: FiMail,
      label: t.contact.emailLabel,
      value: "info@glevosys.com",
      href: "mailto:info@glevosys.com",
    },
    {
      icon: FiPhone,
      label: t.contact.phoneLabel,
      value: "+237 687 218 062",
      href: "tel:+237687218062",
    },
    { icon: FiMapPin, label: t.contact.locationLabel, value: t.contact.location },
  ];

  const services = [
    f.serviceWeb,
    f.serviceAI,
    f.serviceSecurity,
    f.serviceNetwork,
    f.serviceTraining,
    f.serviceGlevotrace,
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[#0015CC] text-white grid lg:grid-cols-[1fr_1.15fr] gap-10 p-7 sm:p-10 lg:p-14">
          <div className="absolute inset-0 gs-dots opacity-25 pointer-events-none" />
          <div className="relative">
            <Eyebrow dark>{t.contact.badge}</Eyebrow>
            <h2 className="text-3xl md:text-[40px] leading-tight font-bold tracking-tight">
              {t.contact.title}
            </h2>
            <ul className="mt-10 space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[1px] text-white/60">
                      {label}
                    </span>
                    {href ? (
                      <a href={href} className="font-semibold hover:underline">
                        {value}
                      </a>
                    ) : (
                      <span className="font-semibold">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl bg-white p-6 sm:p-8 space-y-4 text-[#0B1020]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label>
                <span className={labelClass}>{f.nameLabel}</span>
                <input name="nom" required placeholder={f.namePlaceholder} className={fieldClass} />
              </label>
              <label>
                <span className={labelClass}>{f.companyLabel}</span>
                <input name="entreprise" required placeholder={f.companyPlaceholder} className={fieldClass} />
              </label>
            </div>
            <label className="block">
              <span className={labelClass}>{f.emailLabel}</span>
              <input
                type="email"
                name="email"
                required
                placeholder={f.emailPlaceholder}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className={labelClass}>{f.serviceLabel}</span>
              <select name="service" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  {f.servicePlaceholder}
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>
                {f.messageLabel}{" "}
                <span className="font-normal text-[#8A90A6]">{f.messageOptional}</span>
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder={f.messagePlaceholder}
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0015CC] hover:bg-[#000E8A] text-white font-semibold py-3.5 transition-colors"
            >
              {f.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
