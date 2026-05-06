const express = require("express");
const router = express.Router();
const Student = require("../models/Student");


// =====================
// POST - Add Student
// =====================
router.post('/add', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();

        res.status(201).json({
            message: "Student saved successfully !",
            data: savedStudent
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


// =====================
// GET - All Students
// =====================
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// =====================
// GET - Student by ID
// =====================
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// =====================
// PUT - Update Student
// =====================
router.put('/update/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({
            message: "Student updated successfully",
            data: updatedStudent
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// =====================
// DELETE - Delete Student
// =====================
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({
            message: "Student deleted successfully",
            data: deletedStudent
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
