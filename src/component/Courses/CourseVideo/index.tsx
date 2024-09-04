import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../Navbar';
import { Checkbox } from 'antd';
import Video from '../../../assets/icons/video.svg';
import Reply from '../../../assets/icons/reply.svg'
import User1 from '../../../assets/imgs/reply1.png'
import User2 from '../../../assets/imgs/reply2.png'
import Send from '../../../assets/icons/send.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../Footer';
const CourseVideo: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

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


  const videoSections = [
    { title: '01- Welcome', time: '3:13', videoPosition: 0 },
    { title: '02- What is product design', time: '2:10', videoPosition: 60 },
    { title: '03- What is product design', time: '4:45', videoPosition: 120 },
    { title: '04- What is product design', time: '4:45', videoPosition: 180 },
    { title: '05- What is product design', time: '4:45', videoPosition: 245 },
    { title: '06- What is product design', time: '4:45', videoPosition: 245 },
    { title: '07- What is product design', time: '4:45', videoPosition: 245 },
    { title: '08- What is product design', time: '4:45', videoPosition: 245 },
    { title: '09- What is product design', time: '4:45', videoPosition: 245 },
    { title: '10- What is product design', time: '4:45', videoPosition: 245 },
    { title: '11- What is product design', time: '4:45', videoPosition: 245 },
    { title: '12- What is product design', time: '4:45', videoPosition: 245 },
    { title: '13- What is product design', time: '4:45', videoPosition: 245 },



    // Add more sections as needed
  ];

  const handleCheckboxChange = (index: number, videoPosition: number) => {
    setSelectedSection(index);
    if (playerRef.current) {
      playerRef.current.seekTo(videoPosition, 'seconds');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex flex-col lg:flex-row pl-[20px] md:pl-[50px] lg:pl-[70px] mb-[50px] md:mb-[100px] lg:mb-[130px] mt-[50px] md:mt-[80px] lg:mt-[100px]'>
  <div className='py-[24px] sm:py-[20px] md:py-[22px] lg:py-[24px] pl-[38px] pr-[18px] rounded-[10px] w-full lg:w-[60%]' style={{border:'1px solid rgba(30, 30, 30, 0.40)'}}>
    <div className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[700px]'>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing={true}
        loop={true}
        controls={true}
        volume={0.8}
        muted={false}
        width="100%"
        height="443px"
      />
    </div>
    
    <div className='mt-[28px] mb-[16px]'>
      <span className='text-[24px] sm:text-[22px] md:text-[24px]' style={{color:'rgba(30, 30, 30, 0.90)', fontFamily:'Helvetica'}}>
        {videoSections[selectedSection]?.title}
      </span>
    </div>

    <p 
  className='text-[1rem] sm:text-[0.875rem] md:text-[1rem] mb-[1.125rem] max-w-full sm:max-w-[80%] md:max-w-[85%] lg:max-w-[90%] xl:max-w-[95%]' 
  style={{ color: 'rgba(0, 0, 0, 0.70)', fontFamily: 'Helvetica' }}>
  Lorem ipsum dolor sit amet consectetur. Quam sit proin augue lacus. Commodo aliquet erat tortor amet mi<br/>
  nibh quis leo. Augue nec lectus ut aenean imperdiet est rutrum a. Eu suspendisse sagittis nunc amet<br/>
  vulputate suspendisse nunc. Sed volutpat justo dolor ut. Nulla ac phasellus mollis leo feugiat sed scelerisque<br/>
  id at. Massa facilisis nulla purus gravida mauris volutpat.
</p>

    <div>
      <p className='text-[24px] sm:text-[22px] md:text-[24px]' style={{color:'rgba(0, 0, 0, 0.80)', fontFamily:'Helvetica-normal'}}>
        Comments
      </p>
      
      <div className='flex flex-col space-y-[24px] mt-[24px]'>
        <div className='flex px-[8px] py-[12px] rounded-[10px] flex-col sm:flex-row' style={{border:'1px solid rgba(30, 30, 30, 0.30)'}}>
          <img src={User1} className='mr-[21px] w-[60px] h-[60px] rounded-full'/>
          <div>
            <h5 className='text-[20px]' style={{color:'rgba(30, 30, 30, 0.90)', fontFamily:'Helvetica-normal'}}>Sizan porte</h5>
            <p className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[600px] text-[16px]' style={{color:'rgba(0, 0, 0, 0.70)', fontFamily:'Helvetica-normal'}}>
              Eu suspendisse sagittis nunc amet vulputate suspendisse nunc. Sed volutpat justo dolor ut. Nulla ac phasellus mollis leo feugiat sed scelerisque id at. Massa facilisis nulla purus gravida mauris volutpat.
            </p>
            <div className='flex justify-between mt-[6px]'>
              <p style={{color:'rgba(30, 30, 30, 0.60)', fontFamily:'Helvetica-normal'}}>3 hours ago</p>
              <div className='flex'>
                <img className='mr-[8px] cursor-pointer' src={Reply}/>
                <p className='cursor-pointer' style={{color:'rgba(30, 30, 30, 0.70)', fontFamily:'Helvetica-normal'}}>Reply</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat for other comments */}
        
        <div className='flex mt-[200px]'>
          <input className='w-full sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[700px] rounded-[6px] outline-none' style={{border:'1px solid rgba(30, 30, 30, 0.30)'}}/>
          <button className='cursor-pointer ml-[30px] flex items-center border-none outline-none px-[36px] py-[8px] rounded-[6px]' style={{background:'linear-gradient(87deg, #C859FC 0%, #A344FF 106.22%)'}}>
            <p className="text-[18px] mr-[10px]" style={{color:'#FFF', fontFamily:'Helvetica-light'}}>Send</p> 
            <img src={Send}/>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className='w-full lg:w-[35%] h-auto rounded-[10px] ml-0 lg:ml-[40px] mt-[40px] lg:mt-0' style={{ border: '1px solid rgba(30, 30, 30, 0.3)' }}>
    <div className='pt-[20px] pl-[22px] pb-[20px]'>
      <span className='text-[16px]' style={{color:'rgba(30, 30, 30, 0.90)',fontFamily:'Helvetica'}}>Modules</span>
    </div>
    {videoSections.map((section, index) => (
      <div className='flex pt-[16px] pb-[12px]' style={{ borderTop: '1px solid rgba(30, 30, 30, 0.40)' }} key={index}>
        <Checkbox
          className='pl-[22px]'
          checked={selectedSection === index}
          onChange={() => handleCheckboxChange(index, section.videoPosition)}
        />
        <div className='pl-[8px]'>
          <div className='flex items-center'>
            <img src={Video} alt="Video Icon" />
            <span>{section.title}</span>
          </div>
          <span>({section.time})</span>
        </div>
      </div>
    ))}
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

export default CourseVideo;
