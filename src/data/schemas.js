import { z } from 'zod'

const phoneRegex = /^[6-9]\d{9}$/

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid 10-digit Indian phone number'),
  message: z.string().trim().min(10, 'Tell us a bit more (at least 10 characters)'),
})

export const franchiseSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid 10-digit Indian phone number'),
  email: z.string().trim().email('Enter a valid email address'),
  city: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  location: z.string().trim().optional(),
  message: z.string().trim().optional(),
})
