"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    question: "هل جميع الجسيمات تمتلك خصائص موجية؟",
    answer:
      "كل جسم يحمل كمية من الحركة يمتلك طولاً موجياً مرافقاً، لكن تأثيره يصبح غير ملحوظ للأجسام الكبيرة بسبب صغر الطول الموجي بشكل هائل."
  },
  {
    question: "ما الذي يحدد ظهور النمط الموجي أو الجسيمي؟",
    answer:
      "يعتمد على نوع التجربة والمعلومات التي يمكن الحصول عليها. إذا كان من الممكن معرفة المسار الذي سلكه الجسيم، يظهر السلوك الجسيمي؛ وإلا يظهر نمط تداخل موجي."
  },
  {
    question: "هل يمكن التحكم في ازدواجية الموجة والجسيم؟",
    answer:
      "يمكن التأثير عليها عبر تصميم التجربة وطريقة القياس. بعض التجارب تستخدم أجهزة محو المعلومات لاستعادة التداخل بعد إزالته."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-space-800 bg-space-900/30"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-right text-sm font-medium text-space-100"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <motion.span
                initial={false}
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="text-space-400"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.p
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-6 pb-4 text-sm leading-7 text-space-200"
                >
                  {item.answer}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
