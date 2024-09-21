const express = require('express');
const router = express.Router();
// Route for name
router.get('/name', (req, res) => {
  res.send('Ramandeep kaur');
});
// Route for greeting
router.get('/greeting', (req, res) => {
  res.send('Ramandeep Kaur and My student number is N01648899');
});

// Route for add
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  const result = x + y;
  res.send(`The result of adding ${x} and ${y} is ${result}`);
});

// Route for calculate
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;
  let result;

  if (operation == '+') {
    result = a + b;
  } else if (operation == '-') {
    result = a - b;
  } else if (operation == '*') {
    result = a * b;
  } else if (operation == '/') {
    result = b !== 0 ? a / b : 'Cannot divide by 0';
  } else if (operation == '**') {
    result = a ** b;
  } else {
    return res.send('Invalid operation');
  }

  res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});

module.exports = router;
