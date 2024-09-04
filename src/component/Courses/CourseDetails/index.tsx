import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
import CourseImg from '../../../assets/imgs/CourseImage.jpg'
import Tic1 from '../../../assets/imgs/tick1.jpg'
import Tic2 from '../../../assets/imgs/tick2.jpg'
import Tic3 from '../../../assets/imgs/tick3.jpg'
import Tic4 from '../../../assets/imgs/tick4.jpg'
import Tic5 from '../../../assets/imgs/tick5.jpg'
import TeacherComment from '../../../assets/imgs/teachercomment3.jpg'
import Star from '../../../assets/icons/star.svg'
import Buycourse from '../../../assets/icons/buycourseimg.svg'
import Addcourse from '../../../assets/icons/addcourse.svg'
import CourseCart1 from '../../../assets/icons/courseCart1.svg'
import CourseCart2 from '../../../assets/icons/courseCart2.svg'
import CourseCart3 from '../../../assets/icons/courseCart3.svg'
import CourseCart4 from '../../../assets/icons/courseCart4.svg'
import CourseCart5 from '../../../assets/icons/courseCart5.svg'

const CourseDetails: React.FC = () => {
  const navigate = useNavigate()
    const settings = {
      
      infinite: true,
      speed: 2000, // Speed of the swipe
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1600, 
      cssEase: 'ease',
      pauseOnHover: false, 
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1200, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, 
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
            <div className="flex gap-[30px] pt-[72px] pl-[80px] flex-wrap max-sm:pl-[2px] md:pt-[110px] sm:pl-[50px] sm:pr-4 sm:pt-[130px]
            md:pl-[50px] lg:pl-[80px] xl:pl-[100px] pb-[85px] max-sm:pb-[64px] sm:pb-[64px] md:pb-[70px] lg:pb-[85px]">
            <div >
            <div className="pb-[48px] max-sm:pb-[32px]" >
                <h1 className="pb-[40px] text-[48px] max-sm:text-[28px] max-sm:w-[236px] sm:text-[38px] md:text-[48px]" style={{fontFamily:'Helvetica', fontWeight:'500', color:'rgba(174, 75, 254, 1)'}}>
                Basics of UI/UX designing
                </h1>
                <img src={CourseImg} onClick={()=>navigate('/Courses/details/video')} className="w-[756px] h-[453px] max-sm:w-[343px] max-sm:h-[206px] sm:w-[543px] sm:h-[306px] md:w-[700px] md:h-[400px]" />
            </div>
            <div className="w-[756px] rounded-[10px] pt-[28px] pl-[28px] pr-[28px] pb-[5px] mb-[48px] 
            max-sm:w-[343px] max-sm:pt-[13px] max-sm:pl-[16px] max-sm:pr-[9px] max-sm:pb-[33px] 
            sm:w-[543px] sm:h-[306px] md:w-[700px] md:pt-[28px] md:pl-[28px] md:pr-[28px] md:pb-[5px] md:mb-[48px]" style={{border:'1px solid rgba(30, 30, 30, 0.3)'}}>
                <h2 className="text-[32px] mb-[24px] max-sm:mb-[16px] max-sm:text-[24px] sm:text-[24px] md:text-[32px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(174, 75, 254, 1)'}}>Description.</h2>
                <p className="text-[16px]" style={{fontFamily:'Helvetica', fontWeight:'400',color:'rgba(0, 0, 0, 0.6)'}}> Lorem ipsum dolor sit amet consectetur. Augue commodo nec interdum facilisis eleifend. Tempor sed turpis eu neque semper congue. Venenatis tellus habitant cursus faucibus leo diam interdum ut. Tempor at nibh vulputate tempor leo odio tincidunt. In ac amet condimentum nullam. Sit nunc turpis lorem vulputate nibh. Tellus tellus lacinia tortor placerat metus enim pellentesque proin. Urna ultrices sed gravida sed lorem ornare sed. Adipiscing purus pharetra iaculis sed enim. Cursus blandit sit id pellentesque urna. Purus elit malesuada nisl integer gravida. Viverra in faucibus fames a ipsum ipsum pulvinar maecenas. Sagittis tortor quisque lorem nunc nunc sem quisque rhoncus morbi. Ultricies proin morbi sed sagittis quam. </p>
            </div>
            <div className="w-[756px] rounded-[10px] py-[32px] px-[28px] 
            max-sm:w-[343px] max-sm:pl-[12px] max-sm:pr-[16px] max-sm:py-[18px] 
            sm:w-[543px] sm:h-[306px] sm:pl-[12px] sm:pr-[16px]
            md:w-[700px] md:py-[32px] md:px-[28px]" style={{border: '1px solid rgba(30, 30, 30, 0.3)'}}>
                <h2 className="text-[32px] mb-[28px] 
                max-sm:text-[22px] max-sm:mb-[15px] 
                sm:text-[22px] md:text-[32px] md:mb-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(174, 75, 254, 1)'}}>What you’ll learn</h2>
                <div className="flex items-center gap-[14px] max-sm:gap-[4px]">
                    <img src={Tic1} width={40} height={40} className="max-sm:w-[23px] max-sm:h-[23px] sm:h-[23px] sm:w-[23px]"/>
                    <p className="text-[24px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.9)'}}> The principles of User Interface Design and Prototyping </p>
                </div>
                <div className="flex items-center gap-[14px] pt-[24px]  max-sm:gap-[4px] sm:pt-[20px]">
                    <img src={Tic2} width={40} height={40} className="max-sm:w-[23px] max-sm:h-[23px] sm:h-[23px] sm:w-[23px]"/>
                    <p className="text-[24px] max-sm:text-[16px]  sm:text-[16px] md:text-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.9)'}}> The basics of Human-computer Intera </p>
                </div>
                <div className="flex items-center gap-[14px] pt-[24px] max-sm:gap-[4px] sm:pt-[20px]">
                    <img src={Tic3} width={40} height={40} className="max-sm:w-[23px] max-sm:h-[23px] sm:h-[23px] sm:w-[23px]"/>
                    <p className="text-[24px] max-sm:text-[16px]  sm:text-[16px] md:text-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.9)'}}> How to read a User Flow Diagram</p>
                </div>
                <div className="flex items-center gap-[14px] pt-[24px] max-sm:gap-[4px] sm:pt-[20px]">
                    <img src={Tic4} width={40} height={40}  className="max-sm:w-[23px] max-sm:h-[23px] sm:h-[23px] sm:w-[23px]"/>
                    <p className="text-[24px] max-sm:text-[16px]  sm:text-[16px] md:text-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.9)'}}> How tu use Figma and its given tools</p>
                </div>
                <div className="flex items-center gap-[14px] pt-[24px] max-sm:gap-[4px] sm:pt-[20px]">
                    <img src={Tic5} width={40} height={40} className="max-sm:w-[23px] max-sm:h-[23px] sm:h-[23px] sm:w-[23px]"/>
                    <p className="text-[24px] max-sm:text-[16px] sm:text-[16px] md:text-[20px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.9)'}}>How to design within Figma</p>
                </div>
            </div>
            <div className="w-[756px] rounded-[10px] mt-[48px] pt-[36px] pb-[20px] pl-[28px] pr-[9px] 
            max-sm:w-[343px] max-sm:rounded-[4px] max-sm:pl-[12px] max-sm:pt-[18px] max-sm:mt-[32px]
            sm:w-[543px] md:w-[700px]" style={{border: '1px solid rgba(30, 30, 30, 0.3)'}}>
                <h2 className="text-[32px] mb-[28px] max-sm:text-[26px] sm:text-[26px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(174, 75, 254, 1)'}}>About the instructor</h2>
                    <div>
                        <div  className="flex items-center gap-[36px] pb-[38px] max-sm:gap-[16px] max-sm:pb-[30px]">
                            <img src={TeacherComment} width={120} height={120} className="rounded-full max-sm:w-[55px] max-sm:h-[55px] sm:w-[85px] sm:h-[85px]"/>
                            <div>
                                <h2 className="text-[26px] pb-[3px] max-sm:text-[16px] sm:text-[20px] max-sm:pb-0" style={{fontFamily:'Helvetica', fontWeight:'500', color:'rgba(35, 45, 79, 1)'}}>Warren Daniel</h2>
                                <p className="text-[26px] pb-[8px] max-sm:text-[16px] sm:text-[20px] max-sm:pb-0" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(35, 45, 79, 0.6)'}}>UI/UX designer</p>

                                <img src={Star} alt="Star" width={24} height={24} className="max-sm:w-[15px] max-sm:h-[15px]"/>
                                <img src={Star} alt="Star" width={24} height={24} className="max-sm:w-[15px] max-sm:h-[15px]"/>
                                <img src={Star} alt="Star" width={24} height={24} className="max-sm:w-[15px] max-sm:h-[15px]"/>
                                <img src={Star} alt="Star" width={24} height={24} className="max-sm:w-[15px] max-sm:h-[15px]"/>
                                <img src={Star} alt="Star" width={24} height={24} className="max-sm:w-[15px] max-sm:h-[15px]"/>
                            </div>
                        </div>
                        <div className="pb-[38px] max-sm:pb-[30px]">
                            <p className="text-[24px] pb-[18px] max-sm:text-[16px] max-sm:pb-[14px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>UI/UX Designer,with 7+ Years Experience Guarantee of High Quality Work.</p>
                            <p className="text-[24px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>Cursus blandit sit id pellentesque urna. Purus elit malesuada nisl integer gravida. Viverra in faucibus fames a ipsum ipsum pulvinar maecenas. Sagittis tortor quisque lorem nunc nunc sem quisque rhoncus morbi. Ultricies proin morbi sed sagittis quam. </p>
                        </div>
                        <div>
                            <h2 className="text-[24px] pb-[16px] max-sm:text-[16px] max-sm:pb-[12px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>Available for</h2>
                            <p className="text-[24px] pb-[10px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>1.Full Time Office Work</p>  
                            <p className="text-[24px] pb-[10px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>2.Remote Work</p>  
                            <p className="text-[24px] pb-[10px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>3.Freelance</p>  
                            <p className="text-[24px] pb-[10px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>4.Contact</p>  
                            <p className="text-[24px] pb-[10px] max-sm:text-[16px] sm:text-[20px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(0, 0, 0, 0.7)'}}>5.Worldwide</p>  
                        </div>
                    </div>
            </div>
            </div>
            <div className="flex flex-col rounded-[10px] h-[503px] pt-[28px] pb-[23px] px-[36px] mt-[88px] 
            max-sm:w-[343px] max-sm:h-[472px] max-sm:px-[24px] max-sm:pb-[22px] max-sm:mt-[32px] max-sm:mb-[64px]
            sm:mt-[32px] md:mt-[50px] lg:mt-[88px]" style={{border: '1px solid rgba(30, 30, 30, 0.3)'}}>
                <div className="flex items-center justify-center gap-[12px] ">
                    <p className="text-[16px] max-sm:text-[12px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}>Price</p>
                    <h2 className="text-[36px] max-sm:text-[24px]" style={{fontFamily:'Helvetica', fontWeight:'700', color:'rgba(30, 30, 30, 1)'}}>$ 150.00</h2>
                    <h2 className="text-[16px] max-sm:text-[12px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}>$69.00</h2>
                </div>  
                <div className="pt-[37px] max-sm:pt-[34px]">
                <button className="flex items-center border-none outline-none cursor-pointer py-[13px] px-[147px] rounded-[5px] gap-[12px] w-[422px] 
                max-sm:w-[295px] max-sm:px-[100px]" style={{background:'rgba(163, 69, 254, 1)'}}>
                    <img src={Buycourse}/>
                    <span className="text-[22px] max-sm:text-[16px]" style={{fontFamily:'Helvetica',fontWeight:'400', color:'rgba(255, 255, 255, 1)'}} >Buy now </span>
                </button>
                <button className="flex items-center outline-none cursor-pointer py-[13px] pl-[140px] rounded-[5px] gap-[12px] w-[422px] mt-[18px] 
                max-sm:w-[295px] max-sm:pl-[89px]" style={{background:'rgba(255, 255, 255, 1)' , border:'1px solid rgba(35, 45, 79, 0.6)'}}>
                    <img src={Addcourse} alt="" />
                    <span className="text-[22px] max-sm:text-[16px]"  style={{fontFamily:'Helvetica',fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}>Add to cart</span>
                </button>
                </div>

                <div className="flex flex-col pt-[30px] ">
                    <h2 className="text-[24px] pb-[24px] max-sm:text-[22px] max-sm:pb-[16px]" style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 1)'}}>This course includes</h2>
                    <div className="flex items-center gap-[12px] pb-[14px]">
                        <img src={CourseCart1} alt="" /> 
                        <p className="text-[16px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}> 15 hours on-demond video</p>
                    </div>
                    <div className="flex items-center gap-[12px] pb-[14px]">
                        <img src={CourseCart2} alt="" /> 
                        <p className="text-[16px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}> 26 downloadable resources</p>
                    </div>
                    <div className="flex items-center gap-[12px] pb-[14px]">
                        <img src={CourseCart3} alt="" /> 
                        <p className="text-[16px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}> Full time access</p>
                    </div>
                    <div className="flex items-center gap-[12px] pb-[14px]">
                        <img src={CourseCart4} alt="" /> 
                        <p className="text-[16px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}> Certificate of completion</p>
                    </div>
                    <div className="flex items-center gap-[12px] ">
                        <img src={CourseCart5} alt="" /> 
                        <p className="text-[16px]"  style={{fontFamily:'Helvetica', fontWeight:'400', color:'rgba(30, 30, 30, 0.8)'}}> Online or Offline</p>
                    </div>
                </div>

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
    )

}

export default CourseDetails;