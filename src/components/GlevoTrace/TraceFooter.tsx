import { Link } from "react-router-dom";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";

const TraceFooter = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#070B1F] text-[#C2C7DE]">
      <div className="max-w-[1200px] mx-auto px-6 py-9 flex flex-wrap items-center justify-between gap-4 text-sm">
        <Link to="/" className="flex items-center gap-3 hover:text-white" aria-label={t.glevotrace.footer.backHome}>
          <span>{t.glevotrace.footer.productOf}</span>
          <img src={images.logowhite} alt="GlevoSys" className="h-7 w-auto" />
        </Link>
        <span>info@glevosys.com · +237 687 218 062 · © 2026 GlevoSys</span>
      </div>
    </footer>
  );
};

export default TraceFooter;
