import React from "react";
import Loc from '../../assets/icons/location.svg'
import Net from '../../assets/icons/network.svg'
import Call from '../../assets/icons/call.svg'
import BlackFacebook from '../../assets/icons/blackfacebook.svg'
import BlackTwitter from '../../assets/icons/blacktwitter.svg'
import BlackLinkedin from '../../assets/icons/blacklinkedin.svg'
import Edumate from '../../assets/imgs/edumate.jpg'
import But from '../../assets/icons/explore.svg'
import Email from '../../assets/icons/email.svg'
import FooterImg from '../../assets/icons/footer.svg'
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div  >
<div className="flex  xl:flex-row 2xl:flex-row pl-[174px] xl:pl-[174px] max-sm:flex-col max-sm:pl-[16px] sm:flex-col sm:pl-[56px] md:pl-[80px] lg:pl-[104px] lg:flex-row ">       
   <div className="flex flex-col mr-[10px] lg:mr-[50px] xl:mr-[20px]">
          <img className="w-[200px] mt-[27px]" src={Edumate}/>
          <span className="text-[16px] w-[150px] mt-[10px] mb-[16px]" style={{color: 'rgba(0, 0, 0, 0.6)',fontFamily:'Helvetica'}}>Get 25M best online
          course</span>
          <div className="flex items-center mb-[8px]"><img className="mr-[15px]" src={Loc}/><p>Small ring road. 4/1block4</p></div>
          <div className="flex items-center mb-[8px]"><img className="mr-[15px]" src={Net}/><p>www.edumate.com</p></div>
          <div className="flex items-center mb-[40px] max-sm:mb-5 sm:mb-2 xl:mb-[40px]"><img className="mr-[15px]" src={Call}/><p>0191 410 4155</p></div>
          <div className="pb-[25px]">
            <button className="border-none outline-none bg-white"><a href="#"><img src={BlackFacebook}/></a></button>
            <button className="border-none outline-none bg-white"><a href="#"><img src={BlackTwitter}/></a></button>
            <button className="border-none outline-none bg-white"><a href="#"><img src={BlackLinkedin}/></a></button>
          </div>
        </div>
        <div>
          <div className=" w-[1070px] flex items-center pt-[50px] pl-[55px] pb-[42px] 
          max-sm:flex-col max-sm:pl-0 max-sm:items-start max-sm:pt-[8px]
          sm:items-start sm:flex-col sm:pl-0 sm:pt-[8px] lg:pt-[50px]
          xl:pt-[50px] xl:flex-row xl:items-center" style={{borderLeft: '1px solid rgba(30, 30, 30, 0.3)'}}>
            <div className="max-sm:flex-row max-sm:pl-[35px] max-sm:flex sm:pl-[35px] sm:flex xl:flex">
            <span className="mr-[5px] text-[32px] max-sm:text-[20px] max-sm:mr-[12px] md:text-[32px]" style={{  fontFamily:'Helvetica',fontWeight:400,background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',textFillColor: 'transparent',}}>Main links</span>
            <img src={But}/>
            </div>
            <div>
        <ul className="flex items-center list-none 
        max-sm:flex-col max-sm:items-start max-sm:gap-[36px] max-sm:pt-[24px]
        sm:flex-col sm:items-start sm:gap-[36px] sm:pt-[24px]
        lg:flex-row lg:gap-[26px] xl:pt-0 xl:gap-0">
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Home</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>About</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Courses</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Teachers</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Blogs</a></li>
          <li><a href="#" className="md:text-[20px]" style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Contact</a></li>

        </ul>
            </div>
          </div>
          <div className="flex items-center w-full pt-[50px] pl-[55px] pb-[42px] 
          max-sm:flex-col max-sm:pl-0 max-sm:items-start max-sm:pt-[28px] 
          sm:flex-col sm:pl-0 sm:items-start sm:pt-[28px] lg:pl-0 xl:flex-row xl:items-center xl:pt-[50px]" style={{borderTop: '1px solid rgba(30, 30, 30, 0.3)',borderLeft: '1px solid rgba(30, 30, 30, 0.3)',borderBottom: '1px solid rgba(30, 30, 30, 0.3)'}}>
            <div className="max-sm:flex-row max-sm:pl-[35px] max-sm:flex sm:flex sm:flex-row sm:pl-[35px] ">
            <span className="mr-[37px] text-[32px] max-sm:text-[20px] max-sm:mr-[12px] sm:text-[20px] sm:mr-[12px] md:text-[32px]" style={{  fontFamily:'Helvetica',fontWeight:400,background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',textFillColor: 'transparent',}}>Explore</span>
            <img src={But}/>
            </div>
            <div>
        <ul className="flex flex-wrap items-center list-none 
        max-sm:flex-col max-sm:items-start max-sm:gap-[36px] max-sm:pt-[24px]
        sm:flex-col sm:items-start sm:gap-[36px] sm:pt-[24px]
        lg:flex-row lg:gap-[6px] xl:gap-0 xl:pt-0
        ">
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}} onClick={()=>navigate('/SignIn')}>Sign In/Registration</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Investor</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Careers</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>Help and support</a></li>
          <li><a href="#" className='pr-[53px] md:text-[20px] lg:pr-[23px] xl:pr-[53px]' style={{textDecoration:'none', fontFamily:'SF Pro Display',color: 'rgb(35, 45, 80)'}}>affilate</a></li>

        </ul>
            </div>
          </div>
          <div className="w-full flex items-center pt-[50px] pl-[55px] pb-[42px] 
          max-sm:flex-col max-sm:items-start max-sm:pl-[40px] sm:flex-col sm:items-start sm:pl-[40px] xl:flex-row xl:items-center" style={{borderLeft: '1px solid rgba(30, 30, 30, 0.3)'}} >
            <span className="mr-[37px] text-[32px] max-sm:pb-[24px] max-sm:text-[24px] sm:pb-[24px] sm:text-[24px] md:text-[32px] xl:pb-0" style={{  fontFamily:'Helvetica',fontWeight:400,background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text'}}>Subacribe for newslatter</span>
            <div className=" flex items-center w-[463px] pb-[7px] max-sm:w-[232px] sm:w-[300px] md:w-[370px] xl:w-[463px]" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
                    <img src={Email} className="mr-[12px]"/>
                    <input placeholder="Email address" className="w-[300px] border-none outline-none"/>
                    <img className="ml-[200px] sm:ml-[110px] xl:ml-[200px]" src={But}/> 
                </div>
    
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[32px] pb-[30px] flex-wrap max-sm:gap-2 " style={{borderTop: '1px solid rgba(30, 30, 30, 0.3)'}}>
        <p className="mr-[5px] text-[16px] sm:mr-0" style={{color: 'rgba(0, 0, 0, 0.4)',fontFamily:'Helvetica'}}>Copyright </p>
        <img className="mr-[5px] text-[16px] sm:mr-[20px]"style={{color: 'rgba(0, 0, 0, 0.4)',fontFamily:'Helvetica'}} src={FooterImg}/>
        <p className="mr-[5px] text-[16px] max-sm:mr-0 sm:mr-[20px]"style={{color: 'rgba(0, 0, 0, 0.4)',fontFamily:'Helvetica'}}>Edumate,All Rights Resvered</p>
        <p className="text-[16px]" style={{color: 'rgba(0, 0, 0, 0.4)',fontFamily:'Helvetica'}}>Terma & Conditions Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
