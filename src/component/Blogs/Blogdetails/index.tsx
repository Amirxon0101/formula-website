import { Breadcrumb } from "antd";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Blogdetailsimg from '../../../assets/imgs/blogdetails1.jpg'
import Blogdetailsimg2 from '../../../assets/imgs/blogdetails2.jpg'
import Footer from "../../Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Blogsdeatils: React.FC = () => {
const navigate = useNavigate()
const location = useLocation();
const { blog } = location.state || {};
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
      <div className="pl-[10px] sm:pl-[30px] lg:pl-[120px] mt-[20px] sm:mt-[40px] lg:mt-[80px]">
  <Breadcrumb
    items={[
      {
        title: 'Home',
        className: 'cursor-pointer',
        onClick: () => navigate('/'),
      },
      {
        title: 'Blogs',
        className: 'cursor-pointer',
        onClick: () => navigate('/Blogs'),
      },
      {
        title: 'Blog details',
      },
    ]}
  />
      </div>
      <div className="flex flex-col lg:flex-row pl-[10px] sm:pl-[30px] lg:pl-[120px] mt-[20px] sm:mt-[40px] lg:mt-[42px]">
  <h3
    className="text-[24px] sm:text-[40px] md:text-[50px] lg:text-[63px] w-full lg:w-[740px]"
    style={{
      fontFamily: 'Helvetica-light',
      background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    Introduction to Wireframing and Principles
  </h3>
  <span
    className="ml-0 lg:ml-[224px] mt-[20px] lg:mt-[105px] text-[16px] sm:text-[18px] lg:text-[20px]"
    style={{ color: 'rgba(30, 30, 30, 0.90)', fontFamily: 'Helvetica-normal' }}
  >
    {blog.date}
  </span>
     </div>
     <div className="flex flex-col lg:flex-row mt-[40px] sm:mt-[60px] lg:mt-[84px] pl-[20px] sm:pl-[40px] lg:pl-[120px]">
  <div className="mb-[20px] lg:mb-0 lg:mr-[90px] sm:mr-[60px]">
    <p className="w-[120px] sm:w-[160px] lg:w-[205px]" style={{ border: '1.5px solid rgb(35, 45, 79)' }}></p>
  </div>
  <p className="text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[864px]" style={{ fontFamily: 'Helvetica', color: 'rgba(35, 45, 79, 0.60)' }}>
    Expertise and Knowledge: Assess the teacher’s expertise and knowledge in the field of UI/UX design.
    Look for their educational background, professional experience, and any notable projects they have
    worked on. A good UI/UX teacher should have a solid understanding of design principles, industry
    trends, and best practices.
  </p>
</div>
<div className="px-[10px] sm:px-[20px] lg:px-[80px] xl:px-[120px] mt-[20px] sm:mt-[40px] lg:mt-[80px] xl:mt-[100px]">
  <img className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-auto" src={blog.image} />
</div>

<div className="mt-[40px] sm:mt-[60px] lg:mt-[80px] mb-[50px] sm:mb-[80px] lg:mb-[100px] px-[20px] sm:px-[40px] lg:px-[120px]">
  <p className="text-[16px] sm:text-[18px] lg:text-[18px] max-w-full sm:max-w-[700px] lg:max-w-[850px] mx-auto lg:ml-[416px]" style={{ color: 'rgba(35, 45, 79, 0.60)', fontFamily: 'Helvetica' }}>
    Teaching Experience: Consider the teacher’s experience in teaching UI/UX design. Have they taught before? How long have they been teaching? Teaching experience can indicate their ability to effectively communicate complex design concepts and guide students through the learning process.
    Teaching Style and Approach: Evaluate the teacher’s teaching style and approach. Do they provide clear explanations? Are they patient and responsive to students’ questions? Look for reviews or testimonials from previous students to gauge the teacher’s effectiveness in delivering the material and supporting students’ learning.
  </p>
</div>
<div className="flex flex-col lg:flex-row flex-wrap">
  <div className="pl-[20px] sm:pl-[60px] md:pl-[80px] lg:pl-[120px]">
    <h3
      className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[63px] w-full lg:w-[583px]"
      style={{
        fontFamily: 'Helvetica-light',
        background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      “Expand Your Horizons: Discover the World of Online Education.”
    </h3>

    <div className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[519px] w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[526px] mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[74px]">
      <img className="object-cover w-full h-full" src={Blogdetailsimg} />
    </div>
  </div>

  <div className="ml-0 lg:ml-[120px] mt-[50px] lg:mt-10 flex flex-col items-center lg:items-start">
    <img className="w-full lg:w-[552px] h-auto lg:h-[537px]" src={Blogdetailsimg2} />
    <p className="w-full lg:w-[450px] text-[18px] mt-[40px] lg:mt-[90px]" style={{color:"rgba(35, 45, 79, 0.70)", fontFamily:'Helvetica'}}>
      Teaching Experience: Consider the teacher’s experience in teaching UI/UX design. Have they taught before? How long have they been teaching? Teaching experience can indicate their ability to effectively communicate complex.
    </p>
  </div>
</div>


<div className="pl-[295px] pt-[136px] pb-[80px] max-sm:pl-[16px] sm:pl-[20px] md:pl-[100px] xl:pl-[300px]">
  <p className="w-[929px] text-[20px] max-sm:text-[16px] md:text-[20px] max-w-full " style={{color:"rgba(35, 45, 79, 0.70)",fontFamily:'Helvetica'}}>Teaching Experience: Consider the teacher’s experience in teaching UI/UX design.Have they taught
before? How long have they been teaching? Teaching expeerience can indicate their ability to
effectively communicate complex design concepts and guide students throught the learning process.
Teaching Style and Approach:Evaluate the teacher’s teaching style and approach.Do they provide
clear explanations? Are they patient and responsive to students’ questions?Look for reviews or
testimonials from previous students to gauge the teacher’s effectiveness in delivering the material
and suppoting students’ learning. </p>
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

export default Blogsdeatils;