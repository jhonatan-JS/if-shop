import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  updatedAt: string;
}

interface Product {
  products: ProductProps[];
}

export async function getProducts() {
  const { data } = await api.get<Product>(`/products`);

  console.log("data", data);
  return data;
}

export function useProducts() {
  return useQuery(["products"], () => getProducts(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
