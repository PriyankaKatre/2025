import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import RevelentDoctors from "./revelentDoctors";

export function BookingCalendar({ doctorInfo }) {
    const daysOfWeek = ["Sun", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");

    const getAvailableSlots = async () => {
        setDocSlots([]);

        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // End Time

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(22, 0, 0, 0);

            // setting hours

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(
                    currentDate.getHours() > 10
                        ? currentDate.getHours() + 1
                        : 10
                );
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                timeSlots.push({
                    dateTime: new Date(currentDate),
                    time: formattedTime,
                });
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setDocSlots((prev) => [...prev, timeSlots]);
        }
    };
    useEffect(() => {
        getAvailableSlots();
    }, [doctorInfo]);

    console.log("doctorInfo", doctorInfo);

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-medium">Booking slots</h2>
            <div className="flex flex-wrap gap-2">
                {docSlots.length &&
                    docSlots.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => setSlotIndex(index)}
                            className={cn(
                                "flex min-w-[4rem] min-h-[4rem] flex-col items-center rounded-lg px-4 py-2 text-sm transition-colors border-2 bg-transparent text-black hover:bg-transparent",
                                slotIndex === index
                                    ? "bg-teal-600 hover:bg-teal-500 text-white"
                                    : ""
                            )}
                        >
                            <p>
                                {item[0] &&
                                    daysOfWeek[item[0].dateTime.getDay()]}
                            </p>
                            <p>{item[0] && item[0].dateTime.getDate()}</p>
                        </Button>
                    ))}
            </div>
            <div className="overflow-x-auto pb-5">
                <div className="flex min-w-max gap-4 ">
                    {docSlots.length &&
                        docSlots[slotIndex].map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    className={cn(
                                        "rounded-full px-4 py-1 text-sm transition-colors border-2 bg-transparent text-black hover:bg-transparent",
                                        slotTime === item.time
                                            ? "bg-teal-600 hover:bg-teal-500 text-white"
                                            : ""
                                    )}
                                    onClick={() => setSlotTime(item.time)}
                                >
                                    {item.time.toLowerCase()}
                                </Button>
                            );
                        })}
                </div>
            </div>
            <Button className=" bg-teal-600 hover:bg-teal-500">
                Book an appointment
            </Button>
            <div className="mt-20">
                <h2 className="text-2xl font-bold text-center mb-4 mt-20">
                    Relevant Specialists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <RevelentDoctors
                        docId={doctorInfo._id}
                        speciality={doctorInfo.speciality}
                    />
                </div>
            </div>
        </div>
    );
}
