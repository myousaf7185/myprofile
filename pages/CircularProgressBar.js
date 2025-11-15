import React from 'react';
import './CircularProgressBar.css'; // Create a separate CSS file for styles

const CircularProgressBar = ({ percentage, skill }) => {
  const radius = 40; // Radius of the circle
  const strokeWidth = 8; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5; // Adjust for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Calculate offset

  return (
    <div className='circular-progress-container'>
        
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#444" // Background color of the circle
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#f1c40f" // Progress color
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} // Smooth transition
        />
      </svg>
      <div className='progress-label'>{skill}: {percentage}%</div>
    </div>
    
  );
}

export default CircularProgressBar;
