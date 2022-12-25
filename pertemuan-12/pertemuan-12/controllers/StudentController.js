// Import model student
const Student = require("../models/Student");

// Membuat class StudentController
class StudentController {
    // Membuat method index
    async index(req, res) {
        // Mendapatkan data students
        const students = await Student.all();

        // Menampilkan data students
        const data = {
            message: "Show all students data",
            data: students
        };

        res.json(data);
    }

    // Membuat method store
    async store(req, res) {
        // Menambahkan data students
        const students = await Student.create(req.body);

        // Menampilkan data students
        const data = {
            message: "Create data students",
            data: students
        };

        res.json(data);
    }


    // Membuat method update
    update(req, res) {
        const {id} = req.params;
        const {nama} = req.body;

        const data = {
            message: `Mengedit data students dengan id ${id}, nama ${nama}`,
            data: []
        };
        
        res.json(data);
    }

    // Membuat method destroy
    destroy(req, res) {
        const {id} = req.params;

        const data = {
            message: `Menghapus data students dengan id ${id}`,
            data: []
        };
        
        res.json(data);
    }
}

// Membuat object dari class StudentController
const object = new StudentController();

// Export object
module.exports = object;