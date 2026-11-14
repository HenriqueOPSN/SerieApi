import { z } from 'zod';

export const createSerieSchema = z.object({
    body: z.object({
        name: z
        .string({ message: "A série precisa ser um texto"})
        .min(2, {message : "O nome da série precisa ter no minímo 2 caracteres"}),
    })
});