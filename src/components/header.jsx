import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "HOME", href: "/" },
    { name: "ALL DOCTORS", href: "/doctors" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
];

export function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    console.log("active", activeLink);
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center pb-10">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="DocApp Logo"
                        width="100"
                        height="100"
                    />
                </div>
                <nav className="flex flex-1 items-center justify-center space-x-8">
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
                        to="/admin"
                        className="font-medium hover:text-primary"
                    >
                        Admin Panel
                    </Link>
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-600">
                        Create account
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src="/placeholder.svg"
                                        alt="Profile"
                                    />
                                    <AvatarFallback>U</AvatarFallback>
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
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
