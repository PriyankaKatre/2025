import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) {
      return res.status(400).json({
        success: false,
        message: "User with this email address is already register",
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
    console.log("hasedPassword", hasedPassword);
    const userData = {
      name,
      email,
      password: hasedPassword,
    };

    await userModel.create(userData);

    return res.status(201).json({
      success: true,
      message: "User Register Successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to Register User",
    });
  }
};

export { registerUser };
