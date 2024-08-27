import Footer from "../Footer";
import Navbar from "../Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GuaranteeTap from "../../assets/imgs/guaranteetap.jpg"
import Arrow from "../../assets/icons/arrow.svg"
import { bottomNavigationActionClasses, colors } from "@mui/material";
import ArrowButton from '../../assets/icons/arrowButton.svg'
import ScrollDown from '../../assets/icons/scrollDown.svg'
import { Placemark, YMaps } from '@pbe/react-yandex-maps';
import { Map } from "@pbe/react-yandex-maps";

const Contact: React.FC = () => {
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
  <div>
    <Navbar/>
    <div className="flex items-center pl-[180px] mb-[68px] 
    max-sm:mb-[20px] max-sm:items-center max-sm:pl-[25px] sm:gap-[30px] "  style={{borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
      <h2 className="text-[96px] mt-[120px] pb-[100px] 
      max-sm:pr-[80px] max-sm:text-[26px] 
      sm:text-[36px] sm:pl-[26px] sm:pb-[50px] sm:items-center 
      md:text-[56px] md:pr-[30px]
      lg:text-[96px] lg:pr-[50px] lg:mt-[120px] lg:pb-[100px] lg:pl-[10px] 
      xl:pr-[200px]" style={{ fontFamily: 'Helvetica', fontWeight: '500', color: 'rgba(0, 0, 0, 0.8)' }}>LET’S WORK TOGETHER</h2>
      <img 
      src={GuaranteeTap} 
      width={219}
      height={219}
      className="mr-[223px] max-sm:w-[90px] max-sm:h-[90px] sm:w-[120px] sm:h-[120px] sm:mr-[100px] sm:mt-[30px] md:w-[190px] md:h-[190px] 
      lg:mr-[223px] lg:w-[219px] lg:h-[219px]"
      /> 
    </div>
    <div className="pr-[120px] ml-[223px] max-sm:ml-[16px] max-sm:pr-[30px] sm:pr-[60px] sm:ml-[50px]">
    <div style={{borderRight: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
        <h3 className="text-[24px]" style={{fontFamily:'Helvetica' , fontWeight:'400', color:'rgba(0, 0, 0, 0.5)'}}>Course</h3>
      <div className="flex gap-[10px] flex-wrap ">
        <button className="mt-[32px] py-[6px] px-[14px] text-[16px] rounded-[18px] flex justify-center items-center" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(255, 255, 255, 1)', background:'rgba(163, 69, 254, 1)' , border:'none '}}>
          <img src={Arrow} alt="" />
          UI/UX Designing
          </button>
        <button className=" mt-[32px] py-[10px] px-[28px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Designing
        </button>
        <button className=" mt-[32px] py-[10px] px-[26px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Web devolopment
          </button>
        <button className="mt-[32px] py-[10px] px-[26px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          AI
        </button>
        <button className="mt-[32px] py-[10px] px-[30px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Machine learning
        </button>
        <button className="mt-[32px] py-[10px] px-[20px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Wordpress development
        </button>
        <button className=" mt-[32px] py-[10px] px-[28px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Laravel Development
        </button>
        <button className=" mt-[32px] py-[10px] px-[28px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Javascript Development
        </button>
        <button className="mt-[32px] py-[10px] px-[26px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          C++
        </button>
        <button className="mt-[32px] py-[10px] px-[28px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          Python
        </button>
        <button className="mt-[32px] py-[10px] px-[28px] text-[16px] rounded-[18px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(35, 45, 79)', background:'rgb(255, 255, 255)' , border: '0.5px solid rgb(35, 45, 79)'}}>
          More+
        </button>
      </div>
      <h3 className="text-[24px] pt-[56px]" style={{fontFamily:'Helvetica', fontWeight:'400' , color:'rgba(0, 0, 0, 0.5)'}}>Your budget</h3>
      <div className="flex flex-wrap gap-[32px] mt-[33px] pb-[80px]">
        <button className="rounded-[30px] py-[12px] px-[30px] text-[16px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(35, 45, 79, 1)', background:'rgba(255, 255, 255, 1)' ,border:' 0.5px solid rgb(35, 45, 79)'}}>$0-10$</button>

        <button className="rounded-[30px] py-[12px] px-[30px] text-[16px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(35, 45, 79, 1)', background:'rgba(255, 255, 255, 1)' ,border:' 0.5px solid rgb(35, 45, 79)'}}>$10-30$</button>

        <button className="rounded-[30px] py-[12px] px-[24px] flex items-center gap-[6px] text-[16px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(255, 255, 255, 1)', background:'rgba(163, 69, 254, 1)',border:' 0.5px solid rgb(35, 45, 79)'}}>
          <img src={Arrow}/>30$-50$</button>

        <button className="rounded-[30px] py-[12px] px-[30px] text-[16px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(35, 45, 79, 1)', background:'rgba(255, 255, 255, 1)',border:' 0.5px solid rgb(35, 45, 79)'}}>$50-80$</button>

        <button className="rounded-[30px] py-[12px] px-[30px] text-[16px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(35, 45, 79, 1)', background:'rgba(255, 255, 255, 1)',border:' 0.5px solid rgb(35, 45, 79)'}}>$80-More</button>
      </div>
    </div>  
    </div>


    <div style={{ borderTop: '0.5px solid rgba(30, 30, 30, 0.2)', borderBottom:'0.5px solid rgba(30, 30, 30, 0.2)'}} className="flex pb-[80px] max-sm:pb-0 sm:pb-0 md:pb-[60px]">
      <div style={{borderRight: '0.5px solid rgba(30, 30, 30, 0.2)'}} className="flex mr-[159px] pt-[50px] items-center max-sm:mr-[32px] sm:mr-[32px] md:mr-[12px]
      lg:mr-[159px] lg:pt-[50px]">
        <h3 className=" flex rotate-90 text-[16px] gap-[8px] max-sm:text-[12px] max-sm:w-[92px] max-sm:h-[12px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(30, 30, 30, 0.7)' ,}}>SCROLL DOWN <img style={{rotate:'270deg'}} src={ScrollDown} className="max-sm:w-[17px] max-sm:h-[17px]"/> </h3>
      </div>
      <div className="flex justify-center pt-[80px] max-sm:flex-col sm:flex-col md:flex-row md:flex-wrap md:pt-[50px] lg:flex-row lg:flex lg:justify-center" >
        <div className="pr-[184px]" >
          <p className="text-[24px] max-sm:text-[16px] sm:text-[16px] sm:pt-[32px] lg:text-[24px] " style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(0, 0, 0, 0.5)', outline:'none'}}>What’s your name</p>
          <input type="text " placeholder="Albert Forst"  className="pb-[8px] pt-[36px] text-[24px] max-sm:text-[16px] max-sm:pt-[16px] sm:text-[16px] lg:pb-[8px] lg:pt-[36px] lg:text-[24px]"  style={{border:'none', borderBottom: '1px solid rgba(0, 0, 0, 0.8)', color:'rgba(0, 0, 0, 0.8)'}}/>
        </div>
        <div >
          <h3 className="text-[24px] lg:pt-[30px] max-sm:text-[16px] max-sm:pt-[28px] sm:text-[16px] sm:pt-[28px] lg:text-[24px]" style={{fontFamily:'Helvetica' ,fontWeight:'400', color:'rgba(0, 0, 0, 0.5)', outline:'none'}}>What’s your email address </h3>
          <input type="email" placeholder="eg.setup@gmail.com" className="pb-[8px] pt-[36px] text-[24px] max-sm:text-[16px] max-sm:pt-[16px] sm:text-[16px] lg:pb-[8px] lg:pt-[36px] lg:text-[24px]" style={{border:'none', borderBottom: '1px solid rgba(0, 0, 0, 0.8)', color:'rgba(0, 0, 0, 0.3)'}}/>
        </div>

        <div className="pl-[73px] mt-[20px] max-sm:pl-0 sm:pl-0 md:pl-[20px] lg:pl-[73px] lg:mt-[20px]">
        <button className="py-[16px] px-[40px] max-sm:py-[5px] max-sm:px-[12px] max-sm:rounded-[5px] max-sm:gap-[8px] rounded-[15px] gap-[16px] flex items-center my-[16px]" style={{background:'rgb(36, 85, 214)' , color:'rgb(255, 255, 255)', fontFamily:'Helvetica' ,fontWeight:'400' ,border:'none'}}>
          <img src={ArrowButton} alt="" />
          Sent now
        </button>
        </div>
      </div>
    </div>

    <div className="flex justify-center pt-[80px] pb-[100px] gap-[163px] max-sm:flex-col max-sm:pt-[55px] max-sm:gap-[32px] max-sm:pb-[74px] sm:flex-col
    sm:pt-[55px] sm:gap-[32px] sm:pb-[74px] md:gap-[50px] md:flex-row"> 
      <div className="pt-[80px] max-sm:pl-[16px] max-sm:pt-0 sm:pl-[50px] md:pl-[50px] md:pt-[40px]">
        <div className="w-[174px] md:ml-[30px]">
          <h3 className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.5)' , fontFamily:'Helvetica', fontWeight:'400'}}>Call us</h3>
          <p className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.8)' ,fontFamily:'Helvetica', fontWeight:'400'}}>0191 410 4155</p>
          <p className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.8)' ,fontFamily:'Helvetica', fontWeight:'400'}}>0191 410 5234</p>
        </div>

        <div className="w-[319px] pt-[78px] md:ml-[30px] max-sm:w-[196px] max-sm:pt-[24px] sm:w-[196px]">
          <h3 className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.5)' , fontFamily:'Helvetica', fontWeight:'400'}}>Address</h3>
          <p className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.8)' ,fontFamily:'Helvetica', fontWeight:'400'}}>5/E9,Durham Rd,Chester le Street,UK - DH3 2QZ</p>
        </div>

        <div className="w-[257px] pt-[78px] md:ml-[30px] max-sm:pt-[24px]">
          <h3 className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.5)' , fontFamily:'Helvetica', fontWeight:'400'}}>Email address</h3>
          <a href="email" className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.8)' ,fontFamily:'Helvetica', fontWeight:'400' ,textDecoration:'none'}}>official@edumate.com</a>
        </div>

        <div className="w-[226px] pt-[78px] md:ml-[30px] max-sm:pt-[24px]">
          <h3 className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.5)' , fontFamily:'Helvetica', fontWeight:'400'}}>Web site</h3>
          <a href="#" className="text-[26px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{color:'rgba(0, 0, 0, 0.8)' ,fontFamily:'Helvetica', fontWeight:'400', textDecoration:'none'}}>www.edumate.com</a>
        </div>
      </div>
      <div className="md:mr-[30px]">
      <YMaps>
      <Map
        defaultState={{
          center: [41.3280359,69.3120316], 
          zoom: 9,
        }}
        width="543px"
        height="775px"
        className="max-sm:w-[342px] max-sm:h-[217px] max-sm:ml-[16px] sm:ml-[50px] sm:w-[342px] sm:h-[217px] md:w-[350px] md:h-[550px]"
      >
        <Placemark geometry={[41.3280359,69.3120316]} />
      </Map>
    </YMaps>

      </div>
    </div>

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

export default Contact;
