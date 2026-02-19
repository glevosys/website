import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import images from "../../assets/pictures";

type NavType = {
  title: string;
  path: string;
  id: string;
};

const navs: NavType[] = [
  { title: "Nos solutions", path: "#solution", id: "solution" },
  { title: "Mission", path: "#mission", id: "mission" },
  { title: "Domaine", path: "#domaine", id: "domaine" },
  { title: "Contact", path: "#contact", id: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (open) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "unset";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      clipPath: "circle(0% at top right)",
      opacity: 0,
    },
    visible: {
      clipPath: "circle(150% at top right)",
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      clipPath: "circle(0% at top right)",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      className={`sticky top-0 z-[100] bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-md border-b border-gray-200"
          : "border-b border-gray-100"
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
        <motion.a
          href="/"
          className="relative z-[150]"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img src={images.logo} alt="logo" className="h-10 md:h-12 w-auto" />
        </motion.a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navs.map((item, index) => (
              <motion.li
                className="text-lg"
                key={item.id}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href={item.path}
                  className={`font-bold transition-colors relative ${
                    activeSection === item.id
                      ? "text-[#0015CC]"
                      : "text-gray-600 hover:text-black"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0015CC]"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-[150] text-3xl text-gray-900"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-white z-[140] flex flex-col md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0015CC]/5 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              />

              <div className="flex flex-col h-full px-8 pt-32 pb-12 relative z-10">
                <motion.span
                  className="text-[#0015CC] text-xs font-black tracking-widest uppercase mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Menu
                </motion.span>
                <ul className="space-y-6">
                  {navs.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className="overflow-hidden"
                      variants={mobileItemVariants}
                    >
                      <motion.a
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className={`text-4xl font-black block transition-colors ${
                          activeSection === item.id
                            ? "text-[#0015CC]"
                            : "text-gray-300 hover:text-gray-900"
                        }`}
                        whileHover={{
                          x: 10,
                          color: "#0015CC",
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="inline-block"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {item.title}
                        </motion.span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-auto border-t border-gray-100 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.p
                    className="text-black font-black text-xl mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    Du code à la croissance.
                  </motion.p>
                  <motion.p
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    © 2026 Glevosys
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
