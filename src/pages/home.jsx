

import { DoctorsSection } from "@/components/doctors-section";
import { HeroSection } from "@/components/heroSection";
import { SpecialtySection } from "@/components/specialty-section";


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
