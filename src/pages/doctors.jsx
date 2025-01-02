import { DoctorCard } from "@/components/Doctor-card";
import { FilterSidebar } from "@/components/input-sidebar";
import { doctors } from "@/data/doctorsData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctors = () => {
    let { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);

    const getFilteredDoctors = () => {
        if (speciality) {
            setFilterDoc(
                doctors.filter((doc) => {
                    return doc.speciality === speciality;
                })
            );
        } else {
            setFilterDoc(doctors);
        }
    };
    useEffect(() => {
        getFilteredDoctors();
    }, [speciality]);
    return (
        <div className="min-h-screen bg-white p-6">
            <h2 className="mb-6 text-lg font-medium">
                Browse through the doctors specialist
            </h2>
            <div className="flex gap-8">
                <FilterSidebar speciality={speciality} />
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                        {filterDoc.map((doctor) => (
                            <DoctorCard key={doctor._id} {...doctor} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
