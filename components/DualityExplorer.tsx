"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const wavePoints = new Array(60).fill(0).map((_, index) => {
  const x = index / 59;
  const amplitude = 0.35;
  const frequency = 4;
  const y = Math.sin(x * Math.PI * frequency) * amplitude;
  return { x, y };
});

type DualityExplorerProps = {
  className?: string;
};

export default function DualityExplorer({ className }: DualityExplorerProps) {
  const dragX = useMotionValue(50);
  const intensity = useTransform(dragX, [0, 100], [0, 1]);
  const waveOpacity = useTransform(intensity, [0, 1], [0.15, 1]);
  const particleOpacity = useTransform(intensity, [0, 1], [1, 0.2]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dragX.set(55);
  }, [dragX]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-space-800 bg-space-900/20 p-8 shadow-[0_30px_80px_-50px_rgba(123,138,255,0.7)] ${className ?? ""}`}
    >
      <div className="flex flex-col gap-4 text-right md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-space-50">
            مستكشف الازدواجية
          </h3>
          <p className="mt-2 text-sm text-space-200">
            حرّك المؤشر لمشاهدة انتقال سلوك الإلكترون من جسيم محلي إلى موجة
            منتشرة.
          </p>
        </div>
        <motion.div
          className="flex items-center gap-3 text-sm text-space-200"
          style={{ opacity: particleOpacity }}
        >
          <span className="inline-block h-3 w-3 rounded-full bg-space-300" />
          سلوك جسيمي
        </motion.div>
      </div>

      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-space-800 bg-space-950/80">
        <motion.div
          drag="x"
          dragConstraints={{ left: 20, right: 220 }}
          dragMomentum={false}
          className="absolute inset-y-6 left-6 flex w-14 cursor-ew-resize flex-col items-center justify-between rounded-full bg-space-800/60 py-4 text-center text-xs font-medium text-space-200 backdrop-blur"
          style={{
            x: dragX,
            boxShadow: "0 10px 50px -20px rgba(123,138,255,0.6)"
          }}
        >
          <span>مراقبة</span>
          <motion.span
            style={{
              opacity: intensity
            }}
          >
            موجة
          </motion.span>
          <motion.span
            style={{
              opacity: useTransform(intensity, [0, 1], [1, 0])
            }}
          >
            جسيم
          </motion.span>
        </motion.div>

        <div className="relative flex h-full w-full items-center justify-center">
          <motion.div
            className="absolute flex h-full w-full items-center justify-center"
            style={{ opacity: particleOpacity }}
          >
            <motion.div
              className="relative h-6 w-6 rounded-full bg-gradient-to-r from-space-300 to-space-500 shadow-[0_0_55px_15px_rgba(123,138,255,0.6)]"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 45px 15px rgba(123,138,255,0.5)",
                  "0 0 60px 25px rgba(123,138,255,0.75)",
                  "0 0 45px 15px rgba(123,138,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.svg
            viewBox="0 0 100 60"
            className="absolute h-[120%] w-[120%]"
            style={{ opacity: waveOpacity }}
          >
            <defs>
              <linearGradient
                id="waveExplorerGradient"
                x1="0%"
                x2="100%"
                y1="50%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#7b8aff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3744db" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <motion.path
              d={wavePoints
                .map((point, index) => {
                  const x = point.x * 100;
                  const y = 50 - point.y * 30;
                  return `${index === 0 ? "M" : "L"} ${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="url(#waveExplorerGradient)"
              strokeWidth="1.8"
              strokeLinecap="round"
              animate={{
                pathLength: [0.6, 1, 0.6]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </div>

      <motion.div
        className="grid gap-6 text-sm text-space-200 md:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="rounded-2xl border border-space-800/60 bg-space-900/40 p-4">
          <p className="font-semibold text-space-100">مؤشر المراقبة</p>
          <p className="mt-2 leading-6">
            كلما زادت دقة القياس، يزداد سلوك الجسيم وضوحاً بينما يتلاشى الشكل
            الموجي.
          </p>
        </div>
        <div className="rounded-2xl border border-space-800/60 bg-space-900/40 p-4">
          <p className="font-semibold text-space-100">عدم اليقين</p>
          <p className="mt-2 leading-6">
            لا يمكن تحديد موضع وسرعة الجسيم بدقة متناهية في الوقت ذاته، وهو ما
            ينعكس في انتشار الموجة.
          </p>
        </div>
        <div className="rounded-2xl border border-space-800/60 bg-space-900/40 p-4">
          <p className="font-semibold text-space-100">التراكب</p>
          <p className="mt-2 leading-6">
            الإلكترون يوجد في حالات متعددة حتى لحظة القياس، ويتحدد مظهره بحسب
            التفاعل مع جهاز الرصد.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
