import ViewTeachers from '../../../assets/icons/explore.svg'
import Teacher1 from '../../../assets/imgs/teacher1.jpg'
import Teacher2 from '../../../assets/imgs/teacher2.jpg'
import Teacher3 from '../../../assets/imgs/teacher3.jpg'
import Teacher4 from '../../../assets/imgs/teacher4.jpg'
import CarouselRight from '../../../assets/imgs/righticon.jpg'
import CarouselLeft from '../../../assets/imgs/lefticon.jpg'  
import Facebook from '../../../assets/icons/facebook.svg'
import Twitter from '../../../assets/icons/twitter.svg'
import Linkedin from '../../../assets/icons/linkedin.svg'
import Carousel from 'react-multi-carousel'
import { useRef } from 'react'
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
  return(
    <div className='relative flex pt-[80px] pl-[176px] mr-[120px] pb-[84px]' style={{borderRight: '1px solid rgba(30, 30, 30, 0.3)',borderBottom: '1px solid rgba(30, 30, 30, 0.3)'}}>
        <div>
        <h4 className="w-[324px] text-[40px] mb-[28px] "style={{fontWeight:'500',fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text'}}>
          Meet the teacher who teaches you online
        </h4>
        <p className='text-[16px] w-[420px] mb-[48px] mr-[80px]' style={{color: 'rgba(30, 30, 30, 0.7)',fontFamily:'Helvetica-normal'}}>online platforms often offer mico-courses or modules,allowing learners tofocus on specific topics of interest and acquire targeted skills.</p>
         <button className='flex items-center bg-white border-none' style={{borderBottom: '1px solid rgb(35, 45, 79)'}}><p className=' text-[24px]' style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica-normal',fontWeight:'400'}}>View all teachers</p><img src={ViewTeachers}/></button>
        </div>
        <div className=''>
            <Carousel className='w-[600px]'     responsive={responsive}
          ref={carouselRef}
          arrows={false}
          showDots={false}>
        <div className='relative'>
          <img className='w-[277px] ' src={Teacher1}/>
          <div className='absolute bottom-[32px] left-[90px]'>
            <span className='text-[24px]' style={{color: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Anjelina Joe</span>
            <p className='text-[16px] mt-[11px]' style={{fontFamily: 'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Desinger</p>
          </div>
          <div className='bottom-[5px] left-[5px] absolute rounded-[15px] w-[55px] h-[120px] flex flex-col items-center' style={{ background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%)', padding: '10px' }}>
              <a href='#' className='mb-[4px]'><img src={Facebook} alt="Facebook" /></a>
             <a href='#' className='mb-[4px]'><img src={Twitter} alt="Twitter" /></a>
              <a href='#' className=''><img src={Linkedin} alt="LinkedIn" /></a>
         </div>
        </div>
        <div className='relative  '>
          <img className='w-[277px] ' src={Teacher2} style={{background: 'linear-gradient(180.00deg, rgba(80, 173, 246, 0) 55.173%,rgb(0, 0, 0) 79.173%)'}}/>
          <div className='absolute bottom-[32px] left-[90px]'>
            <span className='text-[24px]' style={{color: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Sizan porte</span>
            <p className='text-[16px] mt-[11px]' style={{fontFamily: 'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Developer</p>
          </div>
          <div className='bottom-[5px] left-[5px] absolute rounded-[15px] w-[55px] h-[120px] flex flex-col items-center' style={{ background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%)', padding: '10px' }}>
              <a href='#' className='mb-[4px]'><img src={Facebook} alt="Facebook" /></a>
             <a href='#' className='mb-[4px]'><img src={Twitter} alt="Twitter" /></a>
              <a href='#' className=''><img src={Linkedin} alt="LinkedIn" /></a>
         </div>
        </div>
        <div className='relative '>
          <img className='w-[277px] ' src={Teacher3} style={{background: 'linear-gradient(180.00deg, rgba(80, 173, 246, 0) 55.173%,rgb(0, 0, 0) 79.173%)'}}/>
          <div className='absolute bottom-[32px] left-[90px]'>
            <span className='text-[24px]' style={{color: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Megan Forst</span>
            <p className='text-[16px] mt-[11px]' style={{fontFamily: 'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Developer</p>
          </div>
          <div className='bottom-[5px] left-[5px] absolute rounded-[15px] w-[55px] h-[120px] flex flex-col items-center' style={{ background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%)', padding: '10px' }}>
              <a href='#' className='mb-[4px]'><img src={Facebook} alt="Facebook" /></a>
             <a href='#' className='mb-[4px]'><img src={Twitter} alt="Twitter" /></a>
              <a href='#' className=''><img src={Linkedin} alt="LinkedIn" /></a>
         </div>
        </div>
        <div className='relative '>
          <img className='w-[277px] ' src={Teacher4} style={{background: 'linear-gradient(180.00deg, rgba(80, 173, 246, 0) 55.173%,rgb(0, 0, 0) 79.173%)'}}/>
          <div className='absolute bottom-[32px] left-[90px]' >
            <span className='text-[24px]' style={{color: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Rosy D Suza</span>
            <p className='text-[16px] mt-[11px]' style={{fontFamily: 'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Developer</p>
          </div>
          <div className='bottom-[5px] left-[5px] absolute rounded-[15px] w-[55px] h-[120px] flex flex-col items-center' style={{ background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%)', padding: '10px' }}>
              <a href='#' className='mb-[4px]'><img src={Facebook} alt="Facebook" /></a>
             <a href='#' className='mb-[4px]'><img src={Twitter} alt="Twitter" /></a>
              <a href='#' className=''><img src={Linkedin} alt="LinkedIn" /></a>
         </div>
        </div>
        
        </Carousel>
        <div className='absolute right-[0px] bottom-[]  flex items-center   '>
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
  )
};

export default Teachers;
