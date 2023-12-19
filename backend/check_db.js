const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./yoga_classes.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the yoga_classes.db database.');
});

db.serialize(() => {
  console.log('Students:');
  db.each(`SELECT * FROM students`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });

  console.log('Enrollments:');
  db.each(`SELECT * FROM enrollments`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
