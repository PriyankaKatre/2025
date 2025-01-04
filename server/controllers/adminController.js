// Admin will add the doctors
import validator from "validator";
import bcrypt from "bcrypt";
import { uploadMedia } from "../config/cloudinary.js";
import doctorModel from "./../models/doctorModel.js";

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      available,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const profilePhoto = req.file;

    console.log("profilePhoto", profilePhoto);

    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !available
    ) {
      return res.json({
        status: false,
        message: "Missing Details",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        status: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        status: false,
        message: "Please enter a strong password",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(address); // Log the address string

    // Ensure the address string is valid JSON
    const parsedAddress = JSON.parse(address);

    // Upload profilePhoto to cloudinary
    const cloudResponse = await uploadMedia(profilePhoto.path);
    const photoUrl = cloudResponse.secure_url;

    console.log("cloudResponse", photoUrl);

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: parsedAddress,
      date: Date.now(),
      image: photoUrl,
      available,
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    return res
      .status(201)
      .json({ success: true, message: "Doctor added successfully" });
  } catch (err) {
    console.log("failed Register", err);
    return res.status(400).json({
      success: false,
      message: "Failed to register",
    });
  }
};

export default addDoctor;

