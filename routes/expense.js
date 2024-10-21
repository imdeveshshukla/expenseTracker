const express = require("express");
const { addExpense, getOverallExpenses, getUserExpenses } = require("../controllers/expenseController");
const expenseRoutes = express.Router();


expenseRoutes.post('/addExpense',addExpense);

expenseRoutes.get('/user/:id',getUserExpenses);

expenseRoutes.get('/getAll',getOverallExpenses)



module.exports = expenseRoutes;