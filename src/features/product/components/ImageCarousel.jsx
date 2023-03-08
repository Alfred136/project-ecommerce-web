import { urlFor } from "@/lib/sanityClient";
import Carousel from "react-bootstrap/Carousel";

const imgClass = 'w-full md:h-[75vh] h-[60vh] object-cover skeleton';

const ImageCarousel = ({ image }) => (
  <div className='md:w-[50%] w-full h-full'>
    <Carousel prevLabel='' nextLabel=''>
      {image?.length > 0
        ?
        image?.map((img) => (
          <Carousel.Item key={img._key}>
            <img
              src={urlFor(img)}
              className={imgClass}
            />
          </Carousel.Item>
        ))
        : <Carousel.Item>
          <img
            src='/no-image.png'
            className={imgClass}
          />
        </Carousel.Item>}
    </Carousel>
  </div>
)

export default ImageCarousel