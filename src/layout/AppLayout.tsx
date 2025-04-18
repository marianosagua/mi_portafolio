import { ReactNode } from "react";
import { Cursor, Footer, Navbar } from "@/components";
import { AnimatePresence } from "motion/react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <Footer />
    </div>
  );
};
