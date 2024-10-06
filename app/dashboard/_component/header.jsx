import { UserButton } from '@clerk/nextjs';
import React from 'react';

function Header() {
    return (
      <div className='flex justify-between items-center p-5 shadow-sm flex-wrap'>
        <div>
          <img src="https://i.imgur.com/ea31Qd6.png" width={80} height={70} alt="Header Image" />
        </div>
        <div className='flex-grow'></div>
        <UserButton />
      </div>
    );
  }
  

export default Header;
