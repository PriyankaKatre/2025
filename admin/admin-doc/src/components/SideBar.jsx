import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Calendar, UserPlus, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar({ ...props }) {
  const location = useLocation(); // Get the current location
  const items = [
    {
      title: "Dashboard",
      href: "/admin-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Appointments",
      href: "/all-appointments",
      icon: Calendar,
    },
    {
      title: "Add Doctor",
      href: "/add-doctors",
      icon: UserPlus,
    },
    {
      title: "Doctors List",
      href: "/doctors-list",
      icon: Users,
    },
  ];

  return (
    <nav className={cn("space-y-1 md:border-r bg-background p-3")} {...props}>
      {items.map((item) => {
        // Determine if the current link is active
        const isActive = location.pathname === item.href;

        return (
          <Button
            key={item.href}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 px-2 font-normal hover:bg-accent",
              isActive && "bg-accent text-primary" // Apply active styles
            )}
            asChild
          >
            <Link to={item.href}>
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
