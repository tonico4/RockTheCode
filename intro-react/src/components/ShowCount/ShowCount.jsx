import React from 'react';
import './ShowCount.css';

export const ShowCount = ({ num }) => {
  return (
    <div className='show-container'>
      <p className='show'>
        You clicked here {num} {num === 1 ? "time" : "times"}
      </p>
    </div>
  );
};
