import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";
import Header from "../../components/layout/Header.jsx";
import TopButton from "../../components/layout/TopButton.jsx";

const LayoutPage = () => {

  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
      <TopButton />
    </div>
  );
};

export default LayoutPage;
