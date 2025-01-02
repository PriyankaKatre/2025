import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
