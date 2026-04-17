import { motion } from "framer-motion";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  const flags = [
    images.bf,
    images.cm,
    images.cg,
    images.gh,
    images.ic,
    images.tg,
    images.bf,
    images.cm,
    images.cg,
    images.gh,
    images.ic,
    images.tg,
    images.gh,
    images.ic,
    images.tg,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const flagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 0.15,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const textVariants = {
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

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section id="mission" className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1 lg:self-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t.mission.line1}
              </motion.span>
              <motion.span
                className="block text-[#0015CC] bg-gradient-to-r from-[#0015CC] to-[#0033FF] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t.mission.line2}
              </motion.span>
              <motion.span
                className="block mt-2 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {t.mission.line3}
              </motion.span>
            </h2>

            <motion.div
              className="mt-6 w-20 h-1 bg-gradient-to-r from-[#0015CC] to-transparent mx-auto lg:mx-0"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Visual Section */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-lg">
            {/* Flags Grid with Animation */}
            <motion.div
              className="grid grid-cols-5 gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {flags.map((flag, i) => (
                <motion.div
                  key={i}
                  className="aspect-[3/2] rounded-lg md:rounded-xl overflow-hidden shadow-sm"
                  variants={flagVariants}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.3,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={flag}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Number Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-end lg:justify-end lg:pb-4 pointer-events-none">
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={numberVariants}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-3xl bg-[#0015CC] opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                />

                <motion.span
                  className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-[#0015CC] via-[#0033FF] to-[#0015CC] bg-clip-text text-transparent tracking-tighter block lg:-ml-12 relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  +300
                </motion.span>

                <motion.span
                  className="text-xl md:text-2xl font-semibold text-gray-900 uppercase tracking-widest block text-center lg:text-right mt-[-10px] md:mt-[-20px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {t.mission.companies}
                </motion.span>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#0015CC] rounded-full opacity-20"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
