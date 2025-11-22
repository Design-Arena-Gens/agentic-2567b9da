"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "start",
  className,
  children
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-4xl text-space-100",
        align === "center" && "text-center",
        align === "start" && "text-right",
        className
      )}
    >
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-space-400"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mt-4 text-3xl font-semibold text-space-50 md:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className={clsx(
            "mt-4 text-base leading-8 text-space-200 md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "ml-auto max-w-3xl"
          )}
        >
          {description}
        </motion.p>
      ) : null}
      {children}
    </div>
  );
}
