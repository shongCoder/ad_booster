import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";
import Header from "../../components/layout/Header.jsx";
import TopButton from "../../components/layout/TopButton.jsx";
import ModalComponent from "../../components/common/ModalComponent.jsx";

const LayoutPage = () => {

  return (
    <div>
      <Header />

        <ModalComponent />

      <Outlet />

      <Footer />

      <div className="md:block hidden">
          <TopButton />
      </div>

    </div>
  );
};

export default LayoutPage;
