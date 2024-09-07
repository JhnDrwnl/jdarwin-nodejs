const express = require('express');
const router = express.Router();

const calculateBMI = (weight, height) => {
  return (weight / (height * height)).toFixed(2);
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
  if (bmi >= 25 && bmi < 29.9) return 'Overweight';
  return 'Obese';
};


router.get('/', (req, res) => {
  res.render('index');
});


router.post('/calculate', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return res.render('index', { error: 'Please provide valid inputs.' });
  }

  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  res.render('result', { bmi, category });
});

module.exports = router;
