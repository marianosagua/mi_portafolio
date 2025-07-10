import { ReactNode } from "react";
import { Footer } from "@/components";
import { AnimatePresence } from "motion/react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <Footer />
    </div>
  );
};
