import { api } from "../lib/axios";
import type { Product, Category } from "../types/ProductType";


export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>("/categories");
  return response.data;
};