import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. log in again!",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.body.userId = decodedToken.id;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Please log in again!",
    });
  }
};

export default authUser;
