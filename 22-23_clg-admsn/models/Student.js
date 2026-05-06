const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);
