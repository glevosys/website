import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal from "../Reveal";

const partners = [
  { name: "Google Cloud", logo: images.googlecloud },
  { name: "Azure", logo: images.azure },
  { name: "Google AI", logo: images.googleai },
  { name: "AWS", logo: images.aws },
  { name: "GitHub", logo: images.github },
];

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 bg-gradient-to-b from-white via-[#FAFBFF] to-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F0F3FF] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0015CC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0015CC]" aria-hidden="true" />
            {t.about.badge}
          </p>
          <h2 className="mt-5 text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {t.about.heading}
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0015CC] via-[#7668D9] to-transparent" aria-hidden="true" />
          <div className="mt-6 space-y-4">
            {t.about.description.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-lg md:text-xl font-medium leading-relaxed text-[#0B1020]"
                    : "leading-relaxed text-[#444B63]"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 border-t border-[#E9EBF3] pt-10">
          <p className="text-center text-[#5A6078] mb-8">
            {t.about.toolsTagline}{" "}
            <span className="font-semibold text-[#0015CC]">
              {t.about.toolsEmphasis}
            </span>
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="gs-marquee gap-16 items-center">
              {[...partners, ...partners].map((p, i) => (
                <img
                  key={`${p.name}-${i}`}
                  src={p.logo}
                  alt={i < partners.length ? p.name : ""}
                  className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
