import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="mx-4 sm:mx-[10%]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
