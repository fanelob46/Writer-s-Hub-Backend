import jwt from "jsonwebtoken";

//add userId to the payload
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  //save the token inside a cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
