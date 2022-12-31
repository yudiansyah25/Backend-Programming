// Import model student
const Student = require("../models/Student");

// Create class StudentController
class StudentController {
    // Create method index
    async index(req, res) {
        // Get all data students
        const students = await Student.all();

        // Show all data students
        if (students.length > 0) {
            const data = {
                message: "Show all data students",
                data: students,
            };
            res.status(200).json(data);
        } else {
            const data = {
                message: "Students is empty",
            };
            res.status(404).json(data);
        }
    }

    // Create store method
    async store(req, res) {
        // Store data students
        const { nama, nim, email, jurusan } = req.body;
        /*
        * Create validation
        * - Handle if data incomplete
        */
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message: "Data incomplete",
            };
            return res.status(422).json(data);
        }

        // Else
        const student = await Student.create(req.body);
        const data = {
            message: "Create data students",
            data: student,
        };
        return res.status(201).json(data);
    }

    // Create method update
    async update(req, res) {
        const { id } = req.params;
        // Search data by id
        const student = await Student.find(id);

        // Update data
        if (!student) {
            const data = {
                message: "Data students not found",
            };
            return res.status(404).json(data);
        }
        const updatedStudent = await Student.update(id, req.body);
        const data = {
            message: "Update data students",
            data: updatedStudent,
        };
        return res.status(200).json(data);
    }

    // Create method destroy
    async destroy(req, res) {
        const { id } = req.params;
        // Search data by id
        const student = await Student.find(id);

        // Delete data
        if (!student) {
            const data = {
                message: "Data students not found",
            };
            return res.status(404).json(data);
        }
        await Student.delete(id);
        const data = {
            message: "Delete data students",
        };
        return res.status(200).json(data);
    }

    // Create method show
    async show(req, res) {
        try {
            const { id } = req.params;
            // Search data by id
            const student = await Student.find(id);

            // Show data
            if (student) {
                const data = {
                    message: "Show data students",
                    data: student,
                };
                res.status(200).json(data);
            } else {
                const data = {
                    message: "Data students not found",
                };
                res.status(404).json(data);
            }
        } catch (error) {
            const data = {
                message: "Data students not found",
            };
            res.status(404).json(data);
        }
    }
}

const object = new StudentController();

// Export module
module.exports = object;
