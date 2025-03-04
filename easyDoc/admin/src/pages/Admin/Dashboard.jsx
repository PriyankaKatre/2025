import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Users, FolderKanban, User, X } from 'lucide-react'

import img1 from "../../assets/doctor10.png";
import img2 from "../../assets/doctor6.png";
import img3 from "../../assets/doctor9.png";
import img4 from "../../assets/doctor8.png";
import img5 from "../../assets/doctor7.png";


const appointments = [
  {
    id: 1,
    doctor: {
      name: "Dr. Lisa Sam",
      avatar: img1,
    },
    bookingDate: "24th Jan, 2025",
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Richa Sharma",
      avatar: img2,
    },
    bookingDate: "16th Jan, 2025",
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Sara Lamba",
      avatar: img3,
    },
    bookingDate: "15th Jan, 2025",
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Mohit Sharma",
      avatar: img4,
    },
    bookingDate: "21th Jan, 2025",
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Keshav Sen",
      avatar: img5,
    },
    bookingDate: "19th Jan, 2025",
  },
];

export default function DashboardStats() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 bg-teal-400 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm text-muted-foreground">Doctors</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 bg-teal-400 rounded-lg">
              <FolderKanban className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-muted-foreground">Appointments</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-2 bg-teal-400 rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Patients</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <FolderKanban className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg font-semibold">Latest Appointment</h2>
          </div>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={appointment.doctor.avatar}
                      alt={appointment.doctor.name}
                    />
                    <AvatarFallback>
                      {appointment.doctor.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{appointment.doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Booking on {appointment.bookingDate}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

