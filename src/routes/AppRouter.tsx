import { AppLayout } from "@/layout/AppLayout";
import { HomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppLayout>
  );
};
