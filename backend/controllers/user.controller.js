import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    console.log(req.user._id);

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    // console.log(filteredUsers);

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in get Users For SideBar", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
