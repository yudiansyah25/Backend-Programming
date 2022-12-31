// Import Database
const db = require("../config/database");

// Create class Student
class Student {
    // Create method all
    static all() {
        // return promise
        return new Promise((resolve, reject) => {
            // Create query
            const sql = "SELECT * FROM students";

            // Run query
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Create method create
    static async create(data) {
        // Insert data
        const id = await new Promise((resolve, reject) => {
            // Create query
            const sql = "INSERT INTO students SET ?";

            // Run query
            db.query(sql, data, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId);
                }
            });
        });

        // Get data by id
        const student = await Student.find(id);
        return student;
    }

    // Search data by id
    static find(id) {
        // return promise
        return new Promise((resolve, reject) => {
            // Create query
            const sql = "SELECT * FROM students WHERE id = ?";

            // Run query
            db.query(sql, id, (err, results) => {
                // Destructing array
                const [student] = results;
                resolve(student);
            });
        });
    }

    // Update data students
    static async update(id, data) {
        try {
            const result = await new Promise((resolve, reject) => {
                db.query("UPDATE students SET ? WHERE id = ?", [data, id], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
            return await Student.find(id);
        } catch (error) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }

    // Create method delete
    static delete(id) {
        // return promise
        return new Promise((resolve, reject) => {
            // Create query
            const sql = "DELETE FROM students WHERE id = ?";

            // Run query
            db.query(sql, id, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

// Export class Student
module.exports = Student;
