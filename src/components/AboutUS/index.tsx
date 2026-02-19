import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import images from "../../assets/pictures";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const partners = [
    { name: "Google Cloud", logo: images.googlecloud },
    { name: "Azure", logo: images.azure },
    { name: "Google AI", logo: images.googleai },
    { name: "AWS", logo: images.aws },
    { name: "GitHub", logo: images.github },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const lineVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.span
              className="inline-flex items-center gap-2 text-gray-500 font-semibold tracking-wider uppercase text-sm bg-gray-100 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Glevosys
            </motion.span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6"
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 50, rotateX: -90 }
              }
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Qui sommes-nous ?
            </motion.span>
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-transparent rounded-full mb-8"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-justify lg:text-left">
              {`GlevoSys est une entreprise technologique spécialisée dans la transformation numérique des grandes organisations africaines. Inspirée par l'héritage des leaders visionnaires du continent, notre mission est de concevoir, intégrer et sécuriser des solutions numériques à forte valeur ajoutée, allant du cloud et de l'intelligence artificielle au développement d'applications et à la cybersécurité. Nous accompagnons les entreprises dans la modernisation de leurs systèmes, l'optimisation de leurs performances et la montée en compétences de leurs équipes.`
                .split(". ")
                .map((sentence, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      delay: 0.6 + index * 0.2,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {sentence}
                    {index < 2 ? ". " : "."}
                  </motion.span>
                ))}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.p
            className="text-center text-gray-500 text-lg mb-12 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Nous choisissons des outils en fonction de vos enjeux,{" "}
            <span className="text-blue-600 font-semibold">pas l'inverse.</span>
          </motion.p>
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              className="flex gap-16 lg:gap-20"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <motion.div
                  key={i}
                  className="group flex justify-center items-center min-w-[140px] lg:min-w-[180px]"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 lg:h-16 w-auto object-contain transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ delay: 1.6 + (i % partners.length) * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
