require('dotenv').config()// This how to import dotenv
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors());
// MySQL Connection
const db = mysql.createConnection({
    //host: process.env.HOST,
    //user: process.env.USER,
    //password: process.env.PWD,
    //database: process.env.DB_NAME
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdemodb"
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});
// Middleware
app.use(bodyParser.json());
// Routes
// Create a student
app.post('/students', (req, res) => {
    const { name, age, grade } = req.body;
    const sql = 'INSERT INTO students (name, age, grade) VALUES (?, ?, ?)';
    db.query(sql, [name, age, grade], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Student added successfully' });
        }
    });
});
// Read one student
app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM  students WHERE id = ?`, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json((typeof result[0] === "undefined") ? { message: 'Student not found' } : result[0]);
        }
    });
});
// Read all students
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});
// Update a student
app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM  students WHERE id = ?`, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (typeof result[0] === "undefined") {
                res.status(200).json({ message: 'Student not found' });
            } else {
                const { name, age, grade } = req.body;
                const sql = 'UPDATE students SET name=?, age=?, grade=? WHERE id=?';
                db.query(sql, [name, age, grade, id], (err, result) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                    } else {
                        res.status(200).json({ message: 'Student updated successfully' });
                    }
                });
            }
        }
    });
});
// Delete a student
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM  students WHERE id = ?`, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (typeof result[0] === "undefined") {
                res.status(200).json({ message: 'Student not found', data: result[0] });
            } else {
                db.query('DELETE FROM students WHERE id=?', [id], (err, result) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                    } else {
                        res.status(200).json({ message: 'Student deleted successfully' });
                    }
                });
            }
        }
    });
});
let server = app.listen(5000, function () {
    console.log(`Example app listening at http://localhost:5000`)
})