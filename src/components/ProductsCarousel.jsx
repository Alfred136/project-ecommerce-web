import React, { useEffect, useRef } from 'react'
import { ProductCard } from '.'

const ProductsCarousel = ({ title, products }) => {
  const ref = useRef();
  let isDragStart = false;
  let prevPageX, prevScrollLeft, clientXonMouseDown, clientYonMouseDown;

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = ref.current.scrollLeft;
    clientXonMouseDown = e.clientX;
    clientYonMouseDown = e.clientY;
  }

  const dragEnd = (e) => {
    e.preventDefault();
    isDragStart = false;
  }

  const dragDragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX;
    ref.current.scrollLeft = prevScrollLeft - positionDiff;
  }

  const dragClick = (e) => {
    e.stopPropagation()
    // prevent link click if the element was dragged
    if (clientXonMouseDown !== e.clientX ||
      clientYonMouseDown !== e.clientY) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    ref.current.addEventListener('mousedown', dragStart)
    ref.current.addEventListener('mousemove', dragDragging)
    ref.current.addEventListener('mouseup', dragEnd)
    ref.current.addEventListener('mouseleave', dragEnd)
    ref.current.addEventListener('click', dragClick)
  })

  return (
    <div className='pb-[50px] '>
      <p className='max-w-[1400px] m-auto mb-5 text-[24px] font-bold sm:px-10 px-4'>
        {title}
      </p>

      <div ref={ref} className='w-[100vw] overflow-scroll scrollbar-hide'>
        <div className='max-w-[1400px] m-auto sm:px-10 px-4'>
          <div className='w-fit pb-10 sm:pr-[60px] pr-[32px] cursor-grab'>
            <div className='flex gap-8 translate-x-0'>
              {products?.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousel