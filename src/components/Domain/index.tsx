import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const domainImages = [
  images.domainDevsecops,
  images.domainDevelopment,
  images.domainTraining,
  images.domainSecurity,
];

const Domain = () => {
  const { t } = useLanguage();

  return (
    <section id="domaine" className="scroll-mt-20 bg-gradient-to-b from-white to-[#F7F8FC] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <Eyebrow>{t.domain.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {t.domain.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0015CC] to-[#7668D9]" aria-hidden="true" />
          <p className="mt-4 text-[#5A6078]">{t.domain.subtitle}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.domain.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <article className="h-full flex flex-col rounded-2xl border border-[#E6E8F0] bg-[#EEF1F7] overflow-hidden hover:border-[#0015CC]/40 transition-colors">
                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-[#0B1020] leading-snug">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#5A6078]">{card.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white text-[#0015CC] text-xs font-medium px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <img
                  src={domainImages[i]}
                  alt=""
                  loading="lazy"
                  className="h-28 w-full object-cover"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
