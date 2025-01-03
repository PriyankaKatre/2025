import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import healthcareImg from "../assets/contactPage.png";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    CONTACT US
                </h1>
            </div>

            <div className="grid md:grid-cols-7 gap-12 items-start">
                {/* Image Section */}
                <div className="relative aspect-square col-span-2">
                    <img
                        src={healthcareImg}
                        alt="Healthcare consultation"
                        className="rounded-lg object-cover w-full h-full"
                        width={500}
                        height={400}
                    />
                </div>

                {/* Contact Information Section */}
                <div className="space-y-8 col-span-5">
                    {/* Office Information */}
                    <Card className="border-none shadow-none">
                        <CardContent className="p-0 space-y-6">
                            <h2 className="text-xl font-semibold">
                                OUR OFFICE
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                                    <div>
                                        <p className="text-muted-foreground">
                                            Harrow
                                        </p>
                                        <p className="text-muted-foreground">
                                            London
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-muted-foreground" />
                                    <p className="text-muted-foreground">
                                        Tel: 123456789
                                    </p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-muted-foreground" />
                                    <p className="text-muted-foreground">
                                        Email: pk01@gmail.com
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Careers Section */}
                    <Card className="border-none shadow-none">
                        <CardContent className="p-0 space-y-4">
                            <h2 className="text-xl font-semibold">
                                CAREERS AT EasyDoc
                            </h2>
                            <p className="text-muted-foreground">
                                Learn more about our teams and job openings.
                            </p>
                            <Button variant="outline" className="mt-2">
                                Explore Jobs
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
