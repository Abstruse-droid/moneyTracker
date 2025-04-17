import mongoose from "mongoose";

export const connectDB = async (req, res) => {

   await mongoose.connect(`mongodb+srv://vineet123:Mypass123@cluster0.y9uuppy.mongodb.net/vineet-expense-app`)
}