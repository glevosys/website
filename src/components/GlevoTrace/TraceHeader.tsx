import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";
import { LanguageToggle } from "../Header";

const TraceHeader = () => {
  const { t } = useLanguage();
  const g = t.glevotrace;
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#probleme", label: g.nav.problem },
    { href: "#presentation", label: g.nav.how },
    { href: "#whatsapp", label: g.nav.whatsapp },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur border-b border-[#E9EBF3]">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 shrink-0">
          <a href="#top" aria-label="GlevoTrace">
            <img src={images.glevotraceLogo} alt="GlevoTrace" className="h-8 w-auto" />
          </a>
          <Link
            to="/"
            className="hidden sm:flex items-center gap-2 border-l border-[#E6E8F0] pl-4 text-xs text-[#5A6078] hover:text-[#0015CC]"
          >
            {g.byline}
            <img src={images.logo} alt="GlevoSys" className="h-5 w-auto" />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-7" aria-label="GlevoTrace">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#2B3045] hover:text-[#0015CC]"
            >
              {l.href === "#whatsapp" && (
                <FaWhatsapp className="h-4 w-4 shrink-0 text-[#075E54]" aria-hidden="true" />
              )}
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#pilote"
            className="rounded-[10px] bg-[#0015CC] hover:bg-[#000E8A] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            {g.nav.cta}
          </a>
        </div>
        <button
          type="button"
          className="xl:hidden text-3xl text-[#0B1020]"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-[#E9EBF3] bg-white px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-lg font-semibold text-[#0B1020]"
            >
              {l.href === "#whatsapp" && (
                <FaWhatsapp className="h-5 w-5 shrink-0 text-[#075E54]" aria-hidden="true" />
              )}
              {l.label}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <LanguageToggle />
            <a
              href="#pilote"
              onClick={() => setOpen(false)}
              className="rounded-[10px] bg-[#0015CC] text-white text-sm font-semibold px-5 py-2.5"
            >
              {g.nav.cta}
            </a>
          </div>
          <Link to="/" className="flex items-center gap-2 text-sm text-[#5A6078] pt-2">
            {g.byline}
            <img src={images.logo} alt="GlevoSys" className="h-5 w-auto" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default TraceHeader;
