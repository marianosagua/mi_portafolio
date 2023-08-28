import { Footer, Menu } from "../components";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};
