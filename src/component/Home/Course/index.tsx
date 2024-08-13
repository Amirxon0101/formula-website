import React, { useState } from 'react';
import Loop from '../../../assets/icons/loop.svg';
import Courseimg from '../../../assets/imgs/courseimg.jpg';
import MainCourse from '../../../assets/imgs/maincourse.jpg';
import Training1 from '../../../assets/icons/training1.svg';
import Training2 from '../../../assets/icons/training2.svg';
import Girl from '../../../assets/icons/girl.svg';
import Stars from '../../../assets/icons/star.svg'
import { Avatar, Tooltip } from 'antd';

const Course: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (button: string) => {
        setActiveButton(activeButton === button ? null : button);
    };

    const courses = ['Popular course', 'Featured course', 'Newly added', 'Top rated', 'Top sell'];

    return (
        <div className='relative h-[1155px] ml-[120px]'style={{ borderLeft: '1px solid rgba(30, 30, 30, 0.3)' }}>
            <div className="flex">
                <h4 className="mt-[80px] ml-[54px] mb-[100px] text-[40px] font-[500] leading-[40px] tracking-wide text-left" style={{ fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Pick a course to<br />get started your<br />study
                </h4>
                <div className='mt-[100px] ml-[273px]'>
                    <img className='w-[24px] h-[24px] mr-[12px]' src={Loop} />
                    <input type="text" placeholder="Find your favorite course" className="placeholder-gray-500 placeholder-italic placeholder-font-bold outline-none border-none" style={{ fontSize: '24px', fontFamily: 'Helvetica-light', fontWeight: '400', }} />
                    <p style={{ border: '1px solid rgba(103, 101, 101, 0.8)' }}></p>
                    <p className='text-[16px] mt-[36px] ml-[-30px]' style={{ color: 'rgba(30, 30, 30, 0.7)', fontFamily: 'Helvetica-normal', lineHeight: '16px' }}>online platforms often offer micro-courses or modules,<br />
                        allowing learners to focus on specific topics of interest and<br />
                        acquire targeted skills.
                    </p>
                </div>
                <img className='w-[164px] h-[88px] mt-[92px] ml-[70px]' src={Courseimg} />
            </div>
            <div className='relative w-[768px] pt-[200px] ml-[450px]' style={{ transform: 'rotate(-90deg)' }}>
                {courses.map((course, index) => (
                    <div key={index} className={`relative transition-all duration-500 ${activeButton === course ? 'transform -translate-y-[650px]' : ''}`}>
                        <button
                            className={`rounded-[5px] w-[768px] h-[73px] mb-[30px] border-none transition-transform duration-500 ${activeButton === course ? 'transform translate-y-[-0px]' : ''}`}
                            onClick={() => handleButtonClick(course)}
                        >
                            
                            <p>{course}</p>
                          
                        </button>
                        {activeButton === course && (
                            <div className="absolute top-0 left-0 w-[768px] mt-[150px] p-4 bg-white border border-gray-300 transition-opacity duration-500" style={{ transform: 'rotate(90deg)', opacity: activeButton === course ? 1 : 0 }}>
                                <img className='w-[482px] mb-[20px]' src={MainCourse} />
                                <h2 className='text-[40px]' style={{ fontFamily: 'Helvetica-light', color: 'rgb(36, 44, 80)' }}>UI/UX training</h2>
                                <div className='flex'>
                                    <p className='text-[16px] w-[290px] mt-[20px]' style={{ color: 'rgba(0, 0, 0, 0.7)', fontFamily: 'Helvetica-normal', }}>Look for courses that cover the<br />fundamental principles of UI/UX design,<br />including user research, information<br />architecture, wireframing, prototyping,<br />usability testing, and visual design.</p>
                                    <img src={Training1} className='mt-[-100px] ml-[50px]' />
                                </div>
                                <div className='flex items-center'>
                                    <p>Courses may also cover specific tools and<br />
                                        software used in the industry, such as<br />
                                        <span>Adobe XD, Sketch,</span> or <span>Figma.</span>
                                    </p>
                                    <img className='ml-[20px]' src={Training2} />
                                </div>
                                <div className='flex items-center'>
                                    <div className="flex flex-col">
                                        <Avatar.Group>
                                            <img src={Girl} alt="Girl Avatar" />
                                            <img src={Girl} alt="Girl Avatar" />
                                            <Tooltip title="Ant User" placement="top">
                                                <img src={Girl} alt="Girl Avatar" />
                                            </Tooltip>
                                            <img src={Girl} alt="Girl Avatar" />
                                        </Avatar.Group>
                                        <div>
                                            <img className='mr-[10px]' src={Stars}/>
                                            <img className='mr-[10px]' src={Stars}/>
                                            <img className='mr-[10px]' src={Stars}/>
                                            <img className='mr-[10px]' src={Stars}/>
                                            <img className='mr-[10px]' src={Stars}/>

                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[40px] ml-[16px]' style={{ color: 'rgb(36, 44, 80)', fontFamily: 'Helvetica', fontWeight: '500' }}>4.6/5</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
