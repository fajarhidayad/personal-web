import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: 'This Name field is required' })
    .min(3, { message: 'This field must contain at least 3 characters' }),
  email: z
    .string({ required_error: 'This Email field is required' })
    .email({ message: 'This field must contain email format' }),
  subject: z
    .string({ required_error: 'This Subject field is required' })
    .min(5, { message: 'This field must contain at least 5 characters' }),
  message: z
    .string()
    .max(500, { message: 'Sorry maximum 500 characters' })
    .min(1, { message: 'This field is required' }),
});
