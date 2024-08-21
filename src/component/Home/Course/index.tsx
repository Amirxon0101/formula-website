import React, { useState } from 'react';
import Loop from '../../../assets/icons/loop.svg';
import Courseimg from '../../../assets/imgs/courseimg.jpg';
import MainCourse from '../../../assets/imgs/maincourse.jpg';
import Training1 from '../../../assets/icons/training1.svg';
import Training2 from '../../../assets/icons/training2.svg';
import Girl from '../../../assets/icons/girl.svg';
import Stars from '../../../assets/icons/star.svg';
import { Avatar, Tooltip } from 'antd';

const Course: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (button: string) => {
        setActiveButton(activeButton === button ? null : button);
    };

    const courses = ['Popular course', 'Featured course', 'Newly added', 'Top rated', 'Top sell'];

    return (
        <div className='h-full relative mx-4 lg:mx-[120px] my-8 lg:h-[1155px] lg:ml-[120px] mb-[700px]'>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:ml-[54px] mb-8 lg:mb-0">
                    <h4 className="text-[28px] lg:text-[40px] font-[500] leading-tight tracking-wide text-left" style={{ fontFamily: 'Helvetica', background: 'linear-gradient(178.65deg, rgb(35, 45, 79), rgb(80, 103, 181))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Pick a course to<br />get started your<br />study
                    </h4>
                </div>
                <div className='lg:ml-[273px] flex flex-col items-center lg:items-start'>
                    <div className='flex items-center mb-4 lg:mb-0'>
                        <img className='w-[24px] h-[24px] mr-[12px]' src={Loop} alt="Loop" />
                        <input type="text" placeholder="Find your favorite course" className="placeholder-gray-500 placeholder-italic placeholder-font-bold outline-none border-none text-[16px] lg:text-[24px]" style={{ fontFamily: 'Helvetica-light', fontWeight: '400' }} />
                    </div>
                    <p className='text-[14px] lg:text-[16px] mt-4 lg:mt-[36px] text-center lg:text-left' style={{ color: 'rgba(30, 30, 30, 0.7)', fontFamily: 'Helvetica-normal', lineHeight: '1.5' }}>
                        Online platforms often offer micro-courses or modules,<br />
                        allowing learners to focus on specific topics of interest and<br />
                        acquire targeted skills.
                    </p>
                    <img className='w-[120px] lg:w-[164px] h-auto mt-4' src={Courseimg} alt="Course" />
                </div>
            </div>
            <div className='relative w-full sm: mb-[100px] lg:w-[768px] pt-8 lg:pt-[200px] mx-auto'>
                <div className='flex flex-col lg:flex-row lg:items-start xl:flex-col h-[768px]'>
                    {courses.map((course, index) => (
                        <div key={index} className={`relative transition-transform duration-500 ease-in-out ${activeButton === course ? 'translate-y-0' : 'translate-y-[850px]'}`}>
                            <button
                                className={`w-full lg:w-[768px] h-[50px] lg:h-[73px] mb-4 lg:mb-[30px] border-none rounded-[5px] transition-transform duration-500 ease-in-out ${activeButton === course ? 'bg-gray-100' : 'bg-white'} `}
                                onClick={() => handleButtonClick(course)}
                            >
                                <p className='text-[16px] lg:text-[20px] text-center lg:text-left'>{course}</p>
                            </button>
                            {activeButton === course && (
                                <div
                                    className="absolute top-full left-0 w-full lg:w-[768px] mt-[20px] lg:mt-[150px] p-4 bg-white border-none transition-opacity duration-500 ease-in-out"
                                    style={{ opacity: activeButton === course ? 1 : 0 }}
                                >
                                    <img className='w-full lg:w-[482px] mb-4' src={MainCourse} alt="Main Course" />
                                    <h2 className='text-[24px] lg:text-[40px] font-[300] text-center lg:text-left' style={{ fontFamily: 'Helvetica-light', color: 'rgb(36, 44, 80)' }}>UI/UX training</h2>
                                    <div className='flex lg:flex-row items-center lg:items-start'>
                                        <p className='text-[14px] mt-4' style={{ color: 'rgba(0, 0, 0, 0.7)', fontFamily: 'Helvetica-normal', lineHeight: '1.5' }}>
                                            Look for courses that cover the fundamental principles of UI/UX design,<br />
                                            including user research, information architecture, wireframing, prototyping,<br />
                                            usability testing, and visual design.
                                        </p>
                                        <img src={Training1} className='mt-4 lg:mt-0 ml-0 lg:ml-4 w-[80px] lg:w-[100px]' alt="Training 1" />
                                    </div>
                                    <div className='flex lg:flex-row items-center lg:items-start mt-4'>
                                        <p className='text-[14px] lg:text-[16px] text-center lg:text-left' style={{ color: 'rgba(0, 0, 0, 0.7)', fontFamily: 'Helvetica-normal' }}>
                                            Courses may also cover specific tools and software used in the industry, such as<br />
                                            <span>Adobe XD, Sketch,</span> or <span>Figma.</span>
                                        </p>
                                        <img className='ml-0 lg:ml-4 mt-4 lg:mt-0 w-[80px] lg:w-[100px]' src={Training2} alt="Training 2" />
                                    </div>
                                    <div className='flex lg:flex-row items-center lg:items-start mt-4'>
                                        <div className="flex flex-col items-center lg:items-start">
                                            <Avatar.Group>
                                                <img src={Girl} alt="Girl Avatar" />
                                                <img src={Girl} alt="Girl Avatar" />
                                                <Tooltip title="Ant User" placement="top">
                                                    <img src={Girl} alt="Girl Avatar" />
                                                </Tooltip>
                                                <img src={Girl} alt="Girl Avatar" />
                                            </Avatar.Group>
                                            <div className='flex mt-2'>
                                                <img className='mr-1 w-[20px] lg:w-[24px]' src={Stars} alt="Star" />
                                                <img className='mr-1 w-[20px] lg:w-[24px]' src={Stars} alt="Star" />
                                                <img className='mr-1 w-[20px] lg:w-[24px]' src={Stars} alt="Star" />
                                                <img className='mr-1 w-[20px] lg:w-[24px]' src={Stars} alt="Star" />
                                                <img className='mr-1 w-[20px] lg:w-[24px]' src={Stars} alt="Star" />
                                            </div>
                                        </div>
                                        <div className='text-center lg:text-left mt-4 lg:mt-0'>
                                            <span className='text-[24px] lg:text-[40px]' style={{ color: 'rgb(36, 44, 80)', fontFamily: 'Helvetica', fontWeight: '500' }}>4.6/5</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course;
