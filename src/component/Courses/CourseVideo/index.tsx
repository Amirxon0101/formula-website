import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../Navbar';
import { Checkbox } from 'antd';
import Video from '../../../assets/icons/video.svg';

const CourseVideo: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const videoSections = [
    { title: '01- Welcome', time: '3:13', videoPosition: 0 },
    { title: '02- What is product design', time: '2:10', videoPosition: 60 },
    { title: '03- What is product design', time: '4:45', videoPosition: 120 },
    { title: '04- What is product design', time: '4:45', videoPosition: 120 },
    { title: '05- What is product design', time: '4:45', videoPosition: 120 },
    { title: '06- What is product design', time: '4:45', videoPosition: 120 },
    { title: '07- What is product design', time: '4:45', videoPosition: 120 },

    // Add more sections as needed
  ];

  const handleCheckboxChange = (index: number, videoPosition: number) => {
    setSelectedSection(index);
    if (playerRef.current) {
      playerRef.current.seekTo(videoPosition, 'seconds');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex pl-[70px]'>
        <div>
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing={true}
            loop={true}
            controls={true}
            volume={0.8}
            muted={false}
            width="787px"
            height="443px"
          />
          <div className='mt-[28px] mb-[16px]'>
            <span className='text-[24px] ' style={{color:'rgba(30, 30, 30, 0.90)',fontFamily:'Helvetica'}}>{videoSections[selectedSection]?.title}</span>
            
          </div>
          <p className='text-[16px] mb-[18px]' style={{color:'rgba(0, 0, 0, 0.70)',fontFamily:'Helvetica'}}>Lorem ipsum dolor sit amet consectetur. Quam sit proin augue lacus. Commodo aliquet erat tortor amet mi<br/> nibh quis leo. Augue nec lectus ut aenean imperdiet est rutrum a. Eu suspendisse sagittis nunc amet<br/> vulputate suspendisse nunc. Sed volutpat justo dolor ut. Nulla ac phasellus mollis leo feugiat sed scelerisque<br/> id at. Massa facilisis nulla purus gravida mauris volutpat.</p>
        </div>
        <div className='w-[407px] rounded-[10px] ml-[40px]' style={{ border: '1px solid rgba(30, 30, 30, 0.3)' }}>
          <div className='pt-[20px] pl-[22px] pb-[20px]'>
            <span className='text-[16px] ' style={{color:'rgba(30, 30, 30, 0.90)',fontFamily:'Helvetica'}}>Modules</span>
          </div>
          {videoSections.map((section, index) => (
            <div className='flex pt-[16px] pb-[12px]' style={{ borderTop: '1px solid rgba(30, 30, 30, 0.40)' }} key={index}>
              <Checkbox
              className='pl-[22px]'
                checked={selectedSection === index}
                onChange={() => handleCheckboxChange(index, section.videoPosition)}
              />
              <div className='pl-[8px]'>
                <div className='flex items-center'>
                  <img src={Video} alt="Video Icon" />
                  <span>{section.title}</span>
                </div>
                <span>({section.time})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
