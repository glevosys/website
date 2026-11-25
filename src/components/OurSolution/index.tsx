import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal, { Eyebrow } from "../Reveal";

const cardImages = [
  images.solutionWebApp,
  images.c2,
  images.solutionSecurity,
  images.c4,
  images.solutionTraining,
];

const OurSolution = () => {
  const { t } = useLanguage();
  const { product, more } = t.solution;

  return (
    <section id="solution" className="scroll-mt-20 bg-[#F7F8FC] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>{t.solution.badge}</Eyebrow>
            <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
              {t.solution.title}
            </h2>
            <p className="mt-3 text-[#5A6078] max-w-xl">{t.solution.subtitle}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-[#0015CC] hover:text-[#000E8A] shrink-0"
          >
            {t.solution.cta}
            <FiArrowRight />
          </a>
        </Reveal>

        <Reveal className="mb-6">
          <Link
            to="/glevotrace"
            className="group grid md:grid-cols-[1fr_auto] gap-6 items-center rounded-2xl bg-[#0015CC] text-white p-7 md:p-9 overflow-hidden relative"
          >
            <div className="absolute inset-0 gs-dots opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-[#F5A524] text-[#0B1020] text-xs font-semibold px-3 py-1">
                  {product.badge}
                </span>
                <span className="text-sm text-white/75">{product.tag}</span>
              </div>
              <div className="bg-white inline-flex rounded-lg px-3 py-2 mb-4">
                <img src={images.glevotraceLogo} alt={product.title} className="h-7 w-auto" />
              </div>
              <p className="text-white/85 max-w-2xl leading-relaxed">{product.description}</p>
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-xl bg-white text-[#0015CC] font-semibold px-5 py-3 w-fit group-hover:gap-3 transition-all">
              {product.cta}
              <FiArrowRight />
            </span>
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solution.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.05}>
              <article className="h-full rounded-2xl border border-[#E6E8F0] bg-white overflow-hidden">
                <img
                  src={cardImages[i]}
                  alt=""
                  loading="lazy"
                  className="h-32 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0B1020] mb-3">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-[#444B63]">
                    {card.content.map((item) => (
                      <li key={item} className="flex gap-2">
                        <FiCheck className="mt-0.5 shrink-0 text-[#0015CC]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl border border-[#E6E8F0] bg-white overflow-hidden flex flex-col">
              <img
                src={images.solutionMore}
                alt=""
                loading="lazy"
                className="h-32 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#0B1020] mb-3">{more.title}</h3>
                <p className="text-sm text-[#444B63] leading-relaxed">{more.description}</p>
                <a
                  href="#contact"
                  className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0015CC]"
                >
                  {more.cta}
                  <FiArrowRight />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
