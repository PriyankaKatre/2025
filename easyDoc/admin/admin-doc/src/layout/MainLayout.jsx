import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AdminContext } from "@/context/AdminContext";
import Login from "@/pages/Login";
import { Sidebar } from "../components/sideBar";
import { Button } from "@/components/ui/button";

const MainLayout = () => {
  const { atoken } = useContext(AdminContext);
  const [showFilter, setShowFilter] = useState(false);
  console.log("showFilter", showFilter);
  return (
    <div className="mx-4 sm:mx-[10%] pt-5">
      {atoken ? (
        <>
          <Navbar />
          <div className="md:flex mt-12 md:mt-0">
            <Button
              className="md:hidden hover:bg-teal-600 mb-5 hover:text-white"
              onClick={() => setShowFilter(!showFilter)}
              variant="outline"
            >
              Filter
            </Button>
            <div
              className={` md:flex md:w-1/6 ${
                showFilter ? "block mb-5" : "hidden"
              }`}
            >
              <Sidebar />
            </div>

            <div className="w-5/6 p-4">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default MainLayout;
