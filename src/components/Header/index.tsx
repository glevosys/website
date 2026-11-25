import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/LanguageContext";

const langs: Language[] = ["fr", "en"];

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center gap-1 bg-[#F3F4FF] rounded-full p-1 w-fit">
      {langs.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            language === lang
              ? "bg-[#0015CC] text-white"
              : "text-[#5A6078] hover:text-[#0B1020]"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Section links point to the home page; from another page, navigate
  // client-side so the selected language is kept.
  const goToSection = (e: React.MouseEvent, path: string) => {
    setOpen(false);
    if (pathname !== "/") {
      e.preventDefault();
      navigate(path);
    }
  };

  const navs = [
    { title: t.nav.about, path: "/#about", id: "about" },
    { title: t.nav.solutions, path: "/#solution", id: "solution" },
    { title: t.nav.mission, path: "/#mission", id: "mission" },
    { title: t.nav.domain, path: "/#domaine", id: "domaine" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const traceActive = pathname === "/glevotrace";

  const glevotraceLink = (mobile = false) => (
    <Link
      to="/glevotrace"
      onClick={() => setOpen(false)}
      className={`inline-flex items-center gap-2 whitespace-nowrap transition-colors ${
        mobile
          ? "text-3xl font-bold text-[#0B1020]"
          : `text-[15px] font-medium ${
              traceActive ? "text-[#0015CC]" : "text-[#2B3045] hover:text-[#0015CC]"
            }`
      }`}
    >
      {t.nav.glevotrace}
      <span className="rounded-full bg-[#FFF0D4] text-[#8A4B00] text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
        {t.nav.newBadge}
      </span>
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-[100] bg-white transition-shadow duration-300 border-b border-[#E9EBF3] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[76px] flex justify-between items-center gap-6">
        <Link to="/" className="relative z-[150] flex items-center gap-3 shrink-0">
          <img src={images.logo} alt="GlevoSys" className="h-[38px] w-auto" />
          <span className="hidden 2xl:block whitespace-nowrap text-xs font-medium text-[#0015CC] border-l border-[#E6E8F0] pl-3">
            {t.header.tagline}
          </span>
        </Link>

        <nav className="hidden xl:block" aria-label="Navigation">
          <ul className="flex items-center gap-5 xl:gap-7 whitespace-nowrap">
            {navs.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  onClick={(e) => goToSection(e, item.path)}
                  className="text-[15px] font-medium text-[#2B3045] hover:text-[#0015CC] transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>{glevotraceLink()}</li>
          </ul>
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <LanguageToggle />
          <a
            href="/#contact"
            onClick={(e) => goToSection(e, "/#contact")}
            className="whitespace-nowrap rounded-[10px] bg-[#0015CC] hover:bg-[#000E8A] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="xl:hidden relative z-[150] text-3xl text-[#0B1020]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-white z-[140] flex flex-col xl:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col h-full px-8 pt-28 pb-10 overflow-y-auto">
                <span className="text-[#0015CC] text-xs font-semibold tracking-widest uppercase mb-6">
                  Menu
                </span>
                <ul className="space-y-5">
                  {navs.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.path}
                        onClick={(e) => goToSection(e, item.path)}
                        className="text-3xl font-bold text-[#0B1020] hover:text-[#0015CC] transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                  <li>{glevotraceLink(true)}</li>
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <LanguageToggle />
                  <a
                    href="/#contact"
                    onClick={(e) => goToSection(e, "/#contact")}
                    className="rounded-[10px] bg-[#0015CC] text-white text-sm font-semibold px-5 py-2.5"
                  >
                    {t.nav.contact}
                  </a>
                </div>
                <div className="mt-auto border-t border-[#E9EBF3] pt-6">
                  <p className="text-[#0B1020] font-bold text-lg mb-1">
                    {t.header.tagline}
                  </p>
                  <p className="text-[#5A6078] text-sm">{t.header.copyright}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
