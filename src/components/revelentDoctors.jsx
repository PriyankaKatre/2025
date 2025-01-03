import React, { useEffect, useState } from "react";
import { doctors } from "@/data/doctorsData";
import { DoctorCard } from "./Doctor-card";

const RevelentDoctors = ({ speciality, docId }) => {
    const [doc, setDoc] = useState(doctors);

    useEffect(() => {
        if (docId) {
            setDoc(
                doctors.filter(
                    (doctor) =>
                        doctor.speciality === speciality && doctor._id !== docId
                )
            );
        }
    }, [docId, speciality, doctors]);

    console.log("docId", docId, speciality, doc);
    return (
        <>
            {doc.slice(0, 5).map((d, idx) => {
                return <DoctorCard key={idx} {...d} />;
            })}
        </>
    );
};

export default RevelentDoctors;
