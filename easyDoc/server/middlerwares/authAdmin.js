import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.status(400).json({
        success: false,
        message: "Not Authorize Login Again!",
      });
    }
    const decodeToken = jwt.verify(atoken, process.env.JWT_SECRETKEY);
    if (decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "Not Authorize Login Again!",
      });
    }
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export default authAdmin;
