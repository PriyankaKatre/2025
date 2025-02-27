import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import img1 from '../../assets/doctor10.png'
import img2 from "../../assets/doctor6.png";
import img3 from "../../assets/doctor3.png";
import img4 from '../../assets/doctor8.png'
import img5 from "../../assets/doctor7.png";


const appointments = [
  {
    id: 1,
    patient: {
      name: "Priyanka katre",
      avatar: img1,
    },
    department: "General physician",
    age: 28,
    dateTime: "16th Jan, 2025, 10:AM",
    doctor: {
      name: "Dr. Ritika Jain",
      avatar: img2,
    },
    fees: 50,
  },
  {
    id: 2,
    patient: {
      name: "Rohit Mehata",
      avatar: img4,
    },
    department: "Cardiologist",
    age: 28,
    dateTime: "15th Jan, 2025, 10:AM",
    doctor: {
      name: "Dr. Lisa sam",
      avatar: img3,
    },
    fees: 50,
  },
  {
    id: 3,
    patient: {
      name: "Richa Kawle",
      avatar: img5,
    },
    department: "General physician",
    age: 28,
    dateTime: "16th Jan, 2025, 10:AM",
    doctor: {
      name: "Dr. Ritika Jain",
      avatar: img2,
    },
    fees: 50,
  },
  {
    id: 4,
    patient: {
      name: "Reema Valdev",
      avatar: img2,
    },
    department: "General physician",
    age: 28,
    dateTime: "16th Jan, 2025, 10:AM",
    doctor: {
      name: "Dr. Ritika Jain",
      avatar: img3,
    },
    fees: 50,
  },
  {
    id: 5,
    patient: {
      name: "Namita Verma",
      avatar: img3,
    },
    department: "General physician",
    age: 28,
    dateTime: "16th Jan, 2025, 10:AM",
    doctor: {
      name: "Dr. Ritika Jain",
      avatar: img5,
    },
    fees: 50,
  },
];

export default function AllAppointments() {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-semibold mb-6">All Appointments</h2>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="text-black font-bold">
              <TableHead className="w-16 text-black font-bold">#</TableHead>
              <TableHead className="text-black font-bold">Patient</TableHead>
              <TableHead className="text-black font-bold">Department</TableHead>
              <TableHead className="text-black font-bold">Age</TableHead>
              <TableHead className="text-black font-bold">
                Date & Time
              </TableHead>
              <TableHead className="text-black font-bold">Doctor</TableHead>
              <TableHead className="text-black font-bold">Fees</TableHead>
              <TableHead className="w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={appointment.patient.avatar}
                        alt={appointment.patient.name}
                      />
                      <AvatarFallback>
                        {appointment.patient.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{appointment.patient.name}</span>
                  </div>
                </TableCell>
                <TableCell>{appointment.department}</TableCell>
                <TableCell>{appointment.age}</TableCell>
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={appointment.doctor.avatar}
                        alt={appointment.doctor.name}
                      />
                      <AvatarFallback>
                        {appointment.doctor.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{appointment.doctor.name}</span>
                  </div>
                </TableCell>
                <TableCell>${appointment.fees}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

