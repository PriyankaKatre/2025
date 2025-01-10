import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AppContext } from "@/context/appContext";

const navigation = [
    { name: "HOME", href: "/" },
    { name: "ALL DOCTORS", href: "/doctors" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
];

export function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(AppContext);

    const { token, setToken } = useContext(AppContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center mb-3 justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="DocApp Logo"
                        width="100"
                        height="100"
                        onClick={() => navigate("/")}
                    />
                </div>
                <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveLink(item.href)}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-primary",
                                activeLink === item.href
                                    ? "text-primary after:absolute after:-bottom-[.5rem] after:left-0 after:h-[1px] after:w-full after:bg-primary after:content-['']"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <Link
                        //to="/admin"
                        className="font-medium hover:text-primary hidden md:block"
                    >
                        Admin Panel
                    </Link>

                    {token && userData ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src={userData.image}
                                            alt="Profile"
                                        />
                                        <AvatarFallback>
                                            {userData?.name.slice(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link to="/my-profile">My Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/my-appointments">
                                        My Appointments
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-500 hidden md:block"
                            onClick={() => navigate("/login")}
                        >
                            Create account
                        </Button>
                    )}

                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                    setActiveLink(item.href);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 border-b-2",
                                    activeLink === item.href
                                        ? "bg-gray-100"
                                        : ""
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/admin"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Admin Panel
                        </Link>
                        <Button
                            size="lg"
                            className="w-full bg-teal-600 hover:bg-teal-500 mt-2"
                            onClick={() => {
                                navigate("/login");
                                setIsOpen(false);
                            }}
                        >
                            Create account
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
