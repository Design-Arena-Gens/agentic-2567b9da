"use client";

import { motion } from "framer-motion";

const wavePath =
  "M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,122.7C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-16 px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-full border border-space-600 bg-space-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-space-300"
          >
            الفيزياء الكمية
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-4xl font-semibold leading-tight text-space-50 sm:text-5xl md:text-6xl"
          >
            ازدواجية الموجة والجسيم
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-space-200"
          >
            اكتشف كيف تجمع الجسيمات المادية بين الطبيعة الموجية والجسيمية في آنٍ
            واحد، وكيف أطلق هذا الاكتشاف ثورة في فهمنا للعالم المجهري.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="relative mx-auto w-full max-w-4xl rounded-3xl border border-space-800 bg-space-900/40 p-8 shadow-[0_40px_120px_-60px_rgba(83,99,255,0.65)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-space-50">
                عندما يتصرف الإلكترون كموجة وجسيم
              </h2>
              <p className="mt-4 text-sm leading-7 text-space-200">
                أظهرت تجربة الشق المزدوج أن الإلكترونات قادرة على إنشاء نمط
                تداخل موجي، لكن بمجرد مراقبتها تتصرف كجسيمات منفصلة. هذا السلوك
                الثنائي يمثل أحد أعمدة ميكانيكا الكم.
              </p>
            </div>
            <div className="relative flex h-48 flex-1 items-center justify-center">
              <motion.svg
                viewBox="0 0 1440 320"
                className="h-full w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              >
                <defs>
                  <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7b8aff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3744db" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={wavePath}
                  stroke="url(#waveGradient)"
                  strokeWidth="8"
                  fill="none"
                />
              </motion.svg>
              <motion.div
                initial={{ x: "-40%", opacity: 0 }}
                animate={{ x: "40%", opacity: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
                className="absolute h-3 w-3 rounded-full bg-space-50 shadow-[0_0_25px_8px_rgba(123,138,255,0.6)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
