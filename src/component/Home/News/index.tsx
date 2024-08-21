import React from "react";
import ViewTeachers from '../../../assets/icons/explore.svg'
import News1 from '../../../assets/imgs/news1.jpg'
import News2 from '../../../assets/imgs/news2.jpg'
import Newsbut from '../../../assets/imgs/newsbut.jpg'
import User from '../../../assets/icons/whiteuser.svg'
import Comment from '../../../assets/icons/comment.svg'


  const News: React.FC = () => {
    
return(
    <div className="flex flex-col lg:flex-row lg:pl-[174px] pt-[80px] px-4 lg:px-0 " style={{ borderTop: '1px solid rgba(30, 30, 30, 0.3)', borderBottom: '1px solid rgba(30, 30, 30, 0.3)' }}>
           <div className="lg:mr-[80px] mb-8 lg:mb-0">
        <h4 className="text-[32px] lg:text-[40px] mb-[28px] w-full lg:w-[324px] "style={{fontWeight:'500',fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',}}>
        Our latest news
and up comin
blogpost
        </h4>
        <p className='text-[16px] w-[306px] mb-[48px] mr-[80px]' style={{color: 'rgba(30, 30, 30, 0.7)',fontFamily:'Helvetica-normal'}}>Online platforms often offer mico-courses or modules, allowing learnes to focus on 
        specific topics of interest and acquire targeted skillis</p>
         <button className='flex items-center bg-white border-none' style={{borderBottom: '1px solid rgb(35, 45, 79)'}}><p className=' text-[24px]' style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica-normal',fontWeight:'400'}}>View all teachers</p><img src={ViewTeachers}/></button>
        </div>

        <div className="flex flex-col items-center sm:flex-col sm:items-center xl:flex-row mb-[80px]">
  <div className="relative mr-[10px]">
    <img className="w-[329px]" src={News1} />
    <button className="top-[0px] absolute border-none outline-none flex items-center  px-[16px] py-[12px] text-[14px] rounded-[10.71px]" style={{background: 'linear-gradient(-47.00deg, rgb(249, 20, 83) 6.16%,rgb(236, 78, 191) 94.575%)',fontFamily:'Helvetica',fontWeight:'400',color: 'rgb(255, 255, 255)'}}>
      <p className="text-[32px] mr-[3px]" style={{fontFamily:'Helvetica',fontWeight:'400'}}>20</p>sep
    </button>
    <button className="rounded-[100px] absolute border-none outline-none bg-white top-[200px] right-[0%] ">
      <img className="w-[90px] h-[90px] rounded-full" src={Newsbut} />
    </button>
    <h5 className="mt-[18px] mb-[8px] text-[24px] sm: ml-[10px]" style={{color: 'rgb(36, 45, 78)',fontFamily:'Helvetica-normal'}}>The quality role</h5>
    <div className="flex items-center ">
      <button className="mr-[12px] flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(61, 161, 255)'}}>
        <img src={User} /><span style={{color: 'rgb(255, 255, 255)'}}>By admin</span>
      </button>
      <button className="flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(251, 98, 76)'}}>
        <img className="mr-[3px]" src={Comment} /><span style={{color: 'rgb(255, 255, 255)'}}>2 comments</span>
      </button>
    </div>
    <p className="w-[300px] mt-[16px] text-center" style={{fontFamily:'Helvetica-normal',color: 'rgba(0, 0, 0, 0.6)'}}>
      Organizing and structuring information to create logic and user-friendly interfaces.
    </p>
  </div>
  <div className="relative mb-[40px] sm:mb-[0px]">
    <img className="w-[329px]" src={News2} />
    <button className="top-[0px] absolute border-none outline-none flex items-center  px-[16px] py-[12px] text-[14px] rounded-[10.71px]" style={{background: 'linear-gradient(-47.00deg, rgb(249, 20, 83) 6.16%,rgb(236, 78, 191) 94.575%)',fontFamily:'Helvetica',fontWeight:'400',color: 'rgb(255, 255, 255)'}}>
      <p className="text-[32px] mr-[3px]" style={{fontFamily:'Helvetica',fontWeight:'400'}}>20</p>sep
    </button>
    <button className="absolute top-[200px]  transform right-[0%] border-none outline-none bg-white">
      <img className="w-[90px] h-[90px] rounded-full" src={Newsbut} />
    </button>
    <h5 className="mt-[18px] mb-[8px] text-[24px] sm: ml-[10px]" style={{color: 'rgb(36, 45, 78)',fontFamily:'Helvetica-normal'}}>The quality role</h5>
    <div className="flex items-center ">
      <button className="mr-[12px] flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(61, 161, 255)'}}>
        <img src={User} /><span style={{color: 'rgb(255, 255, 255)'}}>By admin</span>
      </button>
      <button className="flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(251, 98, 76)'}}>
        <img className="mr-[3px]" src={Comment} /><span style={{color: 'rgb(255, 255, 255)'}}>2 comments</span>
      </button>
    </div>
    <p className="w-[300px] mt-[16px] text-center" style={{fontFamily:'Helvetica-normal',color: 'rgba(0, 0, 0, 0.6)'}}>
      Organizing and structuring information to create logic and user-friendly interfaces.
    </p>
  </div>
  <p className="w-full border-t border-gray-300 md:border-t-0 sm:border-t-0 md:h-auto sm:h-auto"></p>
  </div>

    </div>
)
};

export default News;