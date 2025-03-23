import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar, Cursor } from "./components";
import { HomePage, ProjectsPage } from "./pages";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
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
}

export default App;
