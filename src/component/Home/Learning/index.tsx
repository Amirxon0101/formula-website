import React from "react";
import Rocket from '../../../assets/imgs/rocket.jpg';
import Learning1 from '../../../assets/imgs/learning1.jpg';
import Learning2 from '../../../assets/imgs/learning2.jpg';
import Discover from '../../../assets/icons/discover.svg';
import Tick1 from '../../../assets/imgs/tick1.jpg';
import Tick2 from '../../../assets/imgs/tick2.jpg';
import Tick3 from '../../../assets/imgs/tick3.jpg';
import Tick4 from '../../../assets/imgs/tick4.jpg';

const Learning: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:px-8 lg:py-10 px-4 py-6 " style={{borderTop:'1px solid rgba(30, 30, 30, 0.3)',borderBottom:'1px solid rgba(30, 30, 30, 0.3)'}}>
      <div className="relative mb-10 sm:pl-[0px] lg:mb-0 lg:w-1/2 lg:mr-12 xl:pl-[160px]">
        <div className="relative mb-6">
          <img className="absolute w-[150px] lg:w-[200px] left-[-20px] top-16 lg:left-[-180px] lg:top-22 " src={Rocket} alt="Rocket" />
          <h4 className="text-[28px] lg:text-[40px] font-[500] leading-tight tracking-wide text-left mt-[63px]" 
              style={{ 
                fontFamily: 'Helvetica', 
                background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent', 
                backgroundClip: 'text'
              }}>
            Access to learning<br /> anytime, anywhere
          </h4>
          <p className="mt-4 mb-8 text-[14px] lg:text-[16px]" 
             style={{ fontWeight: '500', fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>
            Expand Your Horizons with Online Education
          </p>
        </div>
        <div className="">
          <img className="relative w-full lg:w-[522px] xl:mt-[40px]" src={Learning1} alt="Learning 1" />
          
        </div>
      </div>
      <div className="lg:w-1/2 mt-[63px]">
        <img className="w-full lg:w-[520px]" src={Learning2} alt="Learning 2" />
        <p className="mt-4 text-[14px] lg:text-[16px]" style={{ fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>
          Online education has gained significant popularity and importance in recent years, especially with the advancements in technology and increased accessibility to the internet.
        </p>
        <div className="flex flex-col lg:flex-row  mt-8 ">
          <div className="flex flex-col space-y-6 lg:space-y-8 mr-[30px]">
            <div className="flex items-center">
              <img className="w-[30px] lg:w-[40px] mr-3" src={Tick1} alt="Tick 1" />
              <span className="text-[16px] lg:text-[24px]" style={{ fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>Expert Training</span>
            </div>
            <div className="flex items-center">
              <img className="w-[30px] lg:w-[40px] mr-3" src={Tick3} alt="Tick 3" />
              <span className="text-[16px] lg:text-[24px]" style={{ fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>Lifetime Access</span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="flex items-center">
              <img className="w-[30px] lg:w-[40px] mr-3" src={Tick2} alt="Tick 2" />
              <span className="text-[16px] lg:text-[24px]" style={{ fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>Online Learning</span>
            </div>
            <div className="flex items-center">
              <img className="w-[30px] lg:w-[40px] mr-3" src={Tick4} alt="Tick 4" />
              <span className="text-[16px] lg:text-[24px]" style={{ fontFamily: 'Helvetica-normal', color: 'rgba(30, 30, 30, 0.7)' }}>Great Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
