import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import images from "../../assets/pictures";

const Domain = () => {
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
    <section
      id="domaine"
      className="pb-12 md:pb-20 lg:pb-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3] as const,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3] as const,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-12 md:mb-16"
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
              Nos expertises
            </span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
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
              Nos domaines d'activité
            </motion.span>
          </motion.h2>
          <motion.div
            className="mx-auto h-1 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full mb-4"
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
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Une expertise complète pour répondre à tous vos besoins numériques.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <DomainCard
              delay={0.2}
              title="Consulting & Dev/DevSecOps"
              description="Audit, intégration, migration vers GitHub / Azure / CI-CD."
              tags={[
                "Audit Dev/DevSecOps",
                "Migration Cloud",
                "Sécurisation CI/CD",
              ]}
              image={images.d1}
              imagePosition="bottom-right"
              bgColor="bg-[#E8ECF1]"
            />
            <DomainCard
              delay={0.4}
              title="Développement & Intégration"
              description="Conception d'applications et agents IA internes."
              tags={[
                "Outils internes",
                "Agent ChatGPT",
                "Copilot personnalisé",
              ]}
              image={images.d2}
              imagePosition="bottom-full"
              bgColor="bg-[#E8ECF1]"
            />
          </div>
          <div className="lg:col-span-5">
            <DomainCard
              delay={0.6}
              title="Formation & Acculturation IA"
              description="Formations corporate sur DevOps appliquée au développement."
              tags={[
                "Workshops IA + Dev",
                "Formation équipes",
                "Coaching technique",
              ]}
              image={images.d3}
              imagePosition="bottom-full-tall"
              bgColor="bg-[#E8ECF1]"
              isFullHeight
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type DomainCardProps = {
  delay: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imagePosition: "bottom-right" | "bottom-full" | "bottom-full-tall";
  bgColor: string;
  isFullHeight?: boolean;
};

const DomainCard = ({
  delay,
  title,
  description,
  tags,
  image,
  imagePosition,
  bgColor,
  isFullHeight = false,
}: DomainCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className={`${bgColor} rounded-3xl ${
        isFullHeight ? "h-full" : "min-h-[350px] md:min-h-[370px]"
      } flex flex-col overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500`}
    >
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: delay + 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md text-sm md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                custom={i}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 10 }
                }
                transition={{
                  delay: delay + 0.3 + i * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                  transition: { duration: 0.2 },
                }}
                className="bg-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium text-gray-500 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      {imagePosition === "bottom-right" && (
        <motion.div
          className="absolute bottom-0 right-0 w-full h-32 md:h-40 lg:h-44"
          initial={{ opacity: 0, x: 50, scale: 1.1 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 1.1 }
          }
          transition={{ delay: delay + 0.4, duration: 0.8 }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-tl-3xl opacity-80 md:opacity-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      {imagePosition === "bottom-full" && (
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 50, scale: 1.1 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 1.1 }
          }
          transition={{ delay: delay + 0.4, duration: 0.8 }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-40 md:h-48 object-cover rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      {imagePosition === "bottom-full-tall" && (
        <motion.div
          className="flex-grow h-64 md:h-80 lg:h-full mt-auto"
          initial={{ opacity: 0, y: 50, scale: 1.1 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 1.1 }
          }
          transition={{ delay: delay + 0.4, duration: 0.8 }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={{ opacity: 0 }}
      />
      <motion.div
        className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-600/20 rounded-full opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Domain;
