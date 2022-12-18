// Import data students
const students = require("../data/students.js");

// Membuat class StudentController
class StudentController {
    // Membuat method index
    index(req, res) {
        // Tampilkan data students
        const data = {
            message: "Menampilkan data students",
            data: students
        };

        res.json(data);
    }

    // Membuat method store
    store(req, res) {
        const {nama} = req.body;

        // Tambahkan data students baru
        students.push(nama);

        const data = {
            message: `Menambahkan data students: ${nama}`,
            data: students
        };

        res.json(data);
    }


    // Membuat method update
    update(req, res) {
        const {id} = req.params;
        const {nama} = req.body;

        // update data students
        students[id] = nama;

        const data = {
            message: `Mengedit data students dengan id ${id}, nama ${nama}`,
            data: students
        };
        
        res.json(data);
    }

    // Membuat method destroy
    destroy(req, res) {
        const {id} = req.params;

        // hapus data students
        students.splice(id, 1);

        const data = {
            message: `Menghapus data students dengan id ${id}`,
            data: students
        };
        
        res.json(data);
    }
}

// Membuat object dari class StudentController
const object = new StudentController();

// Export object
module.exports = object;