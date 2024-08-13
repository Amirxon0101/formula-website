import React from "react";
import Rocket from '../../../assets/imgs/rocket.jpg'
import Learning1 from '../../../assets/imgs/learning1.jpg'
import Learning2 from '../../../assets/imgs/learning2.jpg'
import Discover from '../../../assets/icons/discover.svg'
import Tick1 from '../../../assets/imgs/tick1.jpg'
import Tick2 from '../../../assets/imgs/tick2.jpg'
import Tick3 from '../../../assets/imgs/tick3.jpg'
import Tick4 from '../../../assets/imgs/tick4.jpg'

const Learning: React.FC = () => {
  return (
    <div className="flex  mr-[140px]" style={{ border: '1px solid rgba(30, 30, 30, 0.3)' }}>
      <div className="relative mr-[47px] mb-[80px]">
        <div className="ml-[174px] mt-[88px]"> 
          <img className=" w-[200px] absolute  left-[10px] top-[120px]" src={Rocket}/>
          <h4  className=" text-[40px] font-[500] leading-[40px] tracking-wide text-left " style={{ fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',backgroundClip: 'text'}}>
          Access to learning<br /> anytime any were  </h4>
          <p className="mb-[102px] text-[16px] mt-[12px]" style={{fontWeight:'500', fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Expand Your Horizons with Online Education</p>
        </div>
        <div className="relative ml-[164px] ">
      <img className=" w-[522px]" style={{background:'rgb(249, 249, 248)'}} src={Learning1}/>
       <div className="absolute  w-[194px] flex h-[121px] items-center rounded-[25px] pl-[14px] pr-[15px] bottom-[10px] left-[340px] cursor-pointer " style={{ zIndex:'11111',background: 'linear-gradient(136.27deg, rgb(235, 178, 251) 6.239%,rgb(178, 94, 255) 94.876%)'}}>
        <p className="text-[24px] mr-[3px]" style={{fontFamily:'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Discover<br/>
        more</p>
        <img src={Discover}/>
       </div>
        </div>
      </div>
      <div>
       <img className="w-[520px] mt-[64px] mb-[46px]" src={Learning2}/>
       <p className="text-[16px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Online education has gained significant popularity and importance in<br/>recent years, especially with the advancements in technology and<br/>increased accessibility to the internet.</p>
       <div className="flex items-center">
         <div className="mr-[64px]">
           <div className="flex items-center mt-[28px]"><img className="w-[40px] mr-[14px]" src={Tick1}/><span className="text-[24px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Expert Training</span></div>
           <div className="flex items-center mt-[28px]"><img className="w-[40px] mr-[14px]" src={Tick3}/><span className="text-[24px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Lifetime access</span></div>
         </div>
         <div>
        <div className="flex items-center mt-[28px]"><img className="w-[40px] mr-[14px]" src={Tick2}/><span className="text-[24px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Online Learning</span></div>
         <div className="flex items-center mt-[28px]"><img className="w-[40px] mr-[14px]" src={Tick4}/><span className="text-[24px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(30, 30, 30, 0.7)'}}>Great Results</span></div>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Learning;
