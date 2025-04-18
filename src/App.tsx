import { Route, Routes, useLocation } from "react-router-dom";
import { Cursor, Navbar } from "./components";
import { AnimatePresence } from "motion/react";
import { HomePage, ProjectsPage } from "./pages";

export const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
