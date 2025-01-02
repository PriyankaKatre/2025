import { DoctorCard } from "./doctor-card";
import doctor1 from '../assets/doctor1.png';
import doctor6 from "../assets/doctor6.png";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor4.png";

const doctors = [
    {
        name: "Dr. Richard James",
        specialty: "General physician",
        imageUrl: doctor1,
    },
    {
        name: "Dr. Emily Larson",
        specialty: "Gynecologist",
        imageUrl: doctor4,
    },
    {
        name: "Dr. Sarah Patel",
        specialty: "Dermatologist",
        imageUrl: doctor3,
    },
    {
        name: "Dr. Christopher Lee",
        specialty: "Pediatrician",
        imageUrl: doctor6,
    },
    // Add more doctors as needed
];

export function DoctorsSection() {
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
                    {doctors.map((doctor, index) => (
                        <DoctorCard key={index} {...doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
}
