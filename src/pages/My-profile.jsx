import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function Myprofile() {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="space-y-6">
                <div className="flex gap-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage
                            src="/placeholder.svg"
                            alt="Profile picture"
                        />
                        <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-20 h-20 bg-blue-50">
                        <User className="w-12 h-12 text-blue-300" />
                    </Avatar>
                </div>
                <h1 className="text-2xl font-semibold">Edward Vincent</h1>
            </CardHeader>
            <CardContent className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-4">
                    <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                        Contact Information
                    </h2>
                    <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Email id:
                            </span>
                            <span className="col-span-2 text-blue-600">
                                richardjameswap@gmail.com
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Phone:
                            </span>
                            <span className="col-span-2">+1 123 456 7890</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Address:
                            </span>
                            <div className="col-span-2">
                                <p>57th Cross, Richmond</p>
                                <p>Circle, Church Road, London</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Basic Information */}
                <div className="space-y-4">
                    <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                        Basic Information
                    </h2>
                    <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Gender:
                            </span>
                            <span className="col-span-2">Male</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Birthday:
                            </span>
                            <span className="col-span-2">20 July, 2024</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button variant="outline">Edit</Button>
                    <Button variant="outline">Save information</Button>
                </div>
            </CardContent>
        </Card>
    );
}
