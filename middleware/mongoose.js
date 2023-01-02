import mongoose from "mongoose";
const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect("mongodb+srv://pppranshu45:1234@cluster0.sblas7q.mongodb.net/test")
    return handler(req, res);
}
export default connectDb;