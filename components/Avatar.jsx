import React from 'react';

function Avatar({ url, className }) {
     return (
          <img src={url} className={`w-9 h-10 rounded-full cursor-pointer transition transform duration-150 hover:scale-125 ${className}`} alt="profile pic" loading='lazy'  />
     )
}

export default Avatar;
