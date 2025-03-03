import express from "express";
import {
    bookAppointment,
  getUserProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middlerwares/authUser.js";
import upload from "../middlerwares/multer.js";

export const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user-profile", authUser, getUserProfile);
userRouter.post(
  "/update-profile", authUser, updateProfile)
userRouter.get("/book-appointment", authUser, bookAppointment);

