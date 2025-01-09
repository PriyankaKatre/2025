import { AdminContext } from "@/context/AdminContext";
import { useContext } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Nabar = () => {
  const navigate = useNavigate();
  const { atoken, setatoken } = useContext(AdminContext);

  const handleLogout = () => {
    atoken && setatoken("");
    atoken && localStorage.removeItem("atoken");
    navigate("/");
  };

  return (
    <nav className="border-b pb-5">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="DocApp Logo"
              width="100"
              height="100"
              onClick={() => navigate("/")}
            />
          </div>
          <Badge variant="secondary" className="ml-2">
            Admin
          </Badge>
        </div>
        <div className="ml-auto">
          <Button
            variant="default"
            className="bg-teal-600 hover:bg-teal-500"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nabar;
