import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const days = [
    { day: "MON", date: "10", isActive: true },
    { day: "TUE", date: "11" },
    { day: "WED", date: "12" },
    { day: "THU", date: "13" },
    { day: "FRI", date: "14" },
    { day: "SAT", date: "15" },
    { day: "SUN", date: "16" },
];

const timeSlots = [
    { time: "8:00 am" },
    { time: "8:30 am" },
    { time: "9:00 am", isActive: true },
    { time: "9:30 am" },
    { time: "10:00 am" },
    { time: "10:30 am" },
    { time: "11:00 am" },
    { time: "11:30 am" },
];

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
            endTime.setHours(21, 0, 0, 0);

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

    useEffect(() => {
        console.log("docSlots", docSlots);
    }, [doctorInfo]);

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-medium">Booking slots</h2>
            {/* <div className="flex gap-2 overflow-x-auto pb-2">
                {days.map(({ day, date, isActive }) => (
                    <button
                        key={day}
                        className={cn(
                            "flex min-w-[4rem] flex-col items-center rounded-lg px-4 py-2 text-sm transition-colors",
                            isActive
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-100"
                        )}
                    >
                        <span className="font-medium">{day}</span>
                        <span>{date}</span>
                    </button>
                ))}
            </div> */}
            <div className="flex flex-wrap gap-2">
                {/* {timeSlots.map(({ time, isActive }) => (
                    <button
                        key={time}
                        className={cn(
                            "rounded-full px-4 py-1 text-sm transition-colors",
                            isActive
                                ? "bg-blue-500 text-white"
                                : "border hover:bg-gray-100"
                        )}
                    >
                        {time}
                    </button>
                ))} */}

                {docSlots.length &&
                    docSlots.map((item, index) => (
                        <>
                            <div>
                                <button
                                    key={index}
                                    onClick={() => setSlotIndex(index)}
                                    className={cn(
                                        "flex min-w-[4rem] flex-col items-center rounded-lg px-4 py-2 text-sm transition-colors",
                                        slotIndex === index ? "bg-teal-600" : ""
                                    )}
                                >
                                    <p>
                                        {item[0] &&
                                            daysOfWeek[
                                                item[0].dateTime.getDay()
                                            ]}
                                    </p>
                                    <p>
                                        {item[0] && item[0].dateTime.getDate()}
                                    </p>
                                </button>
                            </div>
                        </>
                    ))}

                {/* <div className="overflow-x-auto scrollbar-hide px-8">
                    <div className="flex min-w-max gap-4 py-2">
                        {docSlots.length &&
                            docSlots[slotIndex].map((time, index) => (
                                <button
                                    key={time}
                                    className="rounded-full border px-4 py-1 text-sm hover:bg-gray-100"
                                >
                                    {time}
                                </button>
                            ))}
                    </div>
                </div> */}
                <div className="overflow-x-auto scrollbar-hide px-8">
                    <div className="flex min-w-max gap-4 py-2">
                        {console.log(
                            "docSlots[slotIndex]",
                            docSlots[slotIndex]
                        )}
                        {docSlots.length &&
                            docSlots[slotIndex].map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={cn(
                                            "rounded-full px-4 py-1 text-sm transition-colors "
                                        )}
                                    >
                                        {item.time.toLowerCase()}
                                    </button>
                                );
                            })}
                    </div>
                </div>
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Book an appointment
            </Button>
        </div>
    );
}
