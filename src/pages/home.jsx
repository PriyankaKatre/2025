

import { DoctorsSection } from "@/components/Doctors-section";
import { HeroSection } from "@/components/HeroSection";
import { SpecialtySection } from "@/components/Specialty-section";

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
                <HeroSection/>
                <SpecialtySection />
                <DoctorsSection />
            </main>
        </div>
    );
}
