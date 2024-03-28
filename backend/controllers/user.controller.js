import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const filterUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");
    res.status(200).json(filterUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
