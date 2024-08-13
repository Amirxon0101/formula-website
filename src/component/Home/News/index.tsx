import React from "react";
import ViewTeachers from '../../../assets/icons/explore.svg'
import News1 from '../../../assets/imgs/news1.jpg'
import News2 from '../../../assets/imgs/news2.jpg'
import Newsbut from '../../../assets/imgs/newsbut.jpg'
import User from '../../../assets/icons/whiteuser.svg'
import Comment from '../../../assets/icons/comment.svg'


  const News: React.FC = () => {
    
return(
    <div className="flex  pl-[174px] pt-[80px] " style={{borderTop: '1px solid rgba(30, 30, 30, 0.3)',borderBottom: '1px solid rgba(30, 30, 30, 0.3)'}}>
           <div>
        <h4 className="w-[324px] text-[40px] mb-[28px] "style={{fontWeight:'500',fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',}}>
        Our latest news
and up comin
blogpost
        </h4>
        <p className='text-[16px] w-[306px] mb-[48px] mr-[80px]' style={{color: 'rgba(30, 30, 30, 0.7)',fontFamily:'Helvetica-normal'}}>Online platforms often offer mico-courses or modules, allowing learnes to focus on 
        specific topics of interest and acquire targeted skillis</p>
         <button className='flex items-center bg-white border-none' style={{borderBottom: '1px solid rgb(35, 45, 79)'}}><p className=' text-[24px]' style={{color: 'rgb(35, 45, 79)',fontFamily:'Helvetica-normal',fontWeight:'400'}}>View all teachers</p><img src={ViewTeachers}/></button>
        </div>

        <div className="flex">
          <div className="relative">
             <img className="w-[329px] " src={News1}/>
             <button className="top-[0px] absolute border-none outline-none flex items-center  px-[16px] py-[12px] text-[14px] rounded-[10.71px]" style={{background: 'linear-gradient(-47.00deg, rgb(249, 20, 83) 6.16%,rgb(236, 78, 191) 94.575%)',fontFamily:'Helvetica',fontWeight:'400',color: 'rgb(255, 255, 255)'}}><p className="text-[32px] mr-[3px]" style={{fontFamily:'Helvetica',fontWeight:'400'}}>20</p>sep</button>
             <button className="rounded-[100px] absolute border-none outline-none bg-white top-[200px] left-[220px]"><img className="w-[90px] h-[90px] rounded-full" src={Newsbut}/></button>
             <h5 className="mt-[18px] mb-[8px] text-[24px]" style={{color: 'rgb(36, 45, 78)',fontFamily:'Helvetica-normal'}}>The quality role</h5>
             <div className="flex items-center">
                <button className="mr-[12px] flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(61, 161, 255)'}}><img  src={User}/><span style={{color: 'rgb(255, 255, 255)'}}>By admin</span></button>
                <button className="flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(251, 98, 76)'}}><img className="mr-[3px]" src={Comment}/><span style={{color: 'rgb(255, 255, 255)'}}>2 comments</span></button>

             </div>
             <p className="w-[300px] mt-[16px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(0, 0, 0, 0.6)'}}>Organizing and structuring information to
             create logic and user-friendly interfaces.</p>
          </div>
          <div className="relative ml-[80px]">
             <img className="w-[329px] " src={News2}/>
             <button className="top-[0px] absolute border-none outline-none flex items-center  px-[16px] py-[12px] text-[14px] rounded-[10.71px]" style={{background: 'linear-gradient(-47.00deg, rgb(249, 20, 83) 6.16%,rgb(236, 78, 191) 94.575%)',fontFamily:'Helvetica',fontWeight:'400',color: 'rgb(255, 255, 255)'}}><p className="text-[32px] mr-[3px]" style={{fontFamily:'Helvetica',fontWeight:'400'}}>20</p>sep</button>
             <button className="absolute top-[200px] left-[220px] border-none outline-none bg-white "><img className="w-[90px] h-[90px] rounded-full" src={Newsbut}/></button>
             <h5 className="mt-[18px] mb-[8px] text-[24px]" style={{color: 'rgb(36, 45, 78)',fontFamily:'Helvetica-normal'}}>The quality role</h5>
             <div className="flex items-center">
                <button className="mr-[12px] flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(61, 161, 255)'}}><img  src={User}/><span style={{color: 'rgb(255, 255, 255)'}}>By admin</span></button>
                <button className="flex items-center border-none outline-none rounded-[15px] py-[5px] px-[13px]" style={{background: 'rgb(251, 98, 76)'}}><img className="mr-[3px]" src={Comment}/><span style={{color: 'rgb(255, 255, 255)'}}>2 comments</span></button>

             </div>
             <p className="w-[300px] mt-[16px]" style={{fontFamily:'Helvetica-normal',color: 'rgba(0, 0, 0, 0.6)'}}>Organizing and structuring information to
             create logic and user-friendly interfaces.</p>
          </div>
          <p className="h-[700px] mt-[-200px] ml-[50px]" style={{border: '1px solid rgba(30, 30, 30, 0.3)'}}></p>
        </div>

    </div>
)
};

export default News;