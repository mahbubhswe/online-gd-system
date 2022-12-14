import User from "../../../models/User.js";
import connectMongo from "../../../utils/connectMongo.js";
import nc from "next-connect";
const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectMongo();
    const user = await User.findOne({ email: req.query.email });
    if (user) {
      await User.findByIdAndUpdate({ _id: user._id }, { isVerified: true });
      res.send(`Verified successfully`);
    } else {
      res.send(`Sorry, account not found!`);
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
