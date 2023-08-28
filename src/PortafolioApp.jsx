import { AppLayout } from "./layout/AppLayout";
import {
  AboutMePage,
  ContactPage,
  HabilidadesPage,
  HomePage,
  ProjectsPage,
} from "./pages";

export const PortafolioApp = () => {
  return (
    <AppLayout>
      <HomePage />
      {/* <AboutMePage/> */}
      <HabilidadesPage />
      {/* <ProjectsPage/> */}
      <ContactPage />
    </AppLayout>
  );
};
