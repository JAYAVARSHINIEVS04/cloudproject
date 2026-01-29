const db = require('../../data');

exports.getstudents = (req, res) => {
    const sql = 'SELECT * FROM demo_kec';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
};

exports.addstudent = (req, res) => {
    const { id, name, depart } = req.body;
    const query = 'INSERT INTO demo_kec (id, name, depart) VALUES (?, ?, ?)';
    db.query(query, [id, name, depart], (err, results) => {
        if (err) {
            console.error('Error adding student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({
            message: 'Student added successfully',
            id: results.insertId
        });
    });
};

exports.updatestudent = (req, res) => {
    const id = req.params.id;
    const { name, depart } = req.body;
    const query = 'UPDATE demo_kec SET name = ?, depart = ? WHERE id = ?';
    db.query(query, [name, depart, id], (err, results) => {
        if (err) {
            console.error('Error updating student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student updated successfully' });
    });
};

exports.deletestudent = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM demo_kec WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    });
};