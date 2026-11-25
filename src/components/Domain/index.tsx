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
    <section id="domaine" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <Eyebrow>{t.domain.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {t.domain.title}
          </h2>
          <p className="mt-3 text-[#5A6078]">{t.domain.subtitle}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.domain.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-[#E6E8F0] overflow-hidden hover:border-[#0015CC]/40 transition-colors">
                <img
                  src={domainImages[i]}
                  alt=""
                  loading="lazy"
                  className="h-28 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-[#0B1020] leading-snug">{card.title}</h3>
                  <p className="mt-2 text-sm text-[#5A6078]">{card.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F3F4FF] text-[#0015CC] text-xs font-medium px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
