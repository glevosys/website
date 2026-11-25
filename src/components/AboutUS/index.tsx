import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

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
    <section id="about" className="scroll-mt-20 bg-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
          <Reveal>
            <Eyebrow>{t.about.badge}</Eyebrow>
            <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
              {t.about.heading}
            </h2>
            <p className="mt-5 text-lg font-semibold text-[#0015CC]">
              {t.about.founders}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 text-[#444B63] leading-relaxed">
            {t.about.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 border-t border-[#E9EBF3] pt-10">
          <p className="text-center text-[#5A6078] mb-8">
            {t.about.toolsTagline}{" "}
            <span className="font-semibold text-[#0B1020]">
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
                  className="h-9 md:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
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
