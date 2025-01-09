import { DoctorProfile } from "@/components/doctor-profile";
import RevelentDoctors from "@/components/revelentDoctors";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Appointments = () => {
    const { docId } = useParams();
    const { doctors } = useContext(AppContext);

    const filterDoc = doctors.filter((doc) => doc._id === docId);
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto space-y-8 px-4 py-8">
                <DoctorProfile />
                {/* <RevelentDoctors
                    speciality={filterDoc.speciality}
                    docId={docId}
                /> */}
            </div>
        </div>
    );
};

export default Appointments;
