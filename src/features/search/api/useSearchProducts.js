import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/sanityClient';

export const searchProducts = async (keyword = '') => {
  let productsQuery = `*[_type == "product" && name match '${keyword}*']`;

  return await client.fetch(productsQuery);
};

export const useSearchProducts = ({ keyword, config }) => {
  return useQuery({
    queryKey: ["searchProducts", keyword],
    queryFn: () => searchProducts(keyword),
    ...config
  });
};