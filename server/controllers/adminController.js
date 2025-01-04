// Admin will add the doctors

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
      const imageFile = req.file;

      console.log({
        name,
        email,
        password,
        speciality,
        degree,
        experience,
        about,
        fees,
        address,
      }, imageFile);
      return res.json({ message: "Success" });
  } catch (err) {}
};

export default addDoctor;
