import doctorModel from "../models/doctorModel.js";

const chnageDoctorsAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    console.log("docId", req.body);
    const doctorData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !doctorData.available,
    });
    return res.status(200).json({
      success: true,
      message: "Doctor's availability changed successfully",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "something is wrong while changing doctors availability",
    });
  }
};

const getDoctorsList = async (req, res) => {
  try {
    const doctorsList = await doctorModel
      .find({})
      .select(["-password", "-email"]);

    return res.status(200).json({
      success: true,
      message: "All doctors list has been fetched successfully",
      doctors: doctorsList,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to fetch all the doctors",
    });
  }
};

export { chnageDoctorsAvailability, getDoctorsList };
