import { DoctorCard } from "@/components/Doctor-card";
import { FilterSidebar } from "@/components/input-sidebar";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/appContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctors = () => {
    const { doctors } = useContext(AppContext);
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    const getFilteredDoctors = () => {
        if (doctors) {
            if (speciality) {
                setFilterDoc(
                    doctors.filter((doc) => doc.speciality === speciality)
                );
            } else {
                setFilterDoc(doctors);
            }
        } else {
            setFilterDoc([]);
        }
    };

    useEffect(() => {
        console.log("Doctors:", doctors);
        console.log("Speciality:", speciality);

        if (Array.isArray(doctors) && doctors.length > 0) {
            getFilteredDoctors();
        } else {
            console.log("Doctors list is empty or not loaded yet.");
        }
    }, [speciality, doctors]);

    return (
        <div className="min-h-screen bg-white p-6">
            <h2 className="mb-6 text-lg font-medium">
                Browse through the doctors specialist
            </h2>
            <div className="md:flex gap-8">
                <Button
                    className="md:hidden hover:bg-teal-600 mb-5 hover:text-white"
                    onClick={() => setShowFilter(!showFilter)}
                    variant="outline"
                >
                    Filter
                </Button>
                <div
                    className={`md:block ${
                        showFilter ? "flex mb-5" : "hidden"
                    }`}
                >
                    <FilterSidebar speciality={speciality} />
                </div>
                <div className="flex-1">
                    {filterDoc.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3">
                            {filterDoc.map((doctor) => (
                                <DoctorCard key={doctor._id} {...doctor} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">
                            No doctors found for this speciality.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
