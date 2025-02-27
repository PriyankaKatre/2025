import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminContext } from "@/context/AdminContext";
import Toast from "@/components/Toast";

export default function AddDoctors() {
  const { atoken } = useContext(AdminContext);
  const { backendUrl } = useContext(AdminContext);
  const [doctor, setDoctor] = useState({
    name: "",
    speciality: "",
    email: "",
    degree: "",
    password: "",
    experience: "",
    fees: "",
    address1: "",
    address2: "",
    about: "",
  });
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      setAvatarFile(file);
    }
  };

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (const key in doctor) {
      if (key === "fees") {
        formData.append("fees", Number(doctor[key]));
      } else if (key === "address1" && "address2") {
        formData.append(
          "address",
          JSON.stringify({ line1: doctor.address1, line2: doctor.address2 })
        );
      } else {
        formData.append(key, doctor[key]);
      }
    }
    if (avatarFile) {
      formData.append("image", avatarFile);
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        {
          headers: {
            atoken,
          },
        }
      );
      if (response?.data.success) {
        setDoctor({
          name: "",
          speciality: "",
          email: "",
          degree: "",
          password: "",
          experience: "",
          fees: "",
          address1: "",
          address2: "",
          about: "",
        });
        setAvatarUrl("");
        setAvatarFile(null);
      }
      if (response?.data) {
        setToast({
          type: response?.data?.success ? "success" : "error",
          message: response?.data?.message,
        });
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      setToast({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  // Validate if all required fields are filled
  const isFormValid =
    Object.values(doctor).every((field) => field !== "") && avatarFile !== null;

  return (
    <div className="p-6">
      {toast.message && <Toast type={toast.type} message={toast.message} />}
      <h1 className="text-2xl font-semibold mb-6">Add Doctor</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => document.getElementById("picture")?.click()}
        >
          <Avatar className="w-24 h-24">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>
              <Upload className="w-8 h-8 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
          <div>
            <Label htmlFor="picture" className="text-lg text-muted-foreground">
              Upload doctor picture
            </Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Doctor name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              value={doctor.name}
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="speciality">Speciality</Label>
            <Select
              name="speciality"
              value={doctor.speciality}
              onValueChange={(value) =>
                setDoctor((prev) => ({ ...prev, speciality: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Please select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General physician">
                  General physician
                </SelectItem>
                <SelectItem value="Cardiologist">Cardiologist</SelectItem>
                <SelectItem value="Dermatologist">Dermatologist</SelectItem>
                <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                <SelectItem value="Orthopedic Surgeon">
                  Orthopedic Surgeon
                </SelectItem>
                <SelectItem value="Neurologist">Neurologist</SelectItem>
                <SelectItem value="Endocrinologist">Endocrinologist</SelectItem>
                <SelectItem value="Gastroenterologist">Gastroenterologist</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Doctor Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={doctor.email}
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              placeholder="Degree"
              value={doctor.degree}
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Doctor Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={doctor.password}
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience</Label>
            <Select
              name="experience"
              value={doctor.experience}
              onValueChange={(value) =>
                setDoctor((prev) => ({ ...prev, experience: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fees">Fees</Label>
            <Input
              id="fees"
              name="fees"
              type="number"
              placeholder="Your fees"
              value={doctor.fees}
              onChange={onInputChangeHandler}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address1">Address</Label>
            <Input
              id="address1"
              name="address1"
              placeholder="Address 1"
              className="mb-2"
              value={doctor.address1}
              onChange={onInputChangeHandler}
            />
            <Input
              id="address2"
              name="address2"
              placeholder="Address 2"
              value={doctor.address2}
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="about">About me</Label>
            <Textarea
              id="about"
              name="about"
              placeholder="Write about yourself"
              className="min-h-[120px]"
              value={doctor.about}
              onChange={onInputChangeHandler}
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full md:w-auto bg-teal-600 ${
            !isFormValid || loading
              ? "cursor-not-allowed opacity-50 pointer-events-none"
              : ""
          }`}
          disabled={!isFormValid || loading} // Disable if form is not valid or if loading
        >
          {loading ? "Submitting..." : "Add doctor"}
        </Button>
      </form>
    </div>
  );
}
