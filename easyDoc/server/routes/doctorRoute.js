import express from 'express';
import { getDoctorsList } from "../controllers/doctorController.js";

export const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctorsList);
