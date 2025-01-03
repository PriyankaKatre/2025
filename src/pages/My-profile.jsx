import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useState } from "react";
import doctor1 from "../assets/doctor1.png";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function MyProfile() {
    const [userData, setUserData] = useState({
        name: "Priyanka Katre",
        image: doctor1,
        email: "pk01@gmail.com",
        phone: "12345678901",
        address: {
            line1: "79 Wembley park drive",
            line2: "Harrow London",
        },
        gender: "female",
        dob: "01-01-2000",
    });

    const [isEdit, setIsEdit] = useState(false);
    console.log("userData", userData);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUserData((prev) => {
            const keys = name.split(".");
            if (keys.length === 1) {
                return { ...prev, [name]: value };
            } else {
                return {
                    ...prev,
                    [keys[0]]: {
                        ...prev[keys[0]],
                        [keys[1]]: value,
                    },
                };
            }
        });
    };

    const handleSelectChange = (value) => {
        setUserData((prev) => ({
            ...prev,
            gender: value,
        }));
    };

    return (
        <Card className="max-w-2xl mt-8">
            <CardHeader className="space-y-6">
                <div className="flex gap-4">
                    <Avatar className="w-40 h-40">
                        <AvatarImage
                            src={userData.image}
                            alt="Profile picture"
                        />
                        <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                </div>
                {isEdit ? (
                    <Input
                        type="text"
                        value={userData.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                ) : (
                    <h1 className="text-2xl font-semibold"> {userData.name}</h1>
                )}
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
                            {isEdit ? (
                                <Input
                                    type="text"
                                    value={userData.email}
                                    name="email"
                                    onChange={(e) => handleChange(e)}
                                />
                            ) : (
                                <span className="col-span-2 text-teal-600">
                                    {userData.email}
                                </span>
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Phone:
                            </span>
                            {isEdit ? (
                                <Input
                                    type="text"
                                    value={userData.phone}
                                    name="phone"
                                    onChange={(e) => handleChange(e)}
                                />
                            ) : (
                                <span className="col-span-2">
                                    {userData.phone}
                                </span>
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Address:
                            </span>
                            {isEdit ? (
                                <>
                                    <Input
                                        type="text"
                                        value={userData.address.line1}
                                        name="address.line1"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <Input
                                        type="text"
                                        value={userData.address.line2}
                                        name="address.line2"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </>
                            ) : (
                                <div className="col-span-2">
                                    <p>{userData.address.line1}</p>
                                    <p>{userData.address.line2}</p>
                                </div>
                            )}
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
                            {isEdit ? (
                                <Select onValueChange={handleSelectChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="Female">
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <span className="col-span-2">
                                    {userData.gender}
                                </span>
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <span className="text-muted-foreground">
                                Birthday:
                            </span>
                            {isEdit ? (
                                <Input
                                    type="date"
                                    value={userData.dob}
                                    name="dob"
                                    onChange={(e) => handleChange(e)}
                                />
                            ) : (
                                <span className="col-span-2">
                                    {userData.dob}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div>
                    {isEdit ? (
                        <Button
                            variant="outline"
                            className="hover:bg-teal-600 hover:text-white"
                            onClick={() => setIsEdit(false)}
                        >
                            Save Information
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            className="hover:bg-teal-600 hover:text-white"
                            onClick={() => setIsEdit(true)}
                        >
                            Edit
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
