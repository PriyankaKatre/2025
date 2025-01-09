import { Card, CardContent } from "@/components/ui/card";
import {
    Brain,
    Heart,
    Stethoscope,
    Eye,
    Bone,
    PillIcon as Pills,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const specialties = [
    { icon: Stethoscope, label: "General physician" },
    { icon: Heart, label: "Cardiologist" },
    { icon: Brain, label: "Neurologist" },
    { icon: Eye, label: "Pediatrician" },
    { icon: Bone, label: "Neurologist" },
    { icon: Pills, label: "Gastroenterologist" },
];

export function SpecialtySection() {
    const navigate = useNavigate();
    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Discover by Specialty
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                    Seamlessly navigate our extensive directory of medical
                    practices, specialties, and healthcare providers.
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {specialties.map((specialty, index) => (
                        <Card key={index} className="border-none shadow-none">
                            <CardContent
                                className="flex flex-col items-center p-4"
                                onClick={() => {
                                    window.scrollTo(0, 0),
                                        navigate(`doctors/${specialty.label}`);
                                }}
                            >
                                <div className="h-16 w-16 rounded-full bg-[#6366F1]/10 flex items-center justify-center mb-2">
                                    <specialty.icon className="h-8 w-8 text-[#6366F1]" />
                                </div>
                                <span className="text-sm text-center">
                                    {specialty.label}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
