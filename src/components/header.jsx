import {  Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.svg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="DocApp Logo"
                        width="100"
                        height="100"
                    />
                </div>
                <nav className="flex flex-1 items-center justify-center space-x-8">
                    <Link className="font-medium hover:text-primary" to="/">
                        HOME
                    </Link>
                    <Link
                        className="font-medium hover:text-primary"
                        to="/doctors"
                    >
                        ALL DOCTORS
                    </Link>
                    <Link
                        className="font-medium hover:text-primary"
                        to="/about"
                    >
                        ABOUT
                    </Link>
                    <Link
                        className="font-medium hover:text-primary"
                        to="/contact"
                    >
                        CONTACT
                    </Link>
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
                                <Link to="/my-appointments">My Appointments</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
