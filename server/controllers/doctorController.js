import doctorModel from "./../models/doctorModel";

const chnageDoctorsAvailability = async (req, res) => {
  try {
    const docId = req.body;
    const doctorData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !doctorData.available,
    });
    return res.status(400).json({
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

export default chnageDoctorsAvailability;
