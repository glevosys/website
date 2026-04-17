import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageContext";
import africanMotifs from "../../assets/pictures/african-motifs.png";

const Intro = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `url(${africanMotifs})`,
            backgroundSize: "600px auto",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <motion.div
        className="container relative z-10 mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="max-w-4xl text-center text-5xl font-extrabold tracking-tight text-black md:text-6xl lg:text-7xl"
            variants={titleVariants}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.intro.title1}{" "}
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent pb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.intro.title2}
            </motion.span>
            <motion.div
              className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-600 md:text-xl"
            variants={itemVariants}
          >
            {t.intro.description}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="h-14 rounded-full bg-blue-700 px-10 text-lg font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/30 hover:shadow-xl hover:shadow-blue-700/40 group">
                <span className="flex items-center gap-2">
                  {t.intro.ctaExpert}
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.a>
            <motion.a
              href="#solution"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="secondary"
                className="h-14 rounded-full border-gray-200 bg-white px-10 text-lg font-medium text-black hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
              >
                {t.intro.ctaSolutions}
              </Button>
            </motion.a>
          </motion.div>
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs font-medium uppercase tracking-wider">
                {t.intro.scroll}
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
