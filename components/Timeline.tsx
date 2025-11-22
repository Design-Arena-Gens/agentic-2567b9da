"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "1801",
    title: "تجربة توماس يونغ",
    description:
      "أثبت يونغ الطبيعة الموجية للضوء عبر تجربة الشق المزدوج التي أظهرت نمط التداخل."
  },
  {
    year: "1905",
    title: "تفسير آينشتاين للظاهرة الكهروضوئية",
    description:
      "قدم آينشتاين مفهوم الفوتون، موضحاً أن الضوء يمكن أن يتصرف كجسيم يحمل طاقة محددة."
  },
  {
    year: "1923",
    title: "فرضية دي برولي",
    description:
      "اقترح لويس دي برولي أن الجسيمات المادية تمتلك خصائص موجية بطول موجي مرتبط بكمية حركتها."
  },
  {
    year: "1927",
    title: "تجربة دافيسون-غيرمر",
    description:
      "تم رصد نمط تداخل للإلكترونات المنعكسة عن بلورة النيكل، مؤكداً أن للإلكترونات خصائص موجية."
  },
  {
    year: "1961",
    title: "جسيمات أكبر في الشق المزدوج",
    description:
      "أظهر كلاوس يونغ أن جزيئات أكبر من الإلكترونات، مثل الذرات والجزيئات، تمتلك سلوكاً موجياً."
  },
  {
    year: "2000s",
    title: "تراكب الجزيئات الضخمة",
    description:
      "تجارب حديثة أثبتت أن الجزيئات الضخمة مثل الفوليرينات يمكن أن تظهر تراكباً كمياً واضحاً."
  }
];

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute inset-y-0 right-[calc(50%-1px)] hidden w-[2px] bg-gradient-to-b from-space-600 via-space-800 to-transparent md:block" />
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="relative flex flex-col gap-6 md:flex-row md:items-center"
          >
            <div className="md:w-1/2 md:text-left md:pr-10">
              <div className="flex justify-end md:justify-start">
                <span className="rounded-full border border-space-700 bg-space-900 px-6 py-2 text-sm font-semibold text-space-200">
                  {milestone.year}
                </span>
              </div>
            </div>
            <div className="relative md:w-1/2 md:pl-10">
              <div className="rounded-3xl border border-space-800 bg-space-900/30 p-6 shadow-[0_30px_80px_-60px_rgba(83,99,255,0.8)]">
                <h4 className="text-xl font-semibold text-space-50">
                  {milestone.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-space-200">
                  {milestone.description}
                </p>
              </div>
              <span className="absolute -right-4 top-8 hidden h-3 w-3 rounded-full border border-space-700 bg-space-950 md:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
