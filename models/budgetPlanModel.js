const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    category: { type: String, required: true, unique: false},
    plannedAmount: { type: String, required: true},
    userId: { type: String, required: true, unique: false},
});

planSchema.index({ category: 1, userId: 1}, { unique: true });

module.exports = Plan = mongoose.model("plan", planSchema);