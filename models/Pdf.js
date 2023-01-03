import mongoose from "mongoose";

const Pdf = new mongoose.Schema({
    name: { type: String, required: true },
    tag: { type: String, required: true },
    file:{type: String}
}, { timestamps: true },{ typeKey: '$type' });
mongoose.models = {}
export default mongoose.model("Pdf", Pdf)