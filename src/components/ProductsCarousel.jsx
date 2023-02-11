import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { ProductCard } from '.'

const ProductsCarousel = ({ title, products }) => {
  const ref = useRef();
  let isDragStart = false;
  let canClickItems = true;
  let prevPageX, prevScrollLeft;

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = ref.current.scrollLeft;
  }

  const dragEnd = (e) => {
    e.preventDefault();
    ref.current.scrollLeft *= 1.1
    isDragStart = false;
    canClickItems = true;
  }

  const dragDragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault()
    if (canClickItems) {
      canClickItems = false;
    }
    let positionDiff = e.pageX - prevPageX;
    ref.current.scrollLeft = prevScrollLeft - positionDiff;
  }

  useEffect(() => {
    ref.current.addEventListener('mousedown', dragStart)
    ref.current.addEventListener('mousemove', dragDragging)
    ref.current.addEventListener('mouseup', dragEnd)
    ref.current.addEventListener('mouseleave', dragEnd)
  })

  return (
    <div className='pb-[50px] '>
      <p className='max-w-[1400px] m-auto mb-5 text-[24px] font-bold sm:px-10 px-4'>
        {title}
      </p>

      <div ref={ref} className='w-[100vw] overflow-scroll scrollbar-hide'>
        <div id='carousel' className='max-w-[1400px] m-auto sm:px-10 px-4'>
          <div className='w-[200vw] pb-10 cursor-grab'>
            <div className='flex gap-8 translate-x-0'>
              {products.map((product) => (
                // <Link key={product.id} href={canClickItems ? `/product/${product.id}` : ''}>
                <Link key={product.id} href={''}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousel