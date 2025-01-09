import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

export const uploadMedia = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      transformation: [
        {
          width: 800, // Set desired width
          height: 600, // Set desired height
          crop: "fill", // Ensures image is cropped to fill dimensions
          gravity: "auto", // Centers the crop dynamically
        },
      ],
    });
    return uploadResponse;
  } catch (e) {
    console.log(e);
  }
};

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (e) {
    console.log(e);
  }
};

export const deleteVedioFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "vedio",
    });
  } catch (e) {
    console.log(e);
  }
};
