// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import Login from "@/pages/Login";
import { Sidebar } from "../components/sideBar";

const MainLayout = () => {
  const { atoken } = useContext(AdminContext);
  return (
    <div className="mx-4 sm:mx-[10%]">
      {atoken ? (
        <>
          <Navbar /> <Sidebar />
        </>
      ) : (
        <Login />
      )}

      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
