import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const flags = [images.bf, images.cm, images.cg, images.gh, images.ic, images.tg];

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="scroll-mt-20 relative overflow-hidden bg-[#070B1F] text-white py-16 md:py-20">
      <div className="absolute inset-0 gs-dots opacity-40" />
      <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <Reveal>
          <Eyebrow dark>{t.mission.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold tracking-tight">
            {t.mission.titleStart}
            <span className="text-[#FFD27A]">{t.mission.highlight}</span>
            {t.mission.titleEnd}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col items-start lg:items-end gap-6">
          <div className="lg:text-right">
            <p className="text-6xl md:text-7xl font-bold text-white leading-none">300</p>
            <p className="mt-2 text-sm uppercase tracking-[1px] text-[#C2C7DE]">
              {t.mission.goal}
            </p>
          </div>
          <div className="w-full max-w-sm overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <div className="gs-marquee gap-3">
              {[...flags, ...flags].map((flag, i) => (
                <img
                  key={i}
                  src={flag}
                  alt=""
                  className="h-8 w-12 rounded object-cover shrink-0"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
