const { z } = require('zod');

const expenseSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  amount: z.number().min(1, 'Amount should be greater than zero'),
  method: z.enum(['equal', 'exact', 'percentage'], 'Invalid split method'),
  participants: z.array(
    z.object({
      user: z.string(),
      amountOwed: z.number().min(0)
    })
  )
});

module.exports = { expenseSchema };
