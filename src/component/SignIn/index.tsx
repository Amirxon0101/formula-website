import Footer from "../Footer";
import Navbar from "../Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Singin from '../../assets/imgs/SingIn.jpg';
import SingInBtn from '../../assets/icons/signInBtn.svg'
import SingInArrow from '../../assets/icons/signInArrow.svg'
import { useNavigate } from "react-router-dom";


const SingIn: React.FC = () => {
  const navigate = useNavigate();
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
      <div className="flex gap-[133px] pl-[170px] pt-[100px] pb-[62px] flex-wrap max-sm:pl-[6px] max-sm:pt-[26px] 
      sm:pt-[100px] sm:pl-[130px] md:pl-[170px] lg:pl-[50px] xl:pl-[170px] ">
        <div className="flex flex-col">
            <div className="order-1 lg:relative " >
                <h1 className="text-[96px] pb-[12px] max-sm:text-[36px] sm:text-[96px]" style={{fontFamily:'Helvetica', fontWeight:'500', color:'rgba(0, 0, 0, 0.8)'}}>HI THERE!</h1>
                <p className="text-[24px] pb-[46px] max-sm:text-[16px] max-sm:pb-[36px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.5)'}}>Welcome to our portal</p>
            </div>
            <div className="order-2 max-sm:order-3 sm:order-3 lg:order-2">
            <div className="pb-[34px] max-sm:w-[343px]">
                <GoogleOAuthProvider >
                    <GoogleLogin 
                    />
                </GoogleOAuthProvider>
            </div>
            <div className=" flex items-center justify-center gap-[22px] pb-[34px]">
                <div className="w-[150px] max-sm:w-[84px]" style={{borderTop:'1px solid rgba(30, 30, 30, 0.3)'}}></div> 
                <p className="text-[24px] max-sm:text-[13px]" style={{fontFamily:'Inter', fontWeight:'500' , color:'rgba(30, 30, 30, 0.4)'}}>or</p>
                <div className="w-[150px] max-sm:w-[84px]" style={{borderTop:'1px solid rgba(30, 30, 30, 0.3)'}}></div>
            </div>

            <div >
                <div className="pb-[24px] max-sm:pb-[16px]">
                    <input type="text" placeholder="Your email" className="py-[16px] px-[26px] rounded-[10px] text-[24px] w-[482px] 
                    max-sm:rounded-[7px] max-sm:py-[12px] max-sm:px-[16px] max-sm:text-[16px] max-sm:w-[343px]" style={{fontFamily:'Helvetica', fontWeight:'400',border:'1px solid rgba(30, 30, 30, 0.2)', color:'rgba(0, 0, 0, 0.7)'}} />
                </div>
                <div className="pb-[18px]">
                    <input type="password" placeholder="Password" className="py-[16px] px-[26px] rounded-[10px] text-[24px] w-[482px]
                    max-sm:rounded-[7px] max-sm:py-[12px] max-sm:px-[16px] max-sm:text-[16px] max-sm:w-[343px]" style={{fontFamily:'Helvetica', fontWeight:'400',border:'1px solid rgba(30, 30, 30, 0.2)', color:'rgba(0, 0, 0, 0.7)'}} />
                </div>
                <a href="#" className="text-[16px] flex justify-end pb-[35px] " style={{fontFamily:'Helvetica', fontWeight:'400' ,color:'rgba(243, 53, 193, 1)' , textDecoration:'none'}}>Forgot password</a>
                
                <div className="pb-[24px] relative">
                    <div className="relative">
                    <img src={SingInBtn} className="absolute top-0 right-0 " />
                    </div>
                    <img src={SingInArrow} className="absolute top-0 right-0 " />

                    <button className="w-[482px] text-[16px] py-[16px] 
                    max-sm:w-[343px]" style={{background:'linear-gradient(86.95deg, #C859FC 0%, #A344FF 106.22%)', color:'rgba(255, 255, 255, 1)', border:'none'}}>Sign in</button>
                </div>

                <div className="flex items-center gap-[5px] max-sm:justify-center">
                    <p className="text-[16px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(30, 30, 30)'}}>Don’t have an account?</p>
                    <a href="#" className="text-[16px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgb(38, 113, 254)', textDecoration:'none'}} onClick={()=>navigate('/SignUp')}>Sing up</a>
                </div>
            </div>
            </div>
            

            
        
            <div className="relative order-3 max-sm:order-2 max-sm:mb-[36px] sm:order-2 sm:mb-[36px] lg:order-3 lg:absolute lg:right-[10px] xl:pr-[100px]">
                <img src={Singin} alt="Sing In" className="max-sm:w-[343px] sm:w-[482px] "/>
                <p className="absolute bottom-[56px] left-[56px] w-[313px] text-[32px]
                max-sm:text-[24px] max-sm:left-[28px] max-sm:bottom-[28px] max-sm:w-[235px] 
                " style={{fontFamily:'Helvetica', fontWeight:'500', color:'rgba(255, 255, 255, 1)'}}>“Expand Your Horizons:Discover the World of Online Education.”</p>
            </div>
            </div>
      </div>


      {/* <div className="flex flex-col">
        <h1 className="p-4 order-1 md:order-1">1</h1>
        <h1 className="p-4 order-2 md:order-3">2</h1>
        <h1 className="p-4 order-3 md:order-2">3</h1>
      </div> */}

  
       <div className="py-[40px] text-center " style={{borderTop: '0.5px solid rgba(30, 30, 30, 0.2)',borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
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
  

  
  export default SingIn;