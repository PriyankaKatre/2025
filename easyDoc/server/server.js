import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
//import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import { doctorRouter } from "./routes/doctorRoute.js";
import { userRouter } from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
//connectCloudinary();

//
app.use(express.json());
app.use(cors());

//localhost:4000/api/admin/add-doctor
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`server started ${port}`));
