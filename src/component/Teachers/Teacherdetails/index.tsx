import { Avatar, Breadcrumb, Tooltip } from "antd";
import Navbar from "../../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Training1 from '../../../assets/icons/training1.svg';
import Training2 from '../../../assets/icons/training2.svg';
import Girl from '../../../assets/icons/girl.svg';
import Stars from '../../../assets/icons/star.svg';
import Footer from "../../Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeacherComment from '../../../assets/imgs/teachercomment.jpg'
import TeacherComment2 from '../../../assets/imgs/teachercomment2.jpg'
import TeacherComment3 from '../../../assets/imgs/teachercomment3.jpg'


const TeachersDetails: React.FC = () => {
const navigate = useNavigate()
const location = useLocation();
const { teacher } = location.state || {};
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
const teacherComments = [
  {
    imgSrc: TeacherComment,
    name: "Mariya Zarakova",
    location: "Siberia, UI/UX designer",
    comment: `“Assess the teacher’s expertise and knowledge in the field of UI/UX design.
Look for their educational background, professional experience, and any
notable projects they have worked on. A good UI/UX teacher should have a
solid understanding of design principles, industry trends, and best practices.”`,
  },
  {
    imgSrc: TeacherComment2,
    name: "Marvis Berrie",
    location: "France, UI/UX designer",
    comment: `“Review the course syllabus or curriculum provided by the teacher. Is the
content comprehensive and up-to-date? Does it cover both theoretical
concepts and practical skills? A good UI/UX teacher should have a well-
structured course that allows students to develop a solid foundation in design
principles and gain practical experience.”`,
  },
  {
    imgSrc: TeacherComment3,
    name: "Warren Daniel",
    location: "Austrial, UI/UX designer",
    comment: `“It can be beneficial if the teacher has connections within the UI/UX industry.
Guest lectures, industry partnerships, or opportunities for networking can
provide students with valuable insights and potential career opportunities.”`,
  },
  
];
  return (
   <div>
    <Navbar/>
    <div className="mt-[40px] sm:mt-[60px]">
  <div className="flex flex-col lg:flex-row pl-4 md:pl-[60px] lg:pl-[120px]">
    <div className="lg:mr-[100px] xl:mr-[242px]">
      <Breadcrumb
        items={[
          {
            title: 'Home',
            className: 'cursor-pointer',
            onClick: () => navigate('/'),
          },
          {
            title: 'Teachers',
            className: 'cursor-pointer',
            onClick: () => navigate('/Teachers'),
          },
          {
            title: 'Teacher Details',
          },
        ]}
      />
      <h2
        className="mt-[20px] sm:mt-[30px] lg:mt-[44px] uppercase text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[400px]"
        style={{
          fontFamily: 'Helvetica',
          fontWeight: '500',
          color: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        {teacher.name}
      </h2>
    </div>

    <div className="mt-[20px] lg:mt-[44px]">
      <p
        className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] max-w-full lg:max-w-[495px]"
        style={{
          color: 'rgba(35, 45, 79, 0.7)',
          fontFamily: 'Helvetica',
        }}
      >
        Online platforms often offer micro-courses or modules allowing learners to focus on specific topics of interest and acquire targeted skills.
      </p>
    </div>
  </div>
</div>

    <div className=" sm: pl-[0px] md:pl-[120px]">
      <div className="flex flex-col sm:flex-row items-center">
      <div className="flex flex-col ">
      <img src={Training1} className='mt-4 lg:mt-0 ml-0 lg:ml-4 w-[80px] lg:w-[100px]' alt="Training 1" />
      <img src={Training2} className='mt-4 lg:mt-0 ml-0 lg:ml-4 w-[80px] lg:w-[100px]' alt="Training 2" />
      </div>
      <div className="w-[900px] text-center mb-[38px] ml-[100px]">
      <img className="h-[524px]  " src={teacher.image}/>
      </div>
      </div>
      <div className="mt-4">
  <div className="flex flex-col sm:flex-row sm:items-center sm:ml-[120px]">
    <p className="text-[18px] sm:text-[20px] mr-0 sm:mr-[20px] mb-2 sm:mb-0 text-center sm:text-left" 
       style={{color: 'rgb(35, 45, 79)', fontFamily: 'Helvetica', fontWeight: '400'}}>
      Specialisation in :
    </p>
    <div className="flex flex-wrap justify-center sm:justify-start">
      <button className="px-[20px] sm:px-[28px] py-[8px] sm:py-[10px] mr-2 sm:mr-[24px] mb-2 sm:mb-0 
                         text-[14px] sm:text-[16px] border-none outline-none rounded-[18px]"
              style={{color: 'rgb(255, 255, 255)', background: 'rgb(163, 69, 254)', fontFamily: 'Helvetica', fontWeight: '400'}}>
        Figma
      </button>
      <button className="px-[22px] sm:px-[30px] py-[8px] sm:py-[10px] mr-2 sm:mr-[24px] mb-2 sm:mb-0 
                         text-[14px] sm:text-[16px] bg-white border border-gray-300 outline-none rounded-[18px]"
              style={{color: 'rgb(35, 45, 79)', fontFamily: 'Helvetica', fontWeight: '400'}}>
        Adobe XD
      </button>
      <button className="px-[20px] sm:px-[28px] py-[8px] sm:py-[10px] mr-2 sm:mr-[24px] mb-2 sm:mb-0 
                         text-[14px] sm:text-[16px] bg-white border border-gray-300 outline-none rounded-[18px]"
              style={{color: 'rgb(35, 45, 79)', fontFamily: 'Helvetica', fontWeight: '400'}}>
        Adobe Photoshop
      </button>
      <button className="px-[18px] sm:px-[26px] py-[8px] sm:py-[10px] mr-2 sm:mr-[24px] 
                         text-[14px] sm:text-[16px] bg-white border border-gray-300 outline-none rounded-[18px]"
              style={{color: 'rgb(35, 45, 79)', fontFamily: 'Helvetica', fontWeight: '400'}}>
        Sketch
      </button>
    </div>
  </div>
</div>

      
    </div>
    <div className="pr-[100px] flex justify-between flex-row sm:flex-row sm:items-center sm:pl-[20px] pr-[0px] md:pl-[40px] lg:pl-[120px] mb-[54px] mt-[40px] sm:mt-[60px] md:mt-[80px] lg:pr-[100px]">
  <h3 className="mr-[00px] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[44px] mb-4 sm:mb-0" style={{
      fontFamily: 'Helvetica-light',
      background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
    Read what my students say
  </h3>
  <div className='flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0'>
    <div className="flex flex-col items-center sm:items-start">
      <Avatar.Group>
        <img src={Girl} alt="Girl Avatar" className="w-[40px] sm:w-[50px]" />
        <img src={Girl} alt="Girl Avatar" className="w-[40px] sm:w-[50px]" />
        <Tooltip title="Ant User" placement="top">
          <img src={Girl} alt="Girl Avatar" className="w-[40px] sm:w-[50px]" />
        </Tooltip>
        <img src={Girl} alt="Girl Avatar" className="w-[40px] sm:w-[50px]" />
      </Avatar.Group>
      <div className='flex mt-2'>
        <img className='mr-1 w-[16px] sm:w-[20px]' src={Stars} alt="Star" />
        <img className='mr-1 w-[16px] sm:w-[20px]' src={Stars} alt="Star" />
        <img className='mr-1 w-[16px] sm:w-[20px]' src={Stars} alt="Star" />
        <img className='mr-1 w-[16px] sm:w-[20px]' src={Stars} alt="Star" />
        <img className='mr-1 w-[16px] sm:w-[20px]' src={Stars} alt="Star" />
      </div>
    </div>
    <div className='text-center sm:text-left mt-4 sm:mt-0'>
      <span className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px]' style={{ color: 'rgb(36, 44, 80)', fontFamily: 'Helvetica', fontWeight: '500' }}>
        4.8/5
      </span>
    </div>
  </div>
</div>

<div>
  {teacherComments.map((teacher, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row pl-[20px] sm:pl-[40px] lg:pl-[120px] pt-[40px] sm:pt-[60px] lg:pt-[94px] pb-[40px] sm:pb-[60px] lg:pb-[74px]"
      style={{ borderTop: "0.5px solid rgba(30, 30, 30, 0.2)" }}
    >
      <div className="flex items-start flex-col sm:flex-row">
        <img
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover mb-4 sm:mb-0 sm:mr-[28px]"
          src={teacher.imgSrc}
          alt={`${teacher.name} Comment`}
        />
        <div>
          <span
            className="text-[18px] sm:text-[20px]"
            style={{ color: "#232D4F", fontFamily: "Helvetica" }}
          >
            {teacher.name}
          </span>
          <p
            className="text-[16px] sm:text-[18px]"
            style={{
              color: "rgba(35, 45, 79, 0.60)",
              fontFamily: "Helvetica",
            }}
          >
            {teacher.location}
          </p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-[28px] w-full sm:w-[700px]">
        <p
          className="text-[16px] sm:text-[20px]"
          style={{ color: "#232D4F", fontFamily: "Helvetica-normal" }}
        >
          {teacher.comment}
        </p>
      </div>
    </div>
  ))}
</div>

    <div className="mt-[120px] py-[40px] text-center" style={{borderTop: '0.5px solid rgba(30, 30, 30, 0.2)',borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
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

export default TeachersDetails;
