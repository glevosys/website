import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";

const slideImages = [images.c1, images.c2, images.c3];

const Innovation = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = t.innovation.slides.map((slide, i) => ({
    id: i + 1,
    title: slide.title,
    description: slide.description,
    image: slideImages[i],
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.2,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        scale: {
          duration: 8,
        },
        opacity: {
          duration: 0.8,
        },
      },
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const navigationVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden bg-slate-900">
      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns effect */}
          <motion.div
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* Overlays */}
            <motion.div
              className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="container relative z-10 mx-auto flex h-full items-center px-6 lg:px-12">
            <div className="max-w-2xl text-white">
              {/* Slide number indicator */}
              <motion.div
                custom={0}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-4 inline-flex items-center gap-3"
              >
                <span className="text-6xl font-black text-white/20">
                  0{current + 1}
                </span>
                <div className="h-12 w-0.5 bg-white/30" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
                  {slides[current].id} {t.innovation.of} {slides.length}
                </span>
              </motion.div>

              {/* Title with letter animation */}
              <motion.h2
                custom={1}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl leading-tight"
              >
                {slides[current].title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Decorative line */}
              <motion.div
                className="mb-6 h-1 w-24 bg-gradient-to-r from-white to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />

              {/* Description */}
              <motion.p
                custom={2}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="mb-8 text-lg md:text-xl font-light leading-relaxed text-white/90 max-w-xl"
              >
                {slides[current].description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                custom={3}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#1e3a8a",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 font-semibold backdrop-blur-sm transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.innovation.cta}
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                    }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-6 lg:px-12 pointer-events-none">
        <motion.button
          variants={navigationVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() =>
            handleSlideChange(current === 0 ? slides.length - 1 : current - 1)
          }
          className="pointer-events-auto w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          variants={navigationVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() =>
            handleSlideChange(current === slides.length - 1 ? 0 : current + 1)
          }
          className="pointer-events-auto w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="group relative h-1 w-16 overflow-hidden bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence>
              {index === current && (
                <motion.div
                  layoutId="progress"
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 border-2 border-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-white/10 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default Innovation;
