import { connectDB } from "@/lib/connectDB";
import User from "@/models/User";
import bcrypt from "bcryptjs";

import { newEvent } from "@/actions/newEvent";

export default async function handler(req, res) {
  if (req.method !== "POST") {

    newEvent('apiError', {
      action: "signup",
      message: "Method not allowed",
      route: req.url
    })

    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  try {
    await connectDB();
    const existingUser = await User.findOne({ email });

    if (existingUser) {

      newEvent("signup", {
        status: "Fail"
      })

      return res
        .status(400)
        .json({ message: "An user with this email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    newEvent("signup", {
      status: "Sucess"
    })

    return res.status(201).json({ user: newUser });
  } catch (error) {

    newEvent("apiError", {
      action: "signup",
      message: error.message,
      route: req.url
    })

    return res.status(500).json({ message: "Internal Server Error" });
  }
}