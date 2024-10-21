const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['equal', 'exact', 'percentage'], required: true },
  participants: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amountOwed: { type: Number }
  }],
  createdAt: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;
