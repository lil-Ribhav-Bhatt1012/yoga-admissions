const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./yoga_classes.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQlite database.');
});


const createStudentsTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL
          )`, (err) => {
    if (err) {
      
      console.log(err);
    } else {
      console.log('Students table created or already exists.');
    }
  });
};


const createEnrollmentsTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS enrollments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            batch TEXT NOT NULL,
            month TEXT NOT NULL,
            payment_status TEXT NOT NULL,
            FOREIGN KEY (student_id) REFERENCES students (id)
          )`, (err) => {
    if (err) {
      
      console.log(err);
    } else {
      console.log('Enrollments table created or already exists.');
    }
  });
};


createStudentsTable();
createEnrollmentsTable();


const addStudent = (name, age, callback) => {
  db.run('INSERT INTO students (name, age) VALUES (?, ?)', [name, age], function(err) {
    callback(err, { id: this.lastID });
  });
};


const addEnrollment = (studentId, batch, month, paymentStatus, callback) => {
  db.run('INSERT INTO enrollments (student_id, batch, month, payment_status) VALUES (?, ?, ?, ?)',
    [studentId, batch, month, paymentStatus], function(err) {
    callback(err, { id: this.lastID });
  });
};

module.exports = { addStudent, addEnrollment };
