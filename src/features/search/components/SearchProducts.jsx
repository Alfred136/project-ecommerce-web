import { ProductCardBig } from "@/features/products"

const SearchProducts = ({ products }) => {
  return (
    <div className='w-full flex flex-wrap'>
      {products?.map((product) => (
        <ProductCardBig
          key={product._id}
          product={product}
        />
      ))}

      {products.length === 0 ?
        <span className='w-full text-center'>
          No products found
        </span> : null
      }
    </div>
  )
}

export default SearchProducts