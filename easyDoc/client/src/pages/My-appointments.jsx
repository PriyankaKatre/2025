import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import img1 from "../assets/doctor10.png";
import img2 from "../assets/doctor6.png";
import img3 from "../assets/doctor3.png";
import img4 from "../assets/doctor8.png";
import img5 from "../assets/doctor7.png";

const appointments = [
    {
        id: "1",
        doctor: {
            name: "Dr. Richa Jamre",
            title: "General physician",
            image: img1,
        },
        address: {
            street: "57th Cross, Richmond",
            area: "Church Road",
            city: "London",
        },
        dateTime: "20 Jan, 2025 | 6:30 PM",
        status: "pending",
    },
    {
        id: "2",
        doctor: {
            name: "Dr. Sarah Wilson",
            title: "Dermatologist",
            image: img2,
        },
        address: {
            street: "12th Avenue, Park Street",
            area: "Greenwood",
            city: "New York",
        },
        dateTime: "22 Jan, 2025 | 10:00 AM",
        status: "paid",
    },
    {
        id: "3",
        doctor: {
            name: "Dr. Emily Davis",
            title: "Pediatrician",
            image: img3,
        },
        address: {
            street: "43rd Street, Central Plaza",
            area: "Downtown",
            city: "Chicago",
        },
        dateTime: "25 Jan, 2025 | 3:30 PM",
        status: "pending",
    },
    {
        id: "4",
        doctor: {
            name: "Dr. Michael Brown",
            title: "Orthopedic Surgeon",
            image: img4,
        },
        address: {
            street: "67th Avenue, Hilltop",
            area: "Beacon Hill",
            city: "Seattle",
        },
        dateTime: "28 Jan, 2025 | 1:00 PM",
        status: "paid",
    },
    {
        id: "5",
        doctor: {
            name: "Dr. Sophia Martinez",
            title: "Cardiologist",
            image: img5,
        },
        address: {
            street: "5th Avenue, Healthcare Lane",
            area: "MedCity",
            city: "San Francisco",
        },
        dateTime: "30 Jan, 2025 | 11:00 AM",
        status: "cancel",
    },
];



const AppointmentCard = ({ appointment }) => {
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage
                                src={appointment.doctor.image}
                                alt={appointment.doctor.name}
                            />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h2 className="font-semibold">
                                {appointment.doctor.name}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {appointment.doctor.title}
                            </p>
                            <div className="text-sm text-muted-foreground">
                                <p className="font-medium">Address:</p>
                                <p>{appointment.address.street}</p>
                                <p>
                                    {appointment.address.area},{" "}
                                    {appointment.address.city}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">
                                    Date & Time:
                                </span>{" "}
                                {appointment.dateTime}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            {appointment.status === "cancel" ? (
                                <Button
                                    className="bg-gray-400 cursor-not-allowed"
                                    disabled
                                >
                                    Canceled Appointment
                                </Button>
                            ) : appointment.status === "pending" ? (
                                <>
                                    <Button className="bg-teal-600 hover:bg-teal-500">
                                        Pay here
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-red-200 text-red-600 hover:bg-red-50"
                                    >
                                        Cancel appointment
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="ghost"
                                        className="text-teal-600 hover:text-teal-500"
                                    >
                                        Paid
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-red-200 text-red-600 hover:bg-red-50"
                                    >
                                        Cancel appointment
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const MyAppointments = () => {
    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-xl font-semibold">My Appointments</h1>
            {appointments.length > 0 ? (
                <div className="space-y-4">
                    {appointments.map((appointment) => (
                        <AppointmentCard
                            key={appointment.id}
                            appointment={appointment}
                        />
                    ))}
                </div>
            ) : (
                <p>No appointments found.</p>
            )}
        </div>
    );
};
export default MyAppointments;
