import React, { useContext, useEffect, useState } from "react";
import { DoctorCard } from "./Doctor-card";
import { AppContext } from "@/context/appContext";

const RevelentDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
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
    if (doc.length <= 0) {
        return <div>No relevent doctor found</div>;
    }
    return (
        <>
            {doc.slice(0, 5).map((d, idx) => {
                return <DoctorCard key={idx} {...d} />;
            })}
        </>
    );
};

export default RevelentDoctors;
