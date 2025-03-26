import { z } from "zod";

const ProductSchema = z.object({
  id: z.number().int(), // assuming ID is an integer
  name: z.string().min(1, "Name ist erforderlich"),
  price: z.number().positive("Preis muss positiv sein"),
  category: z.enum(["Kategorie1", "Kategorie2", "Kategorie3"]), // Passe die Kategorien an
  imageUrl: z.string().url("Ungültige URL für das Bild"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
});

// Typ für das Produkt aus dem Zod-Schema
export type Product = z.infer<typeof ProductSchema>;

export type APIError = {
  error: string;
};

export type APIResponse<T> =
  | {
      data: T;
    }
  | APIError;

export const PaginationSchema = z.object({
  page: z.coerce.number().positive().optional(),
  pageSize: z.coerce.number().positive().optional(),
  totalItems: z.coerce.number().positive().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
