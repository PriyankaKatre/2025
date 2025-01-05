
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Calendar, UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar({ className, ...props }) {
  const items = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Appointments",
      href: "/appointments",
      icon: Calendar,
    },
    {
      title: "Add Doctor",
      href: "/add-doctor",
      icon: UserPlus,
    },
    {
      title: "Doctors List",
      href: "/doctors",
      icon: Users,
    },
  ];

  return (
    <nav
      className={cn(
        "flex flex-col space-y-1 min-h-screen w-64 border-r bg-background p-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className="w-full justify-start gap-2 px-2 font-normal hover:bg-accent"
          asChild
        >
          <Link href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
