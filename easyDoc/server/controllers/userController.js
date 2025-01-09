import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { uploadMedia } from "../config/cloudinary.js";

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

const getUserProfile = async (req, res) => {
  try {
      const { userId } = req.body; // Securely obtained from the token

    const userData = await userModel.findById(userId).select("-password");
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    return res.status(200).json({
      success: true,
      userData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user profile",
    });
  }
};

const updateProfile = async (req, res) => {
    try {
        const { userId, name, email, phone, address, dob, gender } = req.body;
        const image = req.file;
        if (!name || !phone || !dob || !gender) {
            return res.status(500).json({
              success: false,
              message: "Some Data is missing",
            });
        }

        await userModel.findByIdAndUpdate(userId, {
            name, phone, address: JSON.parse(address), dob, gender
        })

        if (image) {
            const cloudResponse = await uploadMedia(image.path);
            const photoUrl = cloudResponse.secure_url;
            console.log("photoUrl", photoUrl);
            await userModel.findByIdAndUpdate(userId, {
              image:photoUrl,
            });
        }
         return res.status(200).json({
           success: true,
           message: "User Profile successfully updated",
         });

    } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to update user profile",
        });
    }

}

export { registerUser, loginUser, getUserProfile, updateProfile };
