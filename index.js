const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("MongoDB = ",err.message,"\nCheck .env file"));

const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
