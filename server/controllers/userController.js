import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) {
      return res.status(409).json({
        success: false,
        message: "User with this email address is already registered",
      });
    }
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please Enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Enter a strong password",
      });
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const userData = {
      name,
      email,
      password: hasedPassword,
    };

    const user = await userModel.create(userData);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY);

    return res.status(201).json({
      success: true,
      message: "User Register Successfully",
      token,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to Register User",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exists",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY);
      return res.status(200).json({
        success: true,
        message: "User Logged in Successfully",
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid User Credentials",
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to Login User",
    });
  }
};

export { registerUser, loginUser };
