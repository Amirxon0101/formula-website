import Circle1 from '../../../assets/icons/circle1.svg';
import Commentbg from '../../../assets/imgs/commentbg.jpg';
import Commentimg from '../../../assets/imgs/commentimg.jpg'
import Stars from '../../../assets/icons/star.svg'
import Carousel from 'react-multi-carousel';
import { useRef } from 'react';

const Comment: React.FC = () => {
    const carouselRef = useRef(null);

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  return (
    <div className='flex flex-col items-center h-[903px] w-[1440px] relative  '  style={{ 
      
        backgroundImage: `url(${Commentbg})`,
        backgroundSize: 'cover',  // Ensures the background image covers the entire div
        backgroundPosition: 'center',  // Centers the background image
        backgroundRepeat:'no-repeat',
        
        padding: '20px'  // Adds some padding for better visual
      }}>
        <p className='absolute h-[1090px] left-[120px] top-[0px]' style={{  border: '1px solid rgba(30, 30, 30, 0.3)',}}></p>
      <div className='flex flex-col items-center pt-[80px] mb-[28px]'>
        <h4    className="w-[524px] text-[40px]  text-center mb-[24px]"
          style={{
            fontFamily: 'Helvetica',
            background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }} >What they’re saying about our course</h4>
        <p className='w-[676px] text-center mb-[28px]'>Online platforms often offer micro-courses or modules, allowing learners to focus on specific topics of interest and acquire targeted skills.</p>
      </div>
      <p className= 'absolute  bottom-[0px] w-[456px] h-[367px] rounded-[20px] left-[260px] ' style={{zIndex:'1',background:' linear-gradient(130.30deg, rgb(190, 190, 250) 54.063%,rgb(238, 238, 239) 71.048%)'}}></p>
      <p className= 'absolute  w-[196px] h-[175px] rounded-[20px]  top-[270px] right-[270px]' style={{zIndex:'1',background:' linear-gradient(-46.55deg, rgb(250, 239, 236) 39.095%,rgb(245, 187, 177) 76.042%)'}}></p>

     
      <div  style={{zIndex:'888'}} >
        <div className='w-[797px] h-[530px] rounded-[70px] flex  ' style={{zIndex:'22',backdropFilter: 'blur(36px)',background: 'rgba(255, 255, 255, 0.66)',border: '10px solid rgb(248, 246, 246)'}}>
          <img className=' pt-[84px] ml-[64px] pb-[84px] '  src={Commentimg} style={{zIndex:'213'}}/>
          <div className='mt-[131px] ml-[50px]' style={{zIndex:'13'}}>
          <h5 className='text-[40px] 'style={{fontFamily:'Helvetica',fontWeight:'700',color: 'rgba(0, 0, 0, 0.7)'}}>Lara Ochoa</h5>
         <div className='flex mt-[6px]'>
            <span style={{fontFamily:'Helvetica',fontWeight:'500'}}>@Lara25,</span>
            <p style={{fontFamily:'Helvetica',fontWeight:'400',color: 'rgba(0, 0, 0, 0.6)'}}>CEO of central</p>  
         </div>
         <div className='mt-[6px]'>
            <img className='mr-[10px]' src={Stars}/>
            <img className='mr-[10px]' src={Stars}/>
            <img className='mr-[10px]' src={Stars}/>
            <img className='mr-[10px]' src={Stars}/>
            <img className='mr-[10px]' src={Stars}/>
          </div>
          <p className=' text-[20px] mt-[64px]' style={{color: 'rgba(0, 0, 0, 0.6)',fontFamily:'Helvetica-normal',fontWeight:'400'}}>There are many variations of<br/>passage of Lorem Ipsum <br/>available, but the majority have<br/>suffered alteration in some from,<br/>by injected humour.</p>
         </div>
         </div>
        <img className='rounded-full absolute top-[240px] left-[200px]' src={Circle1} alt="Circle Icon 1"/>
        <img className='rounded-full absolute top-[540px] left-[200px]' src={Circle1} alt="Circle Icon 2"/>
        <img className='rounded-full' src={Circle1} alt="Circle Icon 3"/>
        <img className='rounded-full' src={Circle1} alt="Circle Icon 4"/>
        <img className='rounded-full' src={Circle1} alt="Circle Icon 5"/>
      </div>
 
    </div>
  );
};

export default Comment;
