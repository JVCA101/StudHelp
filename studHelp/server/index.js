// server/index.ts
import express from 'express';
import {selectStudents} from './db.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
  console.log("Press Ctrl+C to quit.");
});

(async () => {
  console.log('Começou!');

  console.log('SELECT * FROM student_tb');
  const students = await selectStudents();
  console.log(students);
})();
