import React from "react";
import Signinimg from '../../../assets/imgs/Signinimg.jpg'
import Discover from '../../../assets/icons/discover.svg'
import User from '../../../assets/icons/user.svg'
import Email from '../../../assets/icons/email.svg'
import Select from '../../../assets/icons/select.svg'

const Signin: React.FC = () => {
  return (
    <div className="w-full flex pb-[100px]" style={{borderTop: '1px solid rgba(30, 30, 30, 0.3)',borderBottom: '1px solid rgba(30, 30, 30, 0.3)'}}>
       <div className="relative ml-[242px] mt-[97px] ">
      <img className=" w-[522px]" style={{background:'rgb(249, 249, 248)'}} src={Signinimg}/>
       <div className="absolute  w-[194px] flex h-[121px] items-center rounded-[25px] pl-[14px] pr-[15px] bottom-[10px] left-[340px] cursor-pointer " style={{ zIndex:'11111',background: 'linear-gradient(136.27deg, rgb(235, 178, 251) 6.239%,rgb(178, 94, 255) 94.876%)'}}>
        <p className="text-[24px] mr-[3px]" style={{fontFamily:'Helvetica-light',color: 'rgb(255, 255, 255)'}}>Discover<br/>
        more</p>
        <img src={Discover}/>
       </div>
        </div>
        <div className="ml-[60px] mt-[97px]">
            
            <h4
          className="w-[324px] text-[40px] "
          style={{
            fontFamily: 'Helvetica',
            background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
            fontWeight:'500',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          
          }}
        >
          Sign up for a free trail lesson
        </h4>
            <p className="text-[16px] mt-[16px] mb-[34px]" style={{color: 'rgba(0, 0, 0, 0.5)',fontFamily: 'Helvetica-normal'}}>Expand Your Horizons with Online Eduction</p>
            <div>
                <div className="flex items-center w-[300px] pb-[7px]" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
                    <img className="mr-[12px]" src={User}/>
                    <input placeholder="Your name" className="border-none outline-none"/>
                </div>
                <div className="mt-[30px] flex items-center w-[300px] pb-[7px]" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
                    <img src={Email} className="mr-[12px]"/>
                    <input placeholder="Email address" className="border-none outline-none"/>
                </div>
                <div className="mt-[30px] flex items-center w-[300px] pb-[7px]" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
                    <img src={Select} className="mr-[12px]"/>
                    <select name="course" id="course" className="w-[300px] border-none outline-none cursor-pointer">
                     <option  disabled>Select a course</option>
                     <option value="Frontend">Frontend</option>
                     <option value="Backend">Backend</option>
                     <option value="UI/UX">UI/UX</option>
                   </select>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Signin;