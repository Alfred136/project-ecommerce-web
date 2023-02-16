import { useRouter } from "next/router";
import { categories } from "@/constant";

export const useCategory = () => {
  const router = useRouter();
  const category = router.query.category;
  const categoryTitle = (categories.find((cat) => cat.id === category)?.name || 'Collections');

  return { category, categoryTitle };
};