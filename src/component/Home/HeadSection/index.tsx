import React from "react";
import Shape from "../../../assets/icons/shape.svg"
import { Avatar, Tooltip } from "antd";
import Girl from '../../../assets/icons/girl.svg'
import MainImg from '../../../assets/imgs/guarantee.jpg'
import Guarantee from '../../../assets/imgs/guaranteetap.jpg'
import Salestar from '../../../assets/icons/salestar.svg'
import Explore from '../../../assets/icons/explore.svg'
export const HeadSection: React.FC = () => {
  return (
    <div className="w-full" >
      <div className="flex sm: flex-col md:flex-col lg:flex-row " >
        <div className="pl-[120px] w-[620px] sm: pl-[16px] md:pl-[120px] ">
          <div className="flex items-center relative ">
           <h1 style={{fontFamily:'Helvetica',color: "#232D50"}} className="text-[52px] mt-[52px] mb-[27px]">ONLINE <br/>LEARNING</h1>
          <span  style={{background: 'rgb(255, 97, 0)',color:'rgb(255, 255, 255)',transform: 'rotate(27.25deg)',fontFamily:'Helvetica-light',fontWeight:'400'}} className="rounded-[20px] px-[11px] pt-[7px] pb-[5px] absolute right-[190px] bottom-[30px] sm: right-[300px] ">7$/m</span>
          <img className="sm: absolute left-[160px]" src={Shape}/>
        </div>
        <div className="">
          <p className="w-[907px] h-[0px] mb-[34px] " style={{border: '1px solid rgba(30, 30, 30, 0.2)'}}></p>
          <p style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica-light',fontWeight:'400'}} className="mb-[23px] text-[16px] sm: ml-[15px]">More than 26,000+ courses from us</p>
          <div className="flex flex-row items-center sm: flex flex-col sm: ml-[-300px]">
            <button className="outline-none py-[10px] px-[22px] border-box rounded-[18px] text-[16px] cursor-pointer  sm: mb-[10px]"style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Web devolopment</button>
            <button className="outline-none py-[10px] px-[26px] border-box rounded-[18px] text-[16px] ml-[12px] cursor-pointer "style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Designing</button>
          </div>
          <div className="flex flex-row items-center mt-[12px] sm: flex flex-col sm: ml-[-300px] ">
          <button className="outline-none py-[10px] px-[26px] border-box rounded-[18px] text-[16px]  cursor-pointer sm: mb-[10px]"style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>UI/UX Designing</button>
          <button className="outline-none py-[10px] px-[26px] border-box rounded-[18px] text-[16px] ml-[12px] cursor-pointer sm: mb-[10px]"style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>AI</button>
          <button className=" outline-none py-[10px] px-[26px] border-box rounded-[18px] text-[16px] ml-[12px] cursor-pointer "style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Machine learning</button>
          </div>
          <button className="outline-none py-[10px] px-[16px] border-box rounded-[18px] text-[16px] mt-[12px] cursor-pointer sm: ml-[60px] "style={{ border: '0.5px solid rgb(35, 45, 79)',background: 'rgb(255, 255, 255)',fontFamily:'Helvetica-light'}}>Wordpress devlopmend</button>
        </div>
      </div>
      <div className="ml-[226px] mt-[60px] sm: ml-[0px]">
      <div className="flex flex-row mb-[33px]  sm: ml-[0px]">
          <p className="text-[16px] mr-[40px] sm: text-center " style={{fontFamily:'Helvetica-light',color:'rgb(30, 30, 30)',lineHeight:'20px'}}>World class training and <br/>development programs develoed <br/> by top terachers</p>
          <div className="text-center flex flex-col items-center ml-[50px] sm: ml-[-4px]">
  <Avatar.Group>
    <img src={Girl} alt="Girl Avatar" />
    <a href="https://ant.design">
      <img src={Girl} alt="Girl Avatar" />
    </a>
    <Tooltip title="Ant User" placement="top">
      <img src={Girl} alt="Girl Avatar" />
    </Tooltip>
    <img src={Girl} alt="Girl Avatar" />
  </Avatar.Group>
  <span className="mt-2  text-center" style={{fontFamily:'Helvetica-light',color:'rgb(30, 30, 30)'}}>student passed</span>
</div>
        </div>
        <div className="relative w-full sm:w-screen sm:mx-auto">
        <img
  src={MainImg}
  className=" h-auto sm:w-screen sm:h-auto sm:object-cover"
  style={{ maxWidth: '100%' }}  // Ensure the image does not exceed the screen width
  alt="Main"
/>
  <img
    className="absolute left-[-100px] top-[160px] w-[189px]  rounded-[340px] object-cover sm: top-[-10px] w-[90px] left-[200px]"
    src={Guarantee}
    alt="Guarantee"
  />
</div>
      </div>
      

      </div>
      <div className="relative mt-[-60px] ">
      <div className="py-[28px] px-[40px] absolute   w-[1549px] justify-between right-[-40px] " style={{background: 'rgb(94, 56, 143)',transform: 'rotate(5.44deg)'}}>
        <span className="text-[30px]            sm: text-[5px]" style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgb(255, 255, 255)'}}>udemy</span>
        <span className="text-[30px] pl-[200px] sm: text-[5px]" style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgb(255, 255, 255)'}}>coursera</span>
        <span className="text-[30px] pl-[200px] sm: text-[5px]" style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgb(255, 255, 255)'}}>coursera</span>
        <span className="text-[30px] pl-[200px] sm: text-[5px]" style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgb(255, 255, 255)'}}>Google</span>
        <span className="text-[30px] pl-[200px] sm: text-[5px]" style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgb(255, 255, 255)'}}>Cognizant</span>
      </div>
      <div className="mb-[83px] flex items-center py-[10px] px-[19px] absolute justify-between  w-[1549px]  right-[-40px] " style={{background: 'rgb(36, 44, 80)',transform: 'rotate(-4.94deg)'}}>
        <img src={Salestar} />
        <span className="text-[30px] " style={{fontFamily:'JejuMyeongjo',fontWeight:'400',color: ' rgb(255, 255, 255)'}}>Best online course</span>
        <img src={Salestar} />
        <span className="text-[30px] " style={{fontFamily:'JejuMyeongjo',fontWeight:'400',color: ' rgb(255, 255, 255)'}}>Flat discount on all courses</span>
        <img src={Salestar}  />
        <span className="text-[30px] " style={{fontFamily:'JejuMyeongjo',fontWeight:'400',color: ' rgb(255, 255, 255)'}}>Summer collection sele </span>
        <img src={Salestar}  />
        <span className="text-[30px] " style={{fontFamily:'JejuMyeongjo',fontWeight:'400',color: ' rgb(255, 255, 255)'}}>Best</span>
      </div>
     </div>
     <div className=" mt-[100px] flex pl-[223px] items-center "style={{borderBottom:' 1px solid rgba(30, 30, 30, 0.3)'}}>
      <div className="mr-[212px]">
     <h3  className=" text-[40px] font-[500] leading-[40px] tracking-wide text-left " style={{ fontFamily: 'Helvetica-bold', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',backgroundClip: 'text'}}>
      Grow your skills <br /> learn with us from <br /> anywhere
    </h3>
    </div>
      <div className="">
        <button className="border-none flex items-center w-[184px] justify-between bg-white"style={{borderBottom:' 1px solid rgb(35, 45, 79)'}}>
        <span className="text-[24px]" style={{fontFamily:'Helvetica-normal',color: 'rgb(35, 45, 79)',fontWeight:'400'}} >
         Explore now
       </span>
          <img src={Explore}/>
        </button>
        <p className="text-[16px] mt-[10px] w-[471px] mr-[67px]" style={{fontFamily:'Helvetica-light',color:'rgba(30, 30, 30, 0.7)',lineHeight:'16px'}}>Online education has media quality education more<br/> accessble to a wider range of learners.It removes barriers <br/>   such as geographical limotations.</p>
      </div>
      <p className=" h-[285px]" style={{border: '1px solid rgba(30, 30, 30, 0.2)'}}></p>

     </div>
     </div>
  );
};
