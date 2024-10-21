const Expense = require('../models/Expense');
const User = require('../models/User');
const { expenseSchema } = require('../validations/expenseValdation');

const addExpense = async (req, res) => {
  try {
    const validation = expenseSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error.errors);
    }

    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'participants.user': req.params.id });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addExpense, getUserExpenses, getOverallExpenses };
