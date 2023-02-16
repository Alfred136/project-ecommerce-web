import { useQueries } from '@tanstack/react-query';
import { client } from '@/lib/sanityClient';

export const getNewProducts = async () => {
  const query = '*[_type == "product" && categoryId == "new"][0...10]';
  return await client.fetch(query);
};

export const getFeaturedProducts = async () => {
  const query = '*[_type == "product" && categoryId == "featured"][0...10]';
  return await client.fetch(query);
};

export const useGetHomeProducts = () => {
  return useQueries({
    queries: [
      { queryKey: ["getProduct", "new"], queryFn: getNewProducts },
      { queryKey: ["getProducts", "featured"], queryFn: getFeaturedProducts },
    ]
  });
};