import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const appointments = [
    {
        id: "1",
        doctor: {
            name: "Dr. Richard James",
            title: "General physician",
            image: "/placeholder.svg",
        },
        address: {
            street: "57th Cross, Richmond",
            area: "Church Road",
            city: "London",
        },
        dateTime: "20 July, 2024 | 6:30 PM",
        status: "pending",
    },
    {
        id: "2",
        doctor: {
            name: "Dr. Richard James",
            title: "General physician",
            image: "/placeholder.svg",
        },
        address: {
            street: "57th Cross, Richmond",
            area: "Church Road",
            city: "London",
        },
        dateTime: "20 July, 2024 | 6:30 PM",
        status: "pending",
    },
    {
        id: "3",
        doctor: {
            name: "Dr. Richard James",
            title: "General physician",
            image: "/placeholder.svg",
        },
        address: {
            street: "57th Cross, Richmond",
            area: "Church Road",
            city: "London",
        },
        dateTime: "20 July, 2024 | 6:30 PM",
        status: "paid",
    },
];

const MyAppointments = () => {
    return (
        <div className="container mx-auto p-4 space-y-6">
            <h1 className="text-xl font-semibold">My Appointments</h1>
            <div className="space-y-4">
                {appointments.map((appointment) => (
                    <AppointmentCard
                        key={appointment.id}
                        appointment={appointment}
                    />
                ))}
            </div>
        </div>
    );
};

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
                        {appointment.status === "pending" ? (
                            <Button className="bg-teal-600 hover:bg-teal-500">
                                Pay here
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                className="text-teal-600 hover:text-teal-500"
                            >
                                Paid
                            </Button>
                        )}
                        <Button
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                            Cancel appointment
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MyAppointments;
