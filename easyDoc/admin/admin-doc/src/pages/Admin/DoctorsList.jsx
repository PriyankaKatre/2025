import Toast from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AdminContext } from "@/context/AdminContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const DoctorsList = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { atoken } = useContext(AdminContext);
  const [toast, setToast] = useState({ type: "", message: "" });

  const getAllDoctorsList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors`, {
        headers: {
          atoken,
        },
      });
      setDoctorsList(data.doctors);
      console.log("data.DoctorsList", data.doctors);
    } catch (err) {
      console.log("error while fetching all the doctors data");
    } finally {
      setLoading(false);
    }
  };

  const changeDoctorsAvailability = async (docId) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/chanage-availability`,
        { docId },
        {
          headers: {
            atoken,
          },
        }
      );
        if (data.success) {
          setToast({
            type: data?.success ? "success" : "error",
            message: data?.message,
          });
          getAllDoctorsList();
        }

    } catch (err) {
      console.log("error while fetching all the doctors data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllDoctorsList();
  }, []);
  if (loading) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="p-4">
      {toast.message && <Toast type={toast.type} message={toast.message} />}
      <h1 className="text-2xl font-bold mb-6">All Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {doctorsList.length > 0 &&
          doctorsList.map((doctor, index) => (
            <Card key={doctor.name} className={"overflow-hidden"}>
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name}'s profile picture`}
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h2 className={`font-semibold text-lg `}>{doctor.name}</h2>
                  <p
                    className={`text-sm ${
                      index === 0 ? "text-white/90" : "text-muted-foreground"
                    }`}
                  >
                    {doctor.speciality}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <Input
                      onChange={() => changeDoctorsAvailability(doctor._id)}
                      type="checkbox"
                      checked={doctor.available}
                      className="p-0 w-4"
                    />
                    <p className="">Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DoctorsList;
