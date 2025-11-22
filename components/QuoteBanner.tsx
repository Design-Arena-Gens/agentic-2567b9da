"use client";

import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-space-800 bg-gradient-to-br from-space-900/80 via-space-800/50 to-space-900/80 p-8 text-center shadow-[0_35px_120px_-70px_rgba(83,99,255,0.8)]"
    >
      <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-space-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-space-400/20 blur-3xl" />
      <blockquote className="relative mx-auto max-w-3xl text-xl leading-9 text-space-100">
        <p>
          &quot;يبدو أن الطبيعة تحب أن تكون خجولة. فعندما نحاول مراقبتها عن كثب،
          تخفي خصائصها الموجية وتبدو كجسيمات، لكن في لحظات أخرى تكشف عن وجهها
          الموجي المدهش.&quot;
        </p>
        <footer className="mt-6 text-sm text-space-300">
          نيلز بور – فيلسوف ميكانيكا الكم
        </footer>
      </blockquote>
    </motion.div>
  );
}
