import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookingCalendar } from "./booking-calander";
import { AppContext } from "@/context/appContext";

export function DoctorProfile() {
    const { doctors } = useContext(AppContext);
    let [doctorInfo, setDoctorInfo] = useState({});
    let { docId } = useParams();
    const filterDoc = () => {
        setDoctorInfo(
            doctors.find((doc) => {
                return doc._id === docId;
            })
        );
    };
    useEffect(() => {
        filterDoc();
    }, [docId, doctors]);

    return (
        doctorInfo && (
            <>
                <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="h-64 w-64 overflow-hidden rounded-xl  shadow-[4px_4px_14px_rgba(0,0,0,0.3)]">
                                <img
                                    src={doctorInfo.image}
                                    alt={doctorInfo.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div className="flex-1 space-y-4 border-2 p-5">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-xl font-semibold">
                                            {doctorInfo.name}
                                        </h1>
                                        <CheckCircle className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>
                                            {doctorInfo.degree} -
                                            {doctorInfo.speciality}
                                        </span>
                                        <Badge variant="secondary">
                                            Exp {doctorInfo.experience} Y
                                        </Badge>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">
                                            About
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {doctorInfo.about}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">
                                        Appointment fee:
                                    </span>
                                    <span className="text-sm">
                                        £{doctorInfo.fees}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-5 gap-4">
                    <div className=" p-4 col-span-1"></div>
                    <div className=" p-4 col-span-4">
                        <BookingCalendar doctorInfo={doctorInfo} />
                    </div>
                </div>
            </>
        )
    );
}
