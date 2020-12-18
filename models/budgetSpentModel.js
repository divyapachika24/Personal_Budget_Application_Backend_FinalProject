const mongoose = require("mongoose");

const spentSchema = new mongoose.Schema({
    category2: { type: String, required: true, unique:false},
    spentAmount: { type: String, required: true},
    userId: { type: String, required: true, unique:false},
});

spentSchema.index({ category2: 1, userId: 1}, { unique: true });

module.exports = Spent = mongoose.model("spent", spentSchema);