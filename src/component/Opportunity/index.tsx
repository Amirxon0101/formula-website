import React from "react";
import "swiper/css";
import Scrollimg from '../../assets/icons/vectordown.svg'
import Yellowarrow from '../../assets/imgs/yellowarrow.jpg'
import Yellowback from '../../assets/imgs/yellowback.png'
import Greenback from '../../assets/imgs/greenback.jpg'
import Greenarrow from '../../assets/imgs/greenarrow.jpg'
import Purpleback from '../../assets/imgs/purpleback.jpg'
import Purplearrow from '../../assets/imgs/purplearrow.jpg'

const Opportunities: React.FC = () => {
  return (
    <div className="w-full flex h-[57.5vh]" >
      <div className="relative pt-[200px]">
        <div className="ml-[-20px] absolute items-center justify-center flex" style={{ transform: 'rotate(-90.00deg)' }}>
          <img className="mr-[10px]" style={{ transform: 'rotate(90.00deg)' }} src={Scrollimg} alt="Scroll" /> SCROLL DOWN
        </div>
        <p className="w-[404px] ml-[-80px]" style={{ border: '1px solid rgba(30, 30, 30, 0.2)', transform: 'rotate(-90.00deg)' }}></p>
      </div>
      <div 
        className="relative w-[277px] h-[238px] mt-[85px] rounded-[20px] ml-[-100px]"
        style={{
          backgroundImage: `url(${Yellowback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img src={Yellowarrow} className="absolute w-[70px] h-[70px] rounded-[40px] left-[190px] top-[4px]" />
        <h4 
          className="text-[24px] mt-[34px] ml-[32px]" 
          style={{
            fontFamily: 'Helvetica-normal',
            color: 'rgb(35, 45, 79)',
            fontWeight: '400'
          }}
        >
          Flexibility
        </h4>
        <p 
          className="mt-[57px] ml-[20px] text-[12px]" 
          style={{
            fontFamily: 'Helvetica-light',
            color: 'rgba(30, 30, 30, 0.8)',
            lineHeight: '12px'
          }}
        >
          Students can access learning <br /> 
          materials <br /> 
          and participate in classes at their own<br /> 
          pace and schedule, allowing for a <br /> 
          personalised learning experience.
        </p>
      </div>
      <div 
        className="relative w-[277px] h-[238px] mt-[85px] rounded-[20px] ml-[91px]"
        style={{
          backgroundImage: `url(${Greenback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img src={Greenarrow} className="absolute w-[70px] h-[70px] rounded-[40px] bottom-[2px] right-[17px]" />
         <p className="mt-[80px] ml-[20px] text-[12px]" style={{fontFamily: 'Helvetica-light',color: 'rgba(30, 30, 30, 0.8)',lineHeight: '12px'}}>
         Students can access coursess and<br/>
programs offered by insititutions from<br/>
around the world,regardless of their<br/>
physical locations. 
        </p>
        <h4 
          className="text-[24px] mt-[40px] ml-[10px]" 
          style={{
            fontFamily: 'Helvetica-normal',
            color: 'rgb(35, 45, 79)',
            fontWeight: '400'
          }}
        >
          Accessibility
        </h4>
       
      </div>
      <div 
        className="relative w-[277px] h-[238px] mt-[85px] rounded-[20px] ml-[83px]"
        style={{
          backgroundImage: `url(${Purpleback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <img src={Purplearrow} className="absolute w-[70px] h-[70px] rounded-[40px] left-[190px] top-[4px]" />
        <h4 
          className="text-[24px] mt-[32px] ml-[16px]" 
          style={{
            fontFamily: 'Helvetica-normal',
            color: 'rgb(35, 45, 79)',
            fontWeight: '400'
          }}
        >
          Interactive<br/>
          Learning
        </h4>
        <p 
          className="mt-[35px] ml-[20px] text-[12px]" 
          style={{
            fontFamily: 'Helvetica-light',
            color: 'rgba(30, 30, 30, 0.8)',
            lineHeight: '12px'
          }}
        >
         These can include discussions forums,<br/>
virtual classrooms,video conferences,<br/>
multimedia resources,and interactive<br/>
assessments.
        </p>
      </div>
    </div>
  );
};

export default Opportunities;
