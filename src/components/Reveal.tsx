import { motion } from "framer-motion";
import type { ReactNode } from "react";

const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) => (
  <p
    className={`text-[13px] font-semibold uppercase tracking-[1px] mb-3 ${
      dark ? "text-[#FFD27A]" : "text-[#0015CC]"
    }`}
  >
    {children}
  </p>
);

export default Reveal;
