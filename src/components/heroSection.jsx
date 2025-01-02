
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import doctorsGroup1 from '../assets/doctors-group1.svg'

export function HeroSection() {
    return (
        <div className="relative bg-teal-500 py-24 lg:py-32 mt-5">
            <div className="container grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-8 pl-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Secure Your Appointment with
                            <br />
                            Leading Healthcare Professionals
                        </h1>
                    </div>
                    <div>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-gray-100 hover:bg-gray-100"
                        >
                            Book appointment →
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block absolute bottom-0 right-8">
                    <img
                        src={doctorsGroup1}
                        alt="Medical professionals"
                        className="aspect-square rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
