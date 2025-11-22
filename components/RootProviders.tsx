"use client";

import { ReactNode } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </MotionConfig>
  );
}
