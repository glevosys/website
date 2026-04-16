import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import images from "../../assets/pictures";
import { useLanguage } from "../../i18n/LanguageContext";

const cardImages = [
  images.c1,
  images.c2,
  images.c3,
  images.c4,
  images.c5,
  images.c6,
];

type CardSolutionProps = {
  picture: string;
  title: string;
  content?: string[];
  link?: string;
  index: number;
  cta: string;
};

const CardSolution = ({
  picture,
  title,
  content,
  link,
  index,
  cta,
}: CardSolutionProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: index * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col h-full transition-all duration-500 ease-out overflow-hidden"
    >
      <div className="relative h-64 lg:h-72 overflow-hidden">
        <motion.img
          src={picture}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
        </motion.div>
      </div>
      <div className="p-8 lg:p-10 flex flex-col flex-grow">
        <motion.h4
          className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent"
            whileHover={{
              backgroundPosition: ["0% 50%", "100% 50%"],
              transition: { duration: 0.5 },
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {title}
          </motion.span>
        </motion.h4>
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : { width: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
        />
        {content && content.length > 0 && (
          <ul className="space-y-3 mb-10 flex-grow">
            {content.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-start text-gray-600 text-base lg:text-lg leading-relaxed group/item"
              >
                <motion.span
                  className="mr-3 text-blue-500 font-bold text-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  •
                </motion.span>
                <span className="group-hover/item:text-gray-900 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        )}
        {link && (
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
          >
            <motion.a
              href={"#contact"}
              className="inline-flex items-center text-lg font-bold text-gray-900 group/link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative">
                {cta}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.span
                className="ml-3 text-blue-600 text-2xl"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        )}
        {!content && !link && (
          <motion.div
            className="flex items-center justify-center h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
          >
            <motion.div
              className="text-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-6xl">✨</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const OurSolution = () => {
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="solution" className="pb-20 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -right-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 -left-40 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={titleRef}
          className="max-w-5xl mx-auto text-center mb-20"
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isTitleInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
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
              {t.solution.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={titleVariants}
            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t.solution.title}
            </motion.span>
          </motion.h2>
          <motion.div
            className="mx-auto h-1 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isTitleInView
                ? { width: 128, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p
            variants={subtitleVariants}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          >
            {t.solution.subtitle}
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {t.solution.cards.map((card, index) => (
            <CardSolution
              key={index}
              index={index}
              title={card.title}
              picture={cardImages[index]}
              content={card.content}
              link={card.content ? "#" : undefined}
              cta={t.solution.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
