import { useProductsContext } from "../context/productsContext";

export const useFilteredProducts = (products) => {
  const { collection, filterBy, sortBy } = useProductsContext();

  let result = [...products];
  if (collection !== 'all') {
    result = result.filter((product) => product.collectionId === collection);
  }
  if (filterBy.length > 0) {
    result = result.filter((product) => {
      return product.tags?.find((tag) => filterBy.includes(tag)) ? true : false;
    });
  }
  if (sortBy) {
    result = result.sort(sortBy.sortFn);
  }

  return result;
}