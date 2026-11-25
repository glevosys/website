import { useState } from "react";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

const introductionId = "DEv4vaXRtjE";
const additionalDemoId = "MU75VA6h8ZE";

const YouTubeVideo = ({
  id,
  title,
  linkLabel,
}: {
  id: string;
  title: string;
  linkLabel: string;
}) => (
  <>
    <div className="aspect-video overflow-hidden rounded-2xl bg-[#070B1F]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${linkLabel} : ${title}`}
      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#0015CC] hover:underline"
    >
      {linkLabel}
      <FiExternalLink aria-hidden="true" />
    </a>
  </>
);

const Videos = () => {
  const { t } = useLanguage();
  const video = t.glevotrace.videos;
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="presentation" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-[40px] leading-tight font-bold text-[#0B1020] tracking-tight">
            {video.title}
          </h2>
          <p className="mt-4 text-[#5A6078] leading-relaxed">{video.description}</p>
        </div>
        <div className="mt-8">
          <YouTubeVideo
            id={introductionId}
            title={video.primaryTitle}
            linkLabel={video.watchOnYouTube}
          />
          <details
            className="group mt-5 rounded-xl border border-[#E6E8F0] bg-white"
            onToggle={(event) => setShowAdditional(event.currentTarget.open)}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-[#2B3045] hover:text-[#0015CC] [&::-webkit-details-marker]:hidden">
              {video.additionalLabel}
              <FiChevronDown className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            {showAdditional && (
              <div className="px-4 pb-4">
                <YouTubeVideo
                  id={additionalDemoId}
                  title={video.additionalTitle}
                  linkLabel={video.watchOnYouTube}
                />
              </div>
            )}
          </details>
        </div>
      </div>
    </section>
  );
};

export default Videos;
