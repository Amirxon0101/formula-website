import React from "react";
import "swiper/css";
import Navbar from "../Navbar";
import Shape from "../../assets/icons/shape.svg"
import { Avatar, Tooltip } from "antd";
import Girl from '../../assets/icons/girl.svg'
import Aboutimg from '../../assets/imgs/aboutimg.jpg'
import Explore from '../../assets/icons/explore.svg'
import Learning from "../Home/Learning";
import Category from "../Home/Category";
import Comment from "../Home/Comment";
import Footer from "../Footer";
import Buttonicon from '../../assets/icons/buttonicon.svg'
import Aboutsmallimg1 from '../../assets/imgs/aboutsmallimg.jpg'
import Aboutsmallimg2 from '../../assets/imgs/aboutsmallimg2.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Install Swiper modules

const About: React.FC = () => {
  const settings = {
    
    infinite: true,
    speed: 2000, // Speed of the swipe
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600, // Set to 0 for continuous swiping
    cssEase: 'ease', // Smooth transition
    pauseOnHover: false, // Prevent autoplay from stopping on hover
    pauseOnFocus: false, // Prevent autoplay from stopping on focus
    responsive: [
      {
        breakpoint: 1200, // Extra large screens (lg, xl)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <div className="bg-red mb-[100px]">
     <Navbar/>
     </div>
     <div className="flex flex-col ml-[20px] mr-[20px] sm:ml-[50px] sm:mr-[50px] md:ml-[100px] md:mr-[100px] lg:ml-[150px] lg:mr-[150px] xl:ml-[222px] xl:mr-[222px]">
  <div className="flex flex-row sm:flex-row items-center">
    <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[96px]" style={{ fontFamily: 'Helvetica', fontWeight: '500', color: 'rgba(0, 0, 0, 0.8)' }}>
      WHO WE ARE
    </h2>
    <img className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[127px] mt-[10px] sm:mt-0" style={{ transform: 'rotate(23.28deg)' }} src={Shape} />
  </div>
  
  <div className="flex flex-col sm:flex-row items-center justify-between pb-[30px] sm:pb-[50px] md:pb-[60px] lg:pb-[70px] mb-[20px] sm:mb-[30px] md:mb-[35px] lg:mb-[41px]" style={{ borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)' }}>
    <p className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[427px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-[10px] sm:mt-[20px] md:mt-[23px] lg:mt-[26px]" style={{ fontFamily: 'Helvetica', color: 'rgba(0, 0, 0, 0.7)', lineHeight: '24px' }}>
      While online education has numerous advantages, there are also challenges and considerations to be aware of.
    </p>
    
    <div className="text-center flex flex-col items-center mt-[20px] sm:mt-0 sm:ml-[30px] md:ml-[40px] lg:ml-[50px]">
      <Avatar.Group>
        <img src={Girl} alt="Girl Avatar" />
        <a href="https://ant.design">
          <img src={Girl} alt="Girl Avatar" />
        </a>
        <Tooltip title="Ant User" placement="top">
          <img src={Girl} alt="Girl Avatar" />
        </Tooltip>
        <img src={Girl} alt="Girl Avatar" />
      </Avatar.Group>
      <span className="mt-2 text-center" style={{ fontFamily: 'Helvetica-light', color: 'rgb(30, 30, 30)' }}>student passed</span>
    </div>
  </div>

  <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[60px]">
    <img className="w-full sm:w-[750px] md:w-[850px] lg:w-[900px] xl:w-[995px]" src={Aboutimg} />
  </div>

  <div className="flex mt-[36px] mb-[75px] sm: flex-col xl:flex-row lg:flex-row">
  <span className="w-[140px] text-[16px] mr-[53px]" style={{color: 'rgb(35, 45, 79)', fontFamily:'Helvetica', fontWeight:'400'}}>
    More than 26,000+ courses from us
  </span>
  <div>
    <button className="px-[22px] py-[10px] rounded-[18px] text-[16px] mr-[26px] mt-[10px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px]" style={{ fontFamily:'Helvetica', fontWeight:'400', color: 'rgb(35, 45, 79)', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(35, 45, 79)'}}>
      Web development
    </button>
    <button className="px-[22px] py-[10px] rounded-[18px] text-[16px] mr-[26px] mt-[10px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px]" style={{ fontFamily:'Helvetica', fontWeight:'400', color: 'rgb(35, 45, 79)', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(35, 45, 79)'}}>
      Designing
    </button>
    <button className="px-[12px] rounded-[18px] text-[16px] pb-[7px] pt-[7px] border-none mr-[26px] mt-[10px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px]" style={{ background: 'rgb(163, 69, 254)' }}>
      <img className="h-[19px] w-[18px]" src={Buttonicon} style={{ transform: 'rotate(-5.00deg)' }}/>
      <span className="pb-[10px] pl-[5px] text-[16px]" style={{ color: 'rgb(255, 255, 255)', fontFamily:'Helvetica', fontWeight:'400' }}>UI/UX Designing</span>
    </button>
    <button className="px-[26px] py-[10px] rounded-[18px] text-[16px] mr-[26px] mt-[10px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px]" style={{ fontFamily:'Helvetica', fontWeight:'400', color: 'rgb(35, 45, 79)', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(35, 45, 79)'}}>
      AI
    </button>
    <button className="px-[19px] py-[10px] rounded-[18px] text-[16px] mt-[10px] sm:mt-[10px] md:mt-[10px] lg:mt-[10px] xl:mt-[10px]" style={{ fontFamily:'Helvetica', fontWeight:'400', color: 'rgb(35, 45, 79)', background: 'rgb(255, 255, 255)', border: '0.5px solid rgb(35, 45, 79)'}}>
      Machine learning
    </button>
  </div>
</div>

</div>

     <Learning/>
     <div className="pb-[75px]"style={{borderBottom:' 0.5px solid rgba(30, 30, 30, 0.2)'}}>
     <div className="flex items-center flex-col md:flex-row md:flex-col lg:flex-col xl:flex-row">
  <div className="flex flex-row sm:flex-row items-center ml-[10px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] xl:ml-[223px]">
    <div className="">
      <h3
        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[400] leading-[40px] tracking-wide text-left w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[435px]"
        style={{
          fontFamily: 'Helvetica',
          background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Unlock Your Potential, Learn Online!
      </h3>
    </div>
    <img
      className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mt-[20px] sm:mt-0"
      style={{ transform: 'rotate(23.28deg)' }}
      src={Shape}
    />
  </div>

  <div className="mt-[20px] md:mt-0 ml-[10px] md:ml-[30px] lg:ml-[60px] xl:ml-[120px]">
    <button
      className="border-none flex items-center w-[150px] sm:w-[164px] md:w-[184px] justify-between bg-white border-b-[1px] border-[rgb(35,45,79)]"
    >
      <span
        className="text-[20px] sm:text-[22px] md:text-[24px]"
        style={{
          fontFamily: 'Helvetica-normal',
          color: 'rgb(35, 45, 79)',
          fontWeight: '400',
        }}
      >
        Explore now
      </span>
      <img src={Explore} />
    </button>
  </div>
</div>

<div className="pl-[10px] sm:pl-[30px] md:pl-[10px] lg:pl-[150px] xl:pl-[222px] ">
  <div className="flex flex-col md:flex-row ml-[10px] sm:ml-[50px] md:ml-[1px] lg:ml-[50px] xl:ml-[250px]">
    <img className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[410px] xl:w-[440px]" src={Aboutsmallimg1} />
    <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[80px] xl:ml-[100px]">
      <span className="text-[20px] sm:text-[22px] md:text-[24px]" style={{ fontFamily: 'Helvetica', fontWeight: '500' }}>
        Who we are
      </span>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] w-[280px] sm:w-[300px] md:w-[320px] mt-[20px] sm:mt-[25px] md:mt-[30px]" style={{ fontFamily: 'Helvetica', fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)' }}>
        Online education has gained significant popularity and importance in recent years, especially with the advancements in technology and increased accessibility to the internet.
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse md:flex-row mt-[-20px] sm:mt-[-50px] md:mt-[-70px] lg:mt-[-90px] ">
    <div className="mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[130px] xl:mt-[150px] mr-[5px] sm:mr-[10px] md:mr-[15px]">
      <span className="text-[20px] sm:text-[22px] md:text-[24px]" style={{ fontFamily: 'Helvetica', fontWeight: '500' }}>
        Who we are
      </span>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] w-[280px] sm:w-[300px] md:w-[320px] mt-[20px] sm:mt-[25px] md:mt-[30px]" style={{ fontFamily: 'Helvetica', fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)' }}>
        Online education has gained significant popularity and importance in recent years, especially with the advancements in technology and increased accessibility to the internet.
      </p>
    </div>
    <img className="w-[300px]  sm:w-[340px] mt-[20px] md:w-[380px]   lg:w-[410px] xl:w-[440px]" src={Aboutsmallimg2} />
  </div>
</div>

     </div>
     <Category/>
     <div className="" style={{borderTop: '0.5px solid rgba(30, 30, 30, 0.2)'}}></div>
     <Comment/>
     <div className="py-[40px] text-center" style={{borderTop: '0.5px solid rgba(30, 30, 30, 0.2)',borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
     <Slider {...settings}>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>udemy</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>coursera</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>Google</h3>
      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>Cognizant</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>udemy</h3>      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>coursera</h3>
      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>Google</h3>
      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>Cognizant</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>udemy</h3>      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>coursera</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>Google</h3>
      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>Cognizant</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>udemy</h3>     
       </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>coursera</h3>
      </div>
      <div>
      <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.3)',fontFamily:'Helvetica'}}>Google</h3>
      </div>
      <div>
        <h3 className="text-[32px]" style={{color: 'rgba(0, 0, 0, 0.4)'}}>Cognizant</h3>
      </div>
    </Slider>
    </div>
     <Footer/>
    </div>
  );
};
export default About;
