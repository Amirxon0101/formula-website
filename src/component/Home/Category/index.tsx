import React, { useRef } from 'react';
import Shape from "../../../assets/icons/shape.svg";
import Category1 from '../../../assets/imgs/category1.jpg';
import Category2 from '../../../assets/imgs/category2.jpg';
import Category3 from '../../../assets/imgs/category3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselRight from '../../../assets/imgs/righticon.jpg'
import CarouselLeft from '../../../assets/imgs/lefticon.jpg'
import DisRight from '../../../assets/imgs/disright.jpg'
import DisLeft from '../../../assets/imgs/disleft.jpg'


const Category: React.FC = () => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex relative  mr-[120px]" style={{borderTop:' 1px solid rgba(30, 30, 30, 0.3)',borderRight:' 1px solid rgba(30, 30, 30, 0.3)'}}>
      <div className="flex ml-[176px] mt-[80px]">
        <h4
          className="w-[324px] text-[40px] "
          style={{
            fontFamily: 'Helvetica',
            background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Pick a course by our popular category
        </h4>
        <img src={Shape} alt="Shape" />
      </div>
      <div className="w-[500px]  ml-[106px] mt-[80px] cursor-pointer">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          showDots={false}
        >
          <img className="w-[120px] mr-[24px]" src={Category1} alt="Category 1" />
          <img className="w-[120px] mr-[24px]" src={Category2} alt="Category 2" />
          <img className="w-[120px]" src={Category3} alt="Category 3" />
          <img className="w-[120px] mr-[24px]" src={Category1} alt="Category 1" />
          <img className="w-[120px] mr-[24px]" src={Category2} alt="Category 2" />
          <img className="w-[120px]" src={Category3} alt="Category 3" />
        </Carousel>
        <div className='flex items-center absolute top-[43px] right-[28px] '>
        <button
          onClick={() => carouselRef.current.previous()}
           className=" border-none outline-none bg-white cursor-pointer"
        
        >
          
          <img className='w-[24px]' src={CarouselLeft}/>
        </button>
        <button
          onClick={() => carouselRef.current.next()}
          className=" border-none outline-none bg-white cursor-pointer"
        >
        <img className='w-[24px]' src={CarouselRight}/>
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Category;
