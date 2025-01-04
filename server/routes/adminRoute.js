import express from 'express';
import addDoctor from '../controllers/adminController.js';

import upload from '../middlerwares/multer.js'

const adminRouter = express.Router()

adminRouter.route("/add-doctor").post(upload.single("image"), addDoctor);

export default adminRouter;
