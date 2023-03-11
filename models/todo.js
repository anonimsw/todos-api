const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            unique: true
        },
        count: {
            type: Number,
            required: false,
            default: 1,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: String,
        }
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);