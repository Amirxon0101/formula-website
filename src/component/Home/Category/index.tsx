import React, { useRef } from 'react';
import Shape from "../../../assets/icons/shape.svg";
import Category1 from '../../../assets/imgs/category1.jpg';
import Category2 from '../../../assets/imgs/category2.jpg';
import Category3 from '../../../assets/imgs/category3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselRight from '../../../assets/imgs/righticon.jpg';
import CarouselLeft from '../../../assets/imgs/lefticon.jpg';

const Category: React.FC = () => {
  const carouselRef = useRef<any>(null);

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
    <div className="flex relative mx-4 sm:mx-2 md:mx-6 lg:mx-[120px] mt-8 sm:mt-6 md:mt-10 lg:mt-16 2xl:mt-20 border-t border-r border-gray-300 sm:border-t-0 sm:border-r-0 flex-col xl:flex-row" >
      <div className=" flex lg:flex-row items-center lg:items-start lg:ml-[106px] mt-6 sm:mt-4 md:mt-8 lg:mt-0 2xl:ml-[240px]">
        <h4
          className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] font-semibold"
          style={{
            fontFamily: 'Helvetica',
            background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Pick a course by our popular category
        </h4>
        <img className="w-[20px] sm:w-[24px] md:w-[28px] lg:w-[32px] 2xl:w-[40px] ml-4 lg:ml-6 2xl:ml-8 xl:w-[150px]" src={Shape} alt="Shape" />
      </div>
      <div className="relative w-full sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] mt-6 sm:mt-[10px] md:mt-4 lg:mt-0 mb-[10px]">
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          showDots={false}
        >
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category1} alt="Category 1" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category2} alt="Category 2" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category3} alt="Category 3" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category1} alt="Category 1" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category2} alt="Category 2" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] mx-2 lg:w-[150px] lg:mx-4 xl:w-[180px] 2xl:w-[200px]" src={Category3} alt="Category 3" />
        </Carousel>
        <div className="absolute -translate-y-1/2 right-2 flex top-[0px]">
          <button
            onClick={() => carouselRef.current?.previous()}
            className="bg-white border-none outline-none cursor-pointer mb-2"
          >
            <img className="w-[20px] sm:w-[24px] md:w-[28px] lg:w-[32px] 2xl:w-[40px]" src={CarouselLeft} alt="Previous" />
          </button>
          <button
            onClick={() => carouselRef.current?.next()}
            className="bg-white border-none outline-none cursor-pointer mt-[-8px]"
          >
            <img className="w-[20px] sm:w-[24px] md:w-[28px] lg:w-[32px] 2xl:w-[40px]" src={CarouselRight} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
