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
    <div className="mt-[60px]">
      <div className="flex pl-[120px]">
        <div className="mr-[242px]">
        <Breadcrumb
    items={[
      {
        title: 'Home',
        className:'cursor-pointer',
        onClick: () => navigate('/'),
      },
      {
        title: 'Teachers',
        className:'cursor-pointer',
        onClick: () => navigate('/Teachers'),
      },
      {
        title:'Teachers details',
      },
     
    ]}
  />
  <h2 className="mt-[44px] uppercase w-[300px] sm:w-[350px] md:w-[450px] lg:w-[400px] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px]"       style={{ fontFamily: 'Helvetica', fontWeight: '500', color: 'rgba(0, 0, 0, 0.8)' }}>{teacher.name}</h2>
        </div>
       
        <div className="mt-[44px]">
          <p className="w-[495px] text-[18px]" style={{color: 'rgba(35, 45, 79, 0.7)',fontFamily:'Helvetica'}}>online platforms often offer mico-courses or modules allowing learners to focus on specific topics of interest and acquire targeted skills</p>
        </div> 
             
  </div>
    </div>
    <div className="pl-[120px]">
      <div className="flex">
      <div className="flex flex-col">
      <img src={Training1} className='mt-4 lg:mt-0 ml-0 lg:ml-4 w-[80px] lg:w-[100px]' alt="Training 1" />
      <img src={Training2} className='mt-4 lg:mt-0 ml-0 lg:ml-4 w-[80px] lg:w-[100px]' alt="Training 2" />
      </div>
      <div className="w-[900px] ml-[100px]">
      <img className="h-[600px]   " src={teacher.image}/>
      </div>
      </div>
      <div >
        <div className="flex items-center">
          <p className=" text-[20px] mr-[20px]" style={{color:' rgb(35, 45, 79)',fontFamily:'Helvetica',fontWeight:'400'}}>Specialisation in :</p>
          <div>
            <button className="px-[28px] mr-[24px] py-[10px] border-none outline-none rounded-[18px] text-[16px]"style={{color: 'rgb(255, 255, 255)',background: 'rgb(163, 69, 254)',fontFamily:'Helvetica',fontWeight:'400'}}>Figma</button>
            <button className="px-[30px] mr-[24px] py-[10px] border-none outline-none rounded-[18px] text-[16px] bg-white"style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica',fontWeight:'400',border: '0.5px solid rgb(35, 45, 79)'}}>Adobe XD</button>
            <button className="px-[28px] mr-[24px] py-[10px] border-none outline-none rounded-[18px] text-[16px] bg-white"style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica',fontWeight:'400',border: '0.5px solid rgb(35, 45, 79)'}}>Adobe Photoshop</button>
            <button className="px-[26px] mr-[24px] py-[10px] border-none outline-none rounded-[18px] text-[16px] bg-white"style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica',fontWeight:'400',border: '0.5px solid rgb(35, 45, 79)'}}>Sketch</button>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex items-center pl-[120px]  mb-[54px] mt-[80px]" >
      <h3  className="text-[44px] " style={{
          fontFamily: 'Helvetica-light',
          background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Read what my students say</h3>
          <div className='flex lg:flex-row items-center lg:items-center mt-4' >
                <div className="flex flex-col items-center lg:items-start">
                  <Avatar.Group>
                      <img src={Girl} alt="Girl Avatar" />
                      <img src={Girl} alt="Girl Avatar" />
                      <Tooltip title="Ant User" placement="top">
                          <img src={Girl} alt="Girl Avatar" />
                      </Tooltip>
                      <img src={Girl} alt="Girl Avatar" />
                  </Avatar.Group>
                  <div className='flex ml-[10px]'>
                  <img className='mr-1 w-[20px] lg:w-[14px]' src={Stars} alt="Star" />
                  <img className='mr-1 w-[20px] lg:w-[14px]' src={Stars} alt="Star" />
                  <img className='mr-1 w-[20px] lg:w-[14px]' src={Stars} alt="Star" />
                  <img className='mr-1 w-[20px] lg:w-[14px]' src={Stars} alt="Star" />
                 <img className='mr-1 w-[20px] lg:w-[14px]' src={Stars} alt="Star" />
               </div>
            </div>
           <div className='text-center lg:text-left mt-4 lg:mt-0'>
             <span className='text-[24px] lg:text-[40px]' style={{ color: 'rgb(36, 44, 80)', fontFamily: 'Helvetica', fontWeight: '500' }}>4.8/5</span>
          </div>
      </div>
    </div>
    <div>
    {teacherComments.map((teacher, index) => (
      <div
        key={index}
        className="flex pl-[120px] pt-[94px] pb-[74px]"
        style={{ borderTop: "0.5px solid rgba(30, 30, 30, 0.2)" }}
      >
        <div className="flex items-center">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover mr-[28px]"
            src={teacher.imgSrc}
            alt={`${teacher.name} Comment`}
          />
          <div>
            <span
              className="text-[20px]"
              style={{ color: "#232D4F", fontFamily: "Helvetica" }}
            >
              {teacher.name}
            </span>
            <p
              className="text-[20px]"
              style={{
                color: "rgba(35, 45, 79, 0.60)",
                fontFamily: "Helvetica",
              }}
            >
              {teacher.location}
            </p>
          </div>
        </div>
        <div className="w-[700px] ml-[78px]">
          <p
            className="text-[20px]"
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
