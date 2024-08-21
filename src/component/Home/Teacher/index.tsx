import ViewTeachers from '../../../assets/icons/explore.svg';
import Teacher1 from '../../../assets/imgs/teacher1.jpg';
import Teacher2 from '../../../assets/imgs/teacher2.jpg';
import Teacher3 from '../../../assets/imgs/teacher3.jpg';
import Teacher4 from '../../../assets/imgs/teacher4.jpg';
import CarouselRight from '../../../assets/imgs/righticon.jpg';
import CarouselLeft from '../../../assets/imgs/lefticon.jpg';  
import Facebook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';
import Carousel from 'react-multi-carousel';
import { useRef } from 'react';

const Teachers: React.FC = () => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  const teachers = [
    {
      image: Teacher1,
      name: 'Anjelina Joe',
      position: 'Desinger',
    },
    {
      image: Teacher2,
      name: 'Sizan porte',
      position: 'Developer',
    },
    {
      image: Teacher3,
      name: 'Megan Forst',
      position: 'Developer',
    },
    {
      image: Teacher4,
      name: 'Rosy D Suza',
      position: 'Developer',
    },
    
  ];

  return (
    <div className='relative flex flex-col lg:flex-row lg:pt-[80px] pt-[40px] lg:pl-[176px] pl-[40px] lg:pr-[120px] pr-[20px] pb-[84px] lg:border-r lg:border-b border-none' style={{ borderColor: 'rgba(30, 30, 30, 0.3)' }}>
      <div className='mb-8 lg:mb-0'>
        <h4 className="text-[32px] lg:text-[40px] lg:w-[324px] w-full mb-[28px]" style={{ fontWeight: '500', fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Meet the teacher who teaches you online
        </h4>
        <p className='text-[14px] lg:text-[16px] lg:w-[420px] w-full mb-[48px] lg:mr-[80px] mr-0' style={{ color: 'rgba(30, 30, 30, 0.7)', fontFamily: 'Helvetica-normal' }}>
          Online platforms often offer micro-courses or modules, allowing learners to focus on specific topics of interest and acquire targeted skills.
        </p>
        <button className='flex items-center bg-white border-none' style={{ borderBottom: '1px solid rgb(35, 45, 79)' }}>
          <p className='text-[20px] lg:text-[24px]' style={{ color: 'rgb(35, 45, 79)', fontFamily: 'Helvetica-normal', fontWeight: '400' }}>View all teachers</p>
          <img src={ViewTeachers} alt="View Teachers" />
        </button>
      </div>
      <div className='relative flex flex-col items-center'>
        <Carousel
          className='lg:w-[600px] w-full'
          responsive={responsive}
          ref={carouselRef}
          arrows={false}
          showDots={false}
        >
          {teachers.map((teacher, index) => (
            <div className='relative' key={index}>
              <img className='lg:w-[277px] w-full' src={teacher.image} alt={teacher.name} />
              <div className='absolute bottom-[32px] left-[90px]'>
                <span className='text-[20px] lg:text-[24px]' style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Helvetica-light' }}>{teacher.name}</span>
                <p className='text-[14px] lg:text-[16px] mt-[11px]' style={{ fontFamily: 'Helvetica-light', color: 'rgb(255, 255, 255)' }}>{teacher.position}</p>
              </div>
              <div className='absolute bottom-[5px] left-[5px] rounded-[15px] w-[55px] h-[120px] flex flex-col items-center' style={{ background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%)', padding: '10px' }}>
                <a href='#' className='mb-[4px]'><img src={Facebook} alt="Facebook" /></a>
                <a href='#' className='mb-[4px]'><img src={Twitter} alt="Twitter" /></a>
                <a href='#'><img src={Linkedin} alt="LinkedIn" /></a>
              </div>
            </div>
          ))}
        </Carousel>
        <div className='absolute right-0 bottom-[-24px] flex items-center'>
          <button
            onClick={() => carouselRef.current.previous()}
            className="border-none outline-none bg-white cursor-pointer"
          >
            <img className='w-[20px] lg:w-[24px]' src={CarouselLeft} alt="Previous" />
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            className="border-none outline-none bg-white cursor-pointer"
          >
            <img className='w-[20px] lg:w-[24px]' src={CarouselRight} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
