import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    datePublished: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Associated book with the User Schema or Data
});
export default mongoose.model("Book", bookSchema);