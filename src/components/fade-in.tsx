"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut, fadeInUp } from "@/lib/motion";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
