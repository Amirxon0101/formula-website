import React, { useState } from 'react';
import Navbar from "../Navbar";
import Loop from '../../assets/icons/loop.svg';
import Blogs1 from '../../assets/imgs/blogs1.jpg';
import Blogs2 from '../../assets/imgs/blogs2.jpg';
import Blogs3 from '../../assets/imgs/blogs3.jpg';
import Footer from '../Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate()
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
  const categories = [
    'Web development',
    'Designing',
    'UI/UX Designing',
    'AI',
    'Machine learning',
    'Wordpress development',
    'Laravel Development',
    'Javascript Development',
    'C++',
    'Python',
  ];

  const blogItems = [
    { id: 1, category: 'UI/UX Designing', title: 'UI/UX Designer Requirements', image: Blogs1, date: '18 June, 2022' },
    { id: 2, category: 'UI/UX Designing', title: 'The UX within UI: Proximity', image: Blogs2, date: '18 May, 2022' },
    { id: 3, category: 'Web development', title: 'Web Development', image: Blogs3, date: '18 June, 2022' },
    // Add more blog items here...
  ];
  const handleNavigate = (blog: { image: string;  date: string }) => {
    navigate('/Blogs/details', { state: { blog } });
  };
  const filteredBlogs = activeCategory
    ? blogItems.filter(blog => 
        blog.category === activeCategory || 
        blog.title.toLowerCase().includes(activeCategory.toLowerCase())
      )
    : blogItems;

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:pl-[121px] mt-[50px] lg:mt-[100px] pb-[40px] lg:pb-[80px]" style={{ borderBottom: '0.5px solid rgba(30, 30, 30, 0.2)' }}>
        <span className="text-[20px] sm:text-[24px] mr-0 lg:mr-[129px] mb-4 lg:mb-0" style={{ fontFamily: 'Helvetica', color: 'rgba(0, 0, 0, 0.70)' }}>Blog inside</span>
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[96px] w-full lg:w-[701px]" style={{ color: 'rgba(0, 0, 0, 0.80)', fontFamily: 'Helvetica', fontWeight: '500' }}>
          DISCOVER THE WORLD OF KNOWLEDGE
        </h1>
      </div>
      <div className=" px-4 sm:px-8 md:px-12 lg:px-[120px] mt-[52px] flex flex-wrap">
  <div className="flex flex-wrap w-[700px]">
    {categories.map(category => (
      <button
        key={category}
        onClick={() => handleCategoryClick(category)}
        className="cursor-pointer px-[22px] py-[10px] rounded-[18px] text-[16px] mr-[10px] sm:mr-[16px] md:mr-[26px] mt-[10px]"
        style={{
          fontFamily: 'Helvetica',
          fontWeight: '400',
          color: activeCategory === category ? 'white' : 'rgb(35, 45, 79)',
          background: activeCategory === category ? 'rgb(163, 69, 254)' : 'rgb(255, 255, 255)',
          border: activeCategory === category ?'none':'0.5px solid rgb(35, 45, 79)',
        }}
      >
        {category}
      </button>
    ))}
  </div>
  <div className="  mt-[12px] flex justify-end md:ml-[200px] ">
    <div className="flex items-center w-[300px]">
      <img className="w-[19px] mr-[10px]" src={Loop} alt="Search icon" />
      <input className=" border-none outline-none text-[16px] md:text-[20px]" style={{ fontFamily: 'Helvetica-light' }} placeholder="Find blogs" />
    </div>
  </div>
</div>

<div className="flex flex-wrap justify-center sm:justify-start px-4 sm:px-8 md:px-12 lg:pl-[224px] mt-[75px]">
  {filteredBlogs.map(blog => (
    <div 
    onClick={()=>handleNavigate(blog)}
      key={blog.id} 
      className= "cursor-pointer w-full pl-[34px] sm:w-[250px] md:w-[280px] lg:w-[306px] h-[363px] rounded-[20px] relative mr-0 sm:mr-[20px] lg:mr-[39px] mt-[20px] sm:mt-[30px] lg:mt-[57px]" 
      style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      <p className="text-[14px] sm:text-[16px] mb-[16px] absolute bottom-[88px]" style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Helvetica-light' }}>{blog.date}</p>
      <span className="text-[18px] sm:text-[20px] w-[163px] absolute bottom-[34px]" style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Helvetica' }}>{blog.title}</span>
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

export default Blogs;
