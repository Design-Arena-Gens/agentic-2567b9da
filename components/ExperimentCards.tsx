"use client";

import { motion } from "framer-motion";

const experiments = [
  {
    name: "تجربة الشق المزدوج",
    outcome:
      "إطلاق إلكترونات واحدة تلو الأخرى ما زال ينتج نمط تداخل موجي، مما يدل على أن كل إلكترون يتداخل مع نفسه.",
    insight:
      "غياب المراقبة يحافظ على التراكب الموجي، بينما القياس يجبر الإلكترون على اختيار مسار محدد.",
    gradient: "from-space-500/40 to-space-800/20"
  },
  {
    name: "الظاهرة الكهروضوئية",
    outcome:
      "ضوء بالتردد المناسب يحرر إلكترونات من سطح معدني فوراً، وهو ما لا تفسره الفيزياء الكلاسيكية الموجية.",
    insight:
      "الطاقة تنتقل على شكل كمات منفصلة (فوتونات)، وكل فوتون ينقل طاقة محددة تعتمد على تردده.",
    gradient: "from-purple-500/30 to-space-900/20"
  },
  {
    name: "حيود الإلكترونات",
    outcome:
      "الإلكترونات المنعكسة عن البلورات المنتظمة تنتج أنماطاً مشابهة لانعكاس الأمواج، ما يحدد طولها الموجي.",
    insight:
      "اختبرت التجربة فرضية دي برولي عملياً، مؤكدة أن الجسيمات المادية لها موجات مرافقة.",
    gradient: "from-blue-500/30 to-space-900/20"
  }
];

export default function ExperimentCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {experiments.map((experiment, index) => (
        <motion.div
          key={experiment.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-space-800 bg-space-950/40 p-6 shadow-[0_30px_100px_-70px_rgba(83,99,255,0.7)]"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${experiment.gradient} opacity-60`}
          />
          <div className="relative">
            <h3 className="text-lg font-semibold text-space-50">
              {experiment.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-space-200">
              {experiment.outcome}
            </p>
            <div className="mt-6 rounded-2xl border border-space-700 bg-space-900/40 p-4 text-sm text-space-100">
              <span className="text-space-300">الدلالة:</span> {experiment.insight}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
