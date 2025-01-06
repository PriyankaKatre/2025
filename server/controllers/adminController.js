// Admin will add the doctors
import validator from "validator";
import bcrypt from "bcrypt";
import { uploadMedia } from "../config/cloudinary.js";
import doctorModel from "./../models/doctorModel.js";
import jwt from "jsonwebtoken";

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
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    const isDoctorExists = await doctorModel.findOne({ email });

    if (isDoctorExists) {
      return res.json({
        success: false,
        message: "Email should be unique",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Ensure the address string is valid JSON
    const parsedAddress = JSON.parse(address);

    // Upload profilePhoto to cloudinary
    const cloudResponse = await uploadMedia(profilePhoto.path);
    const photoUrl = cloudResponse.secure_url;

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
      message:
        "Please enter all the details currectly,(Email should be unique)",
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("email password", email, password);
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRATEKEY);
      return res.status(200).json({ success: true, token });
    } else {
      console.log("Invalid Credentials");
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials from server",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: "Failed to admin login",
    });
  }
};

export { addDoctor, adminLogin };

