import { AppLayout } from "@/layout/AppLayout";
import { HomePage, ProyectosPage } from "@/pages";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </AppLayout>
  );
};
