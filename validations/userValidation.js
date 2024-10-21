const { z } = require('zod');

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  mobile: z.string().length(10, 'Mobile number should be 10 digits'),
});

module.exports = { userSchema }