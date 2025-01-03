import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const FilterSidebar = ({ speciality }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full md:w-48 space-y-2 cursor-pointer">
            <p
                onClick={() => {
                    return speciality === "General physician"
                        ? navigate("/doctors")
                        : navigate("/doctors/General physician");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "General physician"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                General physician
            </p>
            <p
                onClick={() => {
                    return speciality === "Cardiologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Cardiologist");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Cardiologist"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Cardiologist
            </p>
            <p
                onClick={() => {
                    return speciality === "Dermatologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Dermatologist");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Dermatologist"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Dermatologist
            </p>
            <p
                onClick={() => {
                    return speciality === "Pediatrician"
                        ? navigate("/doctors")
                        : navigate("/doctors/Pediatrician");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Pediatrician"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Pediatrician
            </p>
            <p
                onClick={() => {
                    return speciality === "Orthopedic Surgeon"
                        ? navigate("/doctors")
                        : navigate("/doctors/Orthopedic Surgeon");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Orthopedic Surgeon"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Orthopedic Surgeon
            </p>
            <p
                onClick={() => {
                    return speciality === "Neurologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Neurologist");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Neurologist"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Neurologist
            </p>
            <p
                onClick={() => {
                    return speciality === "Endocrinologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Endocrinologist");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Endocrinologist"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Endocrinologist
            </p>
            <p
                onClick={() => {
                    return speciality === "Gastroenterologist"
                        ? navigate("/doctors")
                        : navigate("/doctors/Gastroenterologist");
                }}
                className={`text-sm border-2 p-1 rounded text-center ${
                    speciality === "Gastroenterologist"
                        ? "bg-indigo-100 tex-black"
                        : ""
                }`}
            >
                Gastroenterologist
            </p>
        </div>
    );
};
