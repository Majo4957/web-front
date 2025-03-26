import { useQuery } from "@tanstack/react-query";
import { Pagination, Product } from "../types";
import { API_BASE_URL } from "../constants";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<{
      data: Product[];
      pagination: Pagination;
    }> => {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      return result;
    },
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async (): Promise<{
      data: Product[];
      pagination: Pagination;
    }> => {
      const response = await fetch(`${API_BASE_URL}/products?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      return result;
    },
    enabled: !!category, // Query only runs if category is provided
  });
};