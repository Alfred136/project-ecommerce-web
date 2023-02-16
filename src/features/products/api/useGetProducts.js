import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanityClient';

export const getProducts = async (category) => {
  let productsQuery = `*[_type == "product" && categoryId == '${category}']`;
  if (category === 'men' || category === 'women') {
    productsQuery = `*[_type == "product" && gender == '${category}']`;
  }

  return await client.fetch(productsQuery);
};

export const useGetProducts = ({ category, config }) => {
  return useQuery({
    queryKey: ["getProducts", category],
    queryFn: () => getProducts(category),
    ...config
  });
};