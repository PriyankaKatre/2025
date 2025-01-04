import express from 'express';
import { addDoctor, adminLogin } from "../controllers/adminController.js";

import upload from "../middlerwares/multer.js";
import authAdmin from "./../middlerwares/authAdmin.js";

const adminRouter = express.Router();

adminRouter
  .route("/add-doctor")
  .post(authAdmin, upload.single("image"), addDoctor);
adminRouter.route("/login").post(adminLogin);

export default adminRouter;
