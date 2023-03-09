// api
import { getProducts, useGetProducts } from "./api/useGetProducts";

// context
import { ProductsContext } from "./context/productsContext";

// components
import FilterPanel from "./components/FilterPanel";
import MobileFilterMenu from "./components/MobileFilterMenu";
import FilteredProducts from "./components/FilteredProducts";

// hooks
import { useCategory } from "./hooks/useCategory";
import { useFilteredProducts } from "./hooks/useFilteredProducts";

export {
  getProducts,
  useGetProducts,
  ProductsContext,
  FilterPanel,
  MobileFilterMenu,
  FilteredProducts,
  useCategory,
  useFilteredProducts
};