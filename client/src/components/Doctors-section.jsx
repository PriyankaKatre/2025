import { useNavigate } from "react-router-dom";
import { DoctorCard } from "./Doctor-card";
import { Button } from "./ui/button";
import { doctors } from "@/data/doctorsData";
import { useEffect, useState } from "react";

export function DoctorsSection({ docId, speciality }) {
    const navigate = useNavigate();
    const [doc, setDoc] = useState(doctors);

    useEffect(() => {
        if (docId) {
            setDoc(
                doctors.filter((doctor) => doctor.speciality === speciality)
            );
        }
    }, [docId, speciality, doctors]);

    console.log("docId", docId, speciality, doc);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Leading Doctors to Book
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                    Discover our highly recommended medical experts
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doc.slice(0, 4).map((doctor, index) => (
                        <DoctorCard key={index} {...doctor} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button
                        className="bg-teal-600  hover:bg-teal-500 px-12 py-3 rounded-full mt-10"
                        onClick={() => {
                            scrollTo(0, 0), navigate("/doctors");
                        }}
                    >
                        More
                    </Button>
                </div>
            </div>
        </section>
    );
}
