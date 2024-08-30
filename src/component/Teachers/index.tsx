
import Navbar from "../Navbar";
import Shape from "../../assets/icons/shape.svg";
import Teacher1 from '../../assets/imgs/teacher1.jpg';
import Teacher2 from '../../assets/imgs/teacher2.jpg';
import Teacher3 from '../../assets/imgs/teacher3.jpg';
import Teacher4 from '../../assets/imgs/teacher4.jpg';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Teacher5 from '../../assets/imgs/teacher5.png';
import Teacher6 from '../../assets/imgs/teacher6.png';
import Whitedetails from '../../assets/icons/whitedetails.svg';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Teachers: React.FC = () => {
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
  const navigate = useNavigate();
  const teachers = [
    {id:1, image: Teacher1, name: 'Anjelina Joe', position: 'Desinger' },
    {id:2, image: Teacher2, name: 'Sizan porte', position: 'Developer' },
    {id:3, image: Teacher3, name: 'Megan Forst', position: 'Developer' },
    {id:4, image: Teacher4, name: 'Rosy D Suza', position: 'Developer' },
    {id:5, image: Teacher5, name: 'Rodger Saint', position: 'Developer' },
    {id:6, image: Teacher6, name: 'Rodger Saint', position: 'Developer' },
  ];

  const handleNavigate = (teacher: { image: string; name: string; position: string }) => {
    navigate('/Teachers/details', { state: { teacher } });
  };

  return (
    <div>
      <div className="justify-between">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row items-center pl-[20px] sm:pl-[50px] md:pl-[80px] lg:pl-[122px] mt-[50px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
  <div className="flex flex-col sm:flex-col items-center md: mt-[50px] lg:mt-[0px]">
    <h2 className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[400px] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px]"
      style={{ fontFamily: 'Helvetica', fontWeight: '500', color: 'rgba(0, 0, 0, 0.8)' }}>
      MEET OUR TEACHERS
    </h2>
  </div>
  <div className="mt-[20px] lg:mt-0  xl:ml-[250px]">
    <p className="text-[14px] sm:text-[16px] md:text-[18px] w-[300px] sm:w-[400px] md:w-[450px] lg:w-[501px]"
      style={{ color: 'rgba(35, 45, 79, 0.7)', fontFamily: 'Helvetica' }}>
      Online platforms often offer micro-courses or modules
      allowing learners to focus on specific topics of interest and
      acquire targeted skills
    </p>
  </div>
</div>

<div className="flex flex-wrap ml-[20px] sm:ml-[50px] md:ml-[80px] lg:ml-[122px] xl:ml-[150px] 2xl:ml-[200px]">
  {teachers.map((teacher, index) => (
    <div
      className="relative mr-[20px] sm:mr-[30px] md:mr-[50px] lg:mr-[91px] mt-[20px] sm:mt-[40px] md:mt-[60px] lg:mt-[100px] xl:mt-[120px] 2xl:mt-[140px]"
      key={index}

    >
      
      <img

        className= " relative w-full lg:w-[277px] xl:w-[300px] 2xl:w-[350px] "
        style={{ transition: 'opacity 0.3s ease',       }}
        src={teacher.image}
        alt={teacher.name}
      />
      <div className="absolute bottom-[10px] sm:bottom-[20px] md:bottom-[25px] lg:bottom-[32px] left-[10px] sm:left-[30px] md:left-[50px] lg:left-[90px] xl:left-[110px]">
        <span
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
          style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Helvetica-light' }}
        >
          {teacher.name}
        </span>
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] mt-[5px] sm:mt-[8px] md:mt-[10px] lg:mt-[11px]"
          style={{ fontFamily: 'Helvetica-light', color: 'rgb(255, 255, 255)' }}
        >
          {teacher.position}
        </p>
      </div>

      {/* Social Media Icons with higher z-index */}
      <div
        className=" absolute bottom-[5px] left-[5px] rounded-[10px] sm:rounded-[12px] md:rounded-[15px] lg:rounded-[15px] w-[40px] sm:w-[45px] md:w-[50px] lg:w-[55px] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[120px] flex flex-col items-center z-10"
        style={{
          
          background: 'linear-gradient(249.85deg, rgb(248, 27, 166) 27.22%, rgb(240, 67, 207) 92.428%) ',
          padding: '8px',
        }}
      >
        <a href="#" className="mb-[2px] sm:mb-[3px] md:mb-[4px]">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="#" className="mb-[2px] sm:mb-[3px] md:mb-[4px]">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#">
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>

      {/* "View Details" text */}
      <div
        className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 z-0 rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[20px]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="flex items-center cursor-pointer"  onClick={() => handleNavigate(teacher)}>
          <span
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
            style={{ fontFamily: 'Helvetica-light', color: 'white', fontWeight: '400' }}
          >
            View Details
          </span>
          <img className="ml-[5px] sm:ml-[8px] md:ml-[10px] lg:ml-[12px]" style={{ color: 'white' }} src={Whitedetails} alt="View Details" />
        </div>
      </div>
    </div>
  ))}
</div>
<div className="mt-[184px] py-[40px] text-center" style={{borderTop: '0.5px solid rgba(30, 30, 30, 0.2)',borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)'}}>
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

export default Teachers;