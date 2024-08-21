import Circle1 from '../../../assets/icons/circle1.svg';
import Commentbg from '../../../assets/imgs/commentbg.jpg';
import Commentimg from '../../../assets/imgs/commentimg.jpg';
import Stars from '../../../assets/icons/star.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselRight from '../../../assets/imgs/righticon.jpg'
import CarouselLeft from '../../../assets/imgs/lefticon.jpg'
import { useRef } from 'react';

const Comment: React.FC = () => {
    const carouselRef = useRef(null);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div
            className="flex flex-col items-center  w-[1440px] relative ml-[100px] "
            style={{
                backgroundImage: `url(${Commentbg})`,
                backgroundSize: 'cover',
                borderLeft:'1px solid rgba(30, 30, 30, 0.3)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '20px',
            }}
        >
         
            <div className="flex flex-col items-center pt-[80px] mb-[28px]">
                <h4
                    className="w-[524px] text-[40px] text-center mb-[24px]"
                    style={{
                        fontFamily: 'Helvetica',
                        background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                       
                    }}
                >
                    What they’re saying about our course
                </h4>
                <p className="w-[676px] text-center mb-[28px]">
                    Online platforms often offer micro-courses or modules, allowing learners to focus on specific
                    topics of interest and acquire targeted skills.
                </p>
            </div>
            <p
                className="absolute bottom-[0px] w-[456px] h-[367px] rounded-[20px] left-[260px] top-[550px]"
                style={{ zIndex: '1', background: ' linear-gradient(130.30deg, rgb(190, 190, 250) 54.063%,rgb(238, 238, 239) 71.048%)' }}
            ></p>
            <p
                className="absolute w-[196px] h-[175px] rounded-[20px] top-[270px] right-[270px]"
                style={{ zIndex: '1', background: ' linear-gradient(-46.55deg, rgb(250, 239, 236) 39.095%,rgb(245, 187, 177) 76.042%)' }}
            ></p>

            <div style={{ zIndex: '888' }}>
                <Carousel responsive={responsive} arrows={false} ref={carouselRef} className="w-[800px] ">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="w-[797px] h-[530px] rounded-[70px] flex  " style={{ zIndex: '22', backdropFilter: 'blur(36px)', background: 'rgba(255, 255, 255, 0.66)', border: '10px solid rgb(248, 246, 246)' }}>
                            <img className="pt-[84px] ml-[64px] pb-[84px]" src={Commentimg} style={{ zIndex: '213' }} />
                            <div className="mt-[131px] ml-[50px]" style={{ zIndex: '13' }}>
                                <h5 className="text-[40px]" style={{ fontFamily: 'Helvetica', fontWeight: '700', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    Lara Ochoa
                                </h5>
                                <div className="flex mt-[6px]">
                                    <span style={{ fontFamily: 'Helvetica', fontWeight: '500' }}>@Lara25,</span>
                                    <p style={{ fontFamily: 'Helvetica', fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)' }}>
                                        CEO of central
                                    </p>
                                </div>
                                <div className="mt-[6px]">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <img key={starIndex} className="mr-[10px]" src={Stars} />
                                    ))}
                                </div>
                                <p className="text-[20px] mt-[64px]" style={{ color: 'rgba(0, 0, 0, 0.6)', fontFamily: 'Helvetica-normal', fontWeight: '400' }}>
                                    There are many variations of<br />passage of Lorem Ipsum <br />available, but the majority have<br />suffered alteration in some from,<br />by injected humour.
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='flex items-center mt-[170px] '>
        <button
          onClick={() => carouselRef.current.previous()}
           className=" border-none outline-none bg-white cursor-pointer"
        
        >
          
          <img className='w-[24px]' src={CarouselLeft}/>
        </button>
        <button
          onClick={() => carouselRef.current.next()}
          className=" border-none outline-none bg-white cursor-pointer"
        >
        <img className='w-[24px]' src={CarouselRight}/>
        </button>
        </div>
            <img className="rounded-full absolute top-[240px] left-[200px]" src={Circle1} alt="Circle Icon 1" />
            <img className="rounded-full absolute top-[540px] left-[130px]" src={Circle1} alt="Circle Icon 2" />
            <img className="rounded-full absolute top-[850px] left-[170px]" src={Circle1} alt="Circle Icon 3" />
            <img className="rounded-full absolute top-[290px] right-[150px]" src={Circle1} alt="Circle Icon 4" />
            <img className="rounded-full absolute top-[540px] right-[100px]" src={Circle1} alt="Circle Icon 5" />
            <img className="rounded-full absolute top-[830px] right-[190px]" src={Circle1} alt="Circle Icon 6" />

        </div>
    );
};

export default Comment;
