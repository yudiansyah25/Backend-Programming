// Import Database
const db = require("../config/database");

// Membuat class Student
class Student {
    // Membuat method all
    static all() {
        // return promise
        return new Promise((resolve, reject) => {
            // Membuat query
            const sql = "SELECT * FROM students";

            // Menjalankan query
            db.query(sql, (err, results) => {
            resolve(results);
            });
        });
    }

    // Membuat method create
    static create(data) {
        // return promise
        return new Promise((resolve, reject) => {
            // Membuat query
            const sql = "INSERT INTO students SET ?";

            // Menjalankan query
            db.query(sql, data, (err, results) => {
                resolve(results);
            });
        });
    }
}

// Export class Student
module.exports = Student;