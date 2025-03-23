import { z } from 'zod';

export const gamePresenterSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  shift: z.enum(['morning', 'afternoon', 'night'], {
    errorMap: () => ({ message: 'Invalid shift selected' }),
  }),
});

export const tableSchema = z.object({
  name: z.string().min(3, 'Table name must be at least 3 characters'),
});
