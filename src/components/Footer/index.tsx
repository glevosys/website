import images from "../../assets/pictures";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const linkClass = "text-white/70 hover:text-white transition-colors";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { title: t.nav.about, to: "/#about" },
    { title: t.nav.solutions, to: "/#solution" },
    { title: t.nav.mission, to: "/#mission" },
    { title: t.nav.domain, to: "/#domaine" },
    { title: t.nav.contact, to: "/#contact" },
    { title: t.footer.careers, to: "/careers" },
  ];

  return (
    <footer className="bg-[#050B44] py-16 text-white/80">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-4 space-y-6">
            <Link to="/">
              <img
                src={images.logowhite}
                alt="Glevosys Logo"
                className="h-12 lg:h-16 w-auto"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-lg font-medium text-white/60">
                {t.footer.tagline}
              </p>
              <p className="max-w-sm leading-relaxed text-white/50">
                {t.footer.description}
              </p>
            </div>
            <div className="flex space-x-5 pt-4">
              <a
                href="https://www.linkedin.com/company/glevosys/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 cursor-pointer hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-xl font-semibold text-white">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xl font-semibold text-white">
              {t.footer.solutionsTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.solutions.map((item) => (
                <li key={item}>
                  <Link to="/#solution" className={linkClass}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xl font-semibold text-white">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@glevosys.com" className={linkClass}>
                  info@glevosys.com
                </a>
              </li>
              <li>
                <a href="tel:+237687218062" className={linkClass}>
                  +237 687 218 062
                </a>
              </li>
              <li className="text-white/70">Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
