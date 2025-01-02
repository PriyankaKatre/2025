import {  Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.svg'

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
                </div>
            </div>
        </header>
    );
}
