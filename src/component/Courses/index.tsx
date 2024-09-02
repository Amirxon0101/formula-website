import Navbar from "../Navbar";
import Coursesimg from '../../assets/imgs/Coursesimg.jpg'
import Buycourse from '../../assets/icons/buycourseimg.svg'
import Addcourse from '../../assets/icons/addcourse.svg'
import { useNavigate } from "react-router-dom";
const Courses = () => {

const navigate = useNavigate();

const courses=[{
    id:1,
    image:Coursesimg,
    title:'UI/UX Designer',
    text:'Look for courses that cover the fundamental principles of UI/UX design, including user research,information architecture, wireframing, prototyping, usability testing,and visual design.',
    price:'$ 150.00',
    
},
 {
    id:2,
    image:Coursesimg,
    title:'UI/UX Designer',
    text:'Look for courses that cover the fundamental principles of UI/UX design, including user research,information architecture, wireframing, prototyping, usability testing,and visual design.',
    price:'$ 150.00',
 },
 {
    id:3,
    image:Coursesimg,
    title:'UI/UX Designer',
    text:'Look for courses that cover the fundamental principles of UI/UX design, including user research,information architecture, wireframing, prototyping, usability testing,and visual design.',
    price:'$ 150.00',
 },
]

  return (
    <div>
        <Navbar/>
        <div className="mt-[80px]">
        <span className="pl-[120px] text-[36px] " style={{color:'rgba(30, 30, 30, 0.80)',fontFamily:'Helvetica',fontWeight:'700px'}}>Courses</span>
        <div className="flex flex-wrap pl-[0px] pr-[120px] sm:pl-[120px]">
            {courses.map((item,key)=>(
                            <div key={key} className="w-[516px] pl-[22px] pt-[20px] pr-[22px] pb-[20px]  rounded-[10px] mt-[50px] mr-[30px]" style={{border:' 1px solid rgba(30, 30, 30, 0.2)'}}>
                            <img className="w-[320px] h-[254px] sm:w-[470px]" src={item.image}/>
                            <div className="mt-[27px]">
                            <span className=" text-[20px]" style={{color:'#8132C1',fontFamily:'Helvetica-normal'}}>{item.title}</span>
                            <p className="w-[320px] text-[14px] mt-[14px] mb-[20px] sm:w-[400px]"  style={{color:'rgba(0, 0, 0, 0.70)',fontFamily:'Helvetica-normal'}}>{item.text}</p>
                           <span className="text-[20px] " style={{color:'rgba(30, 30, 30, 0.70)',fontFamily:'Helvetica'}}>{item.price}</span>
                           </div>
                           <div className="flex items-center mt-[20px] ">
                            <button className="flex items-center border-none outline-none py-[13px] px-[48px] rounded-[3px] cursor-pointer" onClick={()=>navigate('/Courses/details')} style={{background:'linear-gradient(87deg, #C859FC 0%, #A344FF 106.22%)'}}>
                                <img src={Buycourse}/>
                                <span className="text-[16px] ml-[10px]" style={{fontFamily:'Helvetica-normal',color:'white'}} >Buy now </span>
                            </button>
                            <button className="ml-[24px] flex items-center  pt-[11px] pb-[12px] px-[38px] rounded-[4px] cursor-pointer"style={{border:'0.42px solid rgba(35, 45, 79, 0.6)'}}>
                                <img src={Addcourse}/>
                                <span className="text-[16px] ml-[10px]" style={{fontFamily:'Helvetica-normal',color:'rgba(30, 30, 30, 0.80)'}}>Add to cart </span>
                            </button>
                           </div>
                        </div>
            ))}

     
            
            
        </div>
        </div>
    </div>
  );
};

export default Courses;
