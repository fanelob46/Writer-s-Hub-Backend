import User from "../../models/userModel.js";

export const updateProfile = async (req,res) => {
     const user = await User.findById(req.user._id);

     if (user) {
       user.firstName = req.body.firstName || user.firstName;
       user.email = req.body.email || user.email;

       if (req.body.password) {
         user.password = req.body.password;
       }

       const updatedUser = await user.save();

       res.json({
         _id: updatedUser._id,
         firstName: updatedUser.firstName,
         email: updatedUser.email,
       });
     } else {
       res.status(404);
       throw new Error("User not found");
     }
}