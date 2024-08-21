import React from "react";
import Signinimg from '../../../assets/imgs/Signinimg.jpg';
import Discover from '../../../assets/icons/discover.svg';
import User from '../../../assets/icons/user.svg';
import Email from '../../../assets/icons/email.svg';
import Select from '../../../assets/icons/select.svg';

const Signin: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row pb-[100px] lg:pb-[50px]" style={{borderTop: '1px solid rgba(30, 30, 30, 0.3)', borderBottom: '1px solid rgba(30, 30, 30, 0.3)'}}>
      <div className="relative mt-[40px] lg:ml-[242px] lg:mt-[97px] mx-auto">
        <img className="w-[300px] lg:w-[522px]" style={{background: 'rgb(249, 249, 248)'}} src={Signinimg} />
        
      </div>
      <div className="mt-[40px] lg:mt-[97px] lg:ml-[60px] mx-auto lg:mx-0">
        <h4 className="text-[24px] lg:text-[40px] w-full text-center lg:text-left" style={{fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))', fontWeight: '500', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          Sign up for a free trial lesson
        </h4>
        <p className="text-[14px] lg:text-[16px] mt-[16px] mb-[34px] text-center lg:text-left" style={{color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Helvetica-normal'}}>
          Expand Your Horizons with Online Education
        </p>
        <div className="space-y-[20px] lg:space-y-[30px]">
          <div className="flex items-center w-full max-w-[300px] pb-[7px] mx-auto lg:mx-0" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
            <img className="mr-[12px]" src={User} />
            <input placeholder="Your name" className="border-none outline-none w-full" />
          </div>
          <div className="flex items-center w-full max-w-[300px] pb-[7px] mx-auto lg:mx-0" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
            <img src={Email} className="mr-[12px]" />
            <input placeholder="Email address" className="border-none outline-none w-full" />
          </div>
          <div className="flex items-center w-full max-w-[300px] pb-[7px] mx-auto lg:mx-0" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
            <img src={Select} className="mr-[12px]" />
            <select name="course" id="course" className="w-full border-none outline-none cursor-pointer">
              <option disabled>Select a course</option>
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
