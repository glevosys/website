import images from "../../assets/pictures";
import { Instagram, Linkedin, Twitter } from "lucide-react"; // Optionnel : installe lucide-react

const Footer = () => {
  return (
    <footer className="bg-[#050B44] py-16 text-white/80">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <img
              src={images.logowhite}
              alt="Glevosys Logo"
              className="h-12 lg:h-16 w-auto"
            />
            <div className="space-y-4">
              <p className="text-lg font-medium text-white/60">
                Du code à la croissance.
              </p>
              <p className="max-w-sm leading-relaxed text-white/50">
                Accompagner les entreprises africaines dans leur transformation
                numérique par l'intégration de solutions cloud et IA.
              </p>
            </div>
            <div className="flex space-x-5 pt-4">
              <Instagram className="h-6 w-6 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="mb-6 text-xl font-semibold text-white">Solutions</h4>
            <ul className="space-y-3">
              {[
                "Développement Web & App",
                "Architecture réseaux & cloud",
                "Sécurité informatique",
                "Intelligence artificielle",
                "Formation",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xl font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-white transition-colors text-white/70">
                www.glevosys.com
              </li>
              <li className="cursor-pointer hover:text-white transition-colors text-white/70">
                contact@glevosys.com
              </li>
              <li className="text-white/70">Afrique</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
