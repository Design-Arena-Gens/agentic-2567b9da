"use client";

import { motion } from "framer-motion";

const concepts = [
  {
    title: "كمية الحركة والطول الموجي",
    description:
      "يعتمد طول الموجة المرتبط بالجسيم على كمية حركته وفق علاقة دي برولي: λ = h / p."
  },
  {
    title: "تراكب الحالات",
    description:
      "يمكن للجسيم أن يوجد في عدة حالات محتملة في وقت واحد إلى أن يتم رصده أو قياسه."
  },
  {
    title: "مبدأ بور التكاملي",
    description:
      "لا تتعارض الطبيعتان الموجية والجسيمية، بل تكمل كل منهما الأخرى بحسب نوع التجربة."
  },
  {
    title: "دور الراصد",
    description:
      "عملية القياس تغير النظام الكمّي وتدفعه لاختيار حالة محددة من بين الحالات الممكنة."
  },
  {
    title: "التداخل الكمي",
    description:
      "نماذج التداخل تظهر فقط عندما لا يمكن معرفة المسار الذي سلكه الجسيم بالتحديد."
  },
  {
    title: "ازدواجية الضوء والمادة",
    description:
      "كما يتصرف الضوء كجسيمات، تمتلك المادة خواصاً موجية، مما يوحّد فهمنا للطبيعة."
  }
];

export default function ConceptGrid() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
    >
      {concepts.map((concept) => (
        <motion.article
          key={concept.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-space-800 bg-space-900/30 p-6 shadow-[0_20px_80px_-60px_rgba(83,99,255,0.5)]"
        >
          <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-gradient-to-br from-space-500/30 to-transparent blur-2xl" />
          <h3 className="text-lg font-semibold text-space-50">
            {concept.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-space-200">
            {concept.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
