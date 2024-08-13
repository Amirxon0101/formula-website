import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import Loop from '../../assets/icons/loop.svg';
import Cart from '../../assets/icons/cart.svg';
import Buticon from '../../assets/icons/buticon.svg';
import Edumate from '../../assets/imgs/edumate.jpg';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
<div className=" flex flex-col items-center sm:flex-row sm:pl-[70px] h-[120px] sm:pr-[55px] bg-white sm:text-center ">
{/* Container for Edumate image and Navigation Links */}
      <div className="flex items-center w-full sm:justify-between lg:justify-start  sm: ml-[50px] lg:ml-[0px]">
        {/* Edumate Image */}
        <div className="]">
        <img className="ml-[50px] sm: ml-[90px] h-[41px]  " alt="Edumate" src={Edumate} />
        </div>
        {/* Navigation Links */}
        <ul className="hidden sm:flex items-center list-none ml-[50px]">
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Home</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>About</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Courses</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Teachers</a></li>
          <li><a href="#" className='pb-2 sm:pb-0 sm:pr-[53px]' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Blogs</a></li>
          <li><a href="#" className='' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <Button className="sm: absolute mt-[10px] block sm:hidden" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        width={150}
        footer={null} // Optional, if you don't need a footer
      >
        <ul className="list-none p-4 sm:justify-start">
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Home</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>About</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Courses</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Teachers</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Blogs</a></li>
          <li><a href="#" className='block py-2' style={{ textDecoration: 'none', fontFamily: 'SF Pro Display', color: 'rgb(35, 45, 80)' }}>Contact</a></li>
        </ul>
      </Drawer>

      {/* Icons and Button Section */}
      <div className="flex  items-center    sm:pl-[90px] mt-4 sm:mt-0 sm:justify-center ">
        <img className="lg:static mr-[15px] cursor-pointer sm:mr-[25px] sm: absolute top-[20px] left-[260px] lg:static " src={Loop} alt="Search" />
        <img className="lg:static mr-[15px] cursor-pointer sm:mr-[20px] sm:mr-[25px] sm: absolute top-[20px] left-[290px]  " src={Cart} alt="Cart" />
        <button className="cursor-pointer flex relative w-[140px] pl-[14px] border-none py-[12px]  " style={{ background: 'linear-gradient(46.94deg, rgb(200, 89, 252) 0%, rgb(163, 68, 255) 106.217%)' }}>
          <span style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Helvetica', fontWeight: '500' }}>Try for free</span>
          <img className="absolute top-[-5px] sm:top-[-7px] right-[-5px] sm:right-[-6px]" src={Buticon} alt="Button Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
