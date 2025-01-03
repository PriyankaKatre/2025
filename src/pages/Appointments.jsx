import { BookingCalendar } from "@/components/booking-calander";
import { DoctorProfile } from "@/components/doctor-profile";
import { useParams } from "react-router-dom";

const Appointments = () => {
  
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto space-y-8 px-4 py-8">
                <DoctorProfile />
                
                {/* <RelatedDoctors /> */}
            </div>
        </div>
    );
};

export default Appointments;
