import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="pb-12 md:pb-20 lg:pb-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm font-semibold text-blue-700">
                Contactez-nous
              </span>
            </motion.div>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {`Contactez-nous `.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                >
                  {word === "maintenant" ? (
                    <span className="font-bold">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
              pour discuter de vos besoins en transformation numérique et
              découvrir comment{" "}
              <motion.span
                className="text-[#0015CC] font-semibold inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Glevosys
              </motion.span>{" "}
              peut vous accompagner.
            </motion.h2>
            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-transparent rounded-full mx-auto lg:mx-0"
              initial={{ width: 0, opacity: 0 }}
              animate={
                isInView ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.div
              className="mt-12 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { icon: "📧", label: "Email", value: "contact@glevosys.com" },
                { icon: "📱", label: "Téléphone", value: "+237 6XX XXX XXX" },
                {
                  icon: "📍",
                  label: "Localisation",
                  value: "Yaoundé, Cameroun",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.form
            className="space-y-6 w-full"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <label className="text-sm md:text-base font-bold text-gray-900">
                  Votre nom<span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  placeholder="Insérer votre nom complet"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-gray-400 text-sm md:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <label className="text-sm md:text-base font-bold text-gray-900">
                  Votre entreprise<span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  placeholder="Orange, MTN, ..."
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-gray-400 text-sm md:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-bold text-gray-900">
                Votre Email<span className="text-red-500">*</span>
              </label>
              <motion.input
                type="email"
                placeholder="xxxxxxxxx@xxx.xxx"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-gray-400 text-sm md:text-base"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-bold text-gray-900">
                Sur quoi souhaitez-vous travailler en priorité ?
                <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <motion.select
                  className="w-full appearance-none bg-[#4F5ED3] text-white px-6 py-4 rounded-full font-medium cursor-pointer outline-none hover:bg-[#4351BD] transition-colors pr-12 text-sm md:text-base"
                  required
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <option value="" className="text-gray-200">
                    Veillez renseigner le service en particulier
                  </option>
                  <option value="web">Développement Web/App</option>
                  <option value="ia">Intelligence artificielle</option>
                  <option value="secu">Sécurité informatique</option>
                </motion.select>
                <motion.div
                  className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-bold text-gray-900">
                Un mot pour nous en dire plus ?{" "}
                <span className="font-normal text-gray-500">(optionnel)</span>
              </label>
              <motion.textarea
                rows={4}
                placeholder="Décrivez brièvement votre contexte ou votre idée..."
                className="w-full px-6 py-4 rounded-2xl md:rounded-3xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-gray-400 resize-none text-sm md:text-base"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-end pt-2"
            >
              <motion.button
                type="submit"
                className="w-full md:w-auto bg-[#0015CC] text-white font-bold px-10 py-4 rounded-full shadow-lg relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 21, 204, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  initial={{ x: 0 }}
                >
                  Entrer en contact
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
