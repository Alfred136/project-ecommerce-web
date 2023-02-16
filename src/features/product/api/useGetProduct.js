import { useQueries } from '@tanstack/react-query';
import { client } from '@/lib/sanityClient';

export const getProductsSlug = async () => {
  const query = `*[_type == "product"] {
    slug { current }
  }`;
  return await client.fetch(query);
};

export const getProduct = async (slug) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  return await client.fetch(query)
};

export const getFeaturedProducts = async () => {
  const query = '*[_type == "product" && categoryId == "featured"][0...10]';
  return await client.fetch(query);
};

export const useGetProduct = (slug) => {
  return useQueries({
    queries: [
      { queryKey: ["getProduct", slug], queryFn: () => getProduct(slug) },
      { queryKey: ["getProducts", "featured"], queryFn: getFeaturedProducts },
    ]
  });
};