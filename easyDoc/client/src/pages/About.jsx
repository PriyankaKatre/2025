import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "../assets/aboutImage.jpg";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">ABOUT US</h1>
            </div>

            {/* Hero Section */}
            <div className="grid md:grid-cols-7 gap-8 ">
                <div className="relative aspect-[4/3] col-span-3">
                    <img
                        src={aboutImage}
                        alt="Healthcare Professionals"
                        className="rounded-lg object-cover"
                        width={500}
                        height={400}
                    />
                </div>
                <div className="space-y-6 col-span-4">
                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            Welcome to EasyDoc, your reliable partner for
                            managing your healthcare needs easily and
                            efficiently. We know how tough it can be to schedule
                            doctor appointments and keep track of health
                            records..
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            At EasyDoc, we are dedicated to providing top-notch
                            healthcare technology. We constantly work to improve
                            our platform, making the latest advancements simple
                            to use for a better experience and excellent
                            service. Whether you're booking your first
                            appointment or managing ongoing care, Press@Us is
                            here to help you every step of the way..
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Our Vision</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our vision at EasyDoc is to create a smooth
                            healthcare experience for everyone. We aim to
                            connect patients and healthcare providers, making it
                            easier for you to get the care you need when you
                            need it.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">
                    WHY CHOOSE US
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        title="EFFICIENCY"
                        description="Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle."
                    />
                    <FeatureCard
                        title="CONVENIENCE"
                        description="Access To A Network Of Trusted Healthcare Professionals In Your Area."
                    />
                    <FeatureCard
                        title="PERSONALIZATION"
                        description="Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health."
                    />
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({ title, description }) => {
    return (
        <Card className="border-none shadow-none">
            <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
};
