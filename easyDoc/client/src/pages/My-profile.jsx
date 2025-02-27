import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AppContext } from "@/context/appContext";
import axios from "axios";
import showToast from "@/utils/toast";


export default function MyProfile() {
    const { userData, setUserData, backendurl, token, getUserData } =
        useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
      const [originalData, setOriginalData] = useState(userData);
    const [hasChanges, setHasChanges] = useState(false);
    
     useEffect(() => {
         setHasChanges(
             JSON.stringify(userData) !== JSON.stringify(originalData) ||
                 !!image
         );
     }, [userData, image, originalData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prev) => {
            const keys = name.split(".");
            if (keys.length === 1) {
                // Top-level key (e.g., "name")
                return { ...prev, [name]: value };
            } else {
                // Nested keys (e.g., "address.line1")
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

    const updateUserProfileData = async () => {
        setLoading(true);
        try {
            const formData = new FormData();

            // Append top-level userData keys
            for (const key in userData) {
                console.log('key in form data', key)
                if (key === "address" && typeof userData.address === "object") {
                    // Serialize nested address object
                    formData.append(
                        "address",
                        JSON.stringify(userData.address)
                    );
                } else if (userData[key] !== undefined) {
                    // Append other keys (ensure no undefined values)
                    formData.append(key, userData[key]);
                } 
            }

            // Append image file if it exists
            if (image) {
                console.log('inside image', image)
                formData.delete("image");
                formData.append('image', image);
            }

            // Debug: Log FormData contents
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            const { data } = await axios.post(
                `${backendurl}/api/user/update-profile`,
                formData,
                {
                    headers: { token, "Content-Type": "multipart/form-data" },
                }
            );
            formData && console.log("formData", formData);
            if (data.success) {
                showToast("success", "User data updated successfully");
                getUserData()
            }
        } catch (err) {
            showToast("success", "Error updating user profile:", err);
        } finally {
            setLoading(false);
        }
    };
            
    return (
        userData && (
            <Card className="max-w-2xl mt-8">
                <CardHeader className="space-y-6 flex flex-row">
                    <Avatar
                        style={{ borderRadius: "0 !important" }}
                        className="h-40 w-40"
                    >
                        {isEdit ? (
                            <>
                                <AvatarImage
                                    src={
                                        image
                                            ? URL.createObjectURL(image)
                                            : userData.image
                                    }
                                    alt="Profile picture"
                                />
                            </>
                        ) : (
                            <AvatarImage
                                className="rounded-[50%]"
                                src={userData.image}
                                alt="Profile picture"
                            />
                        )}
                        <AvatarFallback>
                            {userData?.name.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>
                    {isEdit && (
                        <div className="inline">
                            <Input
                                //className="absolute h-auto bottom-0 top-0 left-0 "
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                placeholder="edit profile image"
                            />
                        </div>
                    )}
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* Contact Information */}
                    {isEdit ? (
                        <Input
                            type="text"
                            value={userData.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                    ) : (
                        <h1 className="text-2xl font-semibold">
                            {userData.name}
                        </h1>
                    )}
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
                                disabled={!hasChanges}
                                className={`hover:bg-teal-600 !bg-teal-600 text-white hover:text-white${
                                    hasChanges
                                        ? ""
                                        : "cursor-not-allowed opacity-50 pointer-events-none"
                                }`}
                                onClick={() => updateUserProfileData()}
                            >
                                {loading ? "Submitting..." : "Save Information"}
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                className="hover:bg-teal-600 bg-teal-600 text-white hover:text-white"
                                onClick={() => setIsEdit(true)}
                            >
                                Edit
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        )
    );
}
