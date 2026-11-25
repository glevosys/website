import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const flags = [images.bf, images.cm, images.cg, images.gh, images.ic, images.tg];

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <Reveal>
          <Eyebrow>{t.mission.badge}</Eyebrow>
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold tracking-tight text-[#0B1020]">
            {t.mission.titleStart}
            <span className="text-[#0015CC]">{t.mission.highlight}</span>
            {t.mission.titleEnd}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="w-full max-w-sm lg:justify-self-end">
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 opacity-20" aria-hidden="true">
              {flags.map((flag) => (
                <img
                  key={flag}
                  src={flag}
                  alt=""
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-6xl md:text-7xl font-bold text-[#0015CC] leading-none">300</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[1px] text-[#444B63]">
                {t.mission.goal}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Mission;
