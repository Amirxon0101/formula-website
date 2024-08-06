import React from "react";
import Loop from '../../assets/icons/loop.svg';
import Cart from '../../assets/icons/cart.svg';
import Buticon from '../../assets/icons/buticon.svg';
import Edumate from '../../assets/imgs/edumate.jpg'

  const Navbar: React.FC = () => {
    return (
      <div className="flex items-center pl-[70px] h-[120px] pr-[55px bg-white " >
      <div className="sm: justify-center text-centen">
        <img className=" h-[61px]"  alt="Edumate" src={Edumate} />
      </div>
      <div className=" ml-[160px] ">
        <ul className="flex items-center list-none">
          <li><a href="#" className='pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Home</a></li>
          <li><a href="#" className='pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>About</a></li>
          <li><a href="#" className='pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Courses</a></li>
          <li><a href="#" className='pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Teachers</a></li>
          <li><a href="#" className='pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Blogs</a></li>
          <li><a href="#" className="" style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Contact</a></li>

        </ul>
      </div>
      
      <div className="pl-[140px]  flex justify-center sm:justify-end ">
        <img className="mr-[15px] cursor-pointer md:mr-[25px]" src={Loop} alt="Search" />
        <img className="mr-[15px] cursor-pointer md:mr-[20px]" src={Cart} alt="Cart" />
        <button className=" cursor-pointer flex relative   w-[140px]  pl-[14px] border-none py-[12px]" style={{ background: 'linear-gradient(46.94deg, rgb(200, 89, 252) 0%, rgb(163, 68, 255) 106.217%)' }}>
          <span style={{ color: 'rgb(255, 255, 255)',fontFamily:'Helvetica',fontWeight:'500' }}>Try for free</span>
          <img className="absolute top-[-5px] md:top-[-7px] right-[-5px] md:right-[-6px]" src={Buticon} alt="Button Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
