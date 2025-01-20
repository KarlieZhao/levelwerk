import React, {useState} from 'react';
import '../projectCard.css';
import isMobile from './isMobile';

export default function Card(info) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    
      onTouchstart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="card"
      style={{
        background: `url(${info.url}) no-repeat center/cover`,
        backgroundColor: hovered ? '#FF820466' : '#00000000',
      }}
    >
      <div className="corner-wrapper">
        <div
          className="corner"
          style={{backgroundColor: hovered ? '#ff7f3f' : '#000'}}
        ></div>
      </div>
      <div className="text">
        <h1 className={`${hovered ? 'visible' : 'invisible'}`}>{info.time}</h1>
        <p className={`${hovered && !isMobile() ? 'visible' : 'invisible'}`}>
          {info.bio}
        </p>
        <h2>{info.name}</h2>
      </div>
    </div>
  );
}
