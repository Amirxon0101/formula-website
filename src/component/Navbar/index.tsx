import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import Loop from '../../assets/icons/loop.svg';
import Cart from '../../assets/icons/cart.svg';
import Buticon from '../../assets/icons/buticon.svg';
import Edumate from '../../assets/imgs/edumate.jpg';
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
const navigate  = useNavigate()
const GotoAbout=()=>{
  navigate('/About')
}
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
<div className=" flex  items-center  sm:pl-[70px] h-[120px] sm:pr-[55px] bg-white sm:text-center flex-col xl:flex-row ">

<div className="flex items-center flex-row ml-[50px] sm:flex-col sm:justify-between md:flex-col ml-[-100px]  lg:flex-row xl:flex-row">
        <div className="lg:mb-[20px]">
        <img className=" h-[61px] sm: ml-[0px] h-[41px]  " alt="Edumate" src={Edumate} />
        </div>
        <ul className="hidden mt-[30px] mr-[100px] sm:flex items-center list-none ml-[50px] lg:mb-[20px]">
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}  onClick={()=>navigate('/')}>Home</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={GotoAbout}>About</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/Courses')}>Courses</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}  onClick={()=>navigate('/Teachers')}>Teachers</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/Blogs')}>Blogs</a></li>
          <li><a href="#" className='' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Contact</a></li>
        </ul>
        <div className="flex items-center   lg: mb-[16px] mt-[9px]">
      <img className=" mr-[15px] cursor-pointer sm:mr-[25px] sm:   " src={Loop} alt="Search" />
      <img className=" mr-[15px] cursor-pointer sm:mr-[20px] sm:mr-[25px]   " src={Cart} alt="Cart" />
      </div>
        <Button className="sm: absolute top-[30px] left-[10px] block sm:hidden" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        width={150}
        footer={null} // Optional, if you don't need a footer
      >
        <ul className="list-none p-4 sm:justify-start">
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/')}>Home</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={GotoAbout}>About</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/Courses')}>Courses</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/Teachers')}>Teachers</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }} onClick={()=>navigate('/Blogs')}>Blogs</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Contact</a></li>
        </ul>
      </Drawer>
 
     
      <div className="flex  items-center    mt-4 sm:mt-0 sm:justify-center ">
       
        <button className="cursor-pointer flex relative w-[140px] pl-[14px] border-none py-[12px]  " style={{ background: 'linear-gradient(46.94deg, rgb(200, 89, 252) 0%, rgb(163, 68, 255) 106.217%)' }}>
          <span style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Helvetica', fontWeight: '500' }}>Try for free</span>
          <img className="absolute top-[-5px] sm:top-[-7px] right-[-5px] sm:right-[-6px]" src={Buticon} alt="Button Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
