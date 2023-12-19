const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./database');

app.use(cors());
app.use(bodyParser.json());


let enrollments = [];


function CompletePayment(userId, amount) {
    
    console.log(`Processed payment for user ${userId} of amount ${amount}`);
    return true; 
}

app.post('/api/enroll', (req, res) => {
    const { name, age, batch } = req.body;

    
    if (!name || age < 18 || age > 65 || !['6-7AM', '7-8AM', '8-9AM', '5-6PM'].includes(batch)) {
        return res.status(400).send('Invalid enrollment data.');
    }

    
    const newEnrollment = { id: enrollments.length + 1, name, age, batch };
    enrollments.push(newEnrollment);

   
    const paymentSuccessful = CompletePayment(newEnrollment.id, 500);

    if (paymentSuccessful) {
        res.send({ message: 'Enrollment successful.', enrollmentId: newEnrollment.id });
    } else {
        res.status(500).send('Payment failed.');
    }

    db.addStudent(name, age, (err, student) => {
        if (err) {
          res.status(500).send('Failed to add student to the database.');
        } else {
          db.addEnrollment(student.id, batch, new Date().toISOString().slice(0, 7), 'pending', (err, enrollment) => {
            if (err) {
              res.status(500).send('Failed to add enrollment to the database.');
            } else {
             
              const paymentSuccessful = CompletePayment(enrollment.id, 500);
    
              if (paymentSuccessful) {
                res.send({ message: 'Enrollment successful.', enrollmentId: enrollment.id });
              } else {
                res.status(500).send('Payment failed.');
              }
            }
          });
        }
      });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
