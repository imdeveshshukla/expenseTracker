# Daily Expenses Sharing Application

This project is a backend API for managing shared expenses between users, with features for splitting expenses equally, by exact amounts, or by percentages. The backend is built using **Express.js**, **MongoDB** (via **Mongoose**), and uses **Zod** for input validation.

## Features

- **User Management**: Add and retrieve users with email, name, and mobile number.
- **Expense Management**:
  - Split expenses equally, by exact amounts, or by percentages.
  - Add expenses and associate them with multiple users.
  - Retrieve individual user expenses.
  - Retrieve overall expenses.
  - Download balance sheets (optional feature).
- **Validation**: Zod is used to validate user and expense inputs.

## Requirements

- Node.js (v14 or higher)
- MongoDB (Local or Cloud)

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/expense-sharing-app.git
cd expense-sharing-app
```

### 2. install Dependencies

```bash
npm install
```
### 3. Setup Environment Variables 

```bash
MONGO_URI=your-mongo-connection-string
PORT=3000
```

### 4. Start the server

```bash 
npm start 
```


