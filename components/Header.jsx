import { ViewGridIcon } from '@heroicons/react/solid';
import React from 'react';
import Avatar from './Avatar';

function Header() {
     return (
          <header className="flex w-full justify-between p-5 text-sm text-gray-700">
               <div className="flex space-x-4 items-center" >
                    <p className='link'>About</p>
                    <p className='link'>Story</p>
               </div>
               <div className="flex space-x-4 items-center" >
                    <p className='link'>Gmail</p>
                    <p className='link'>Image</p>
                    <ViewGridIcon className='h-10 p-2 w-10 rounded-full cursor-pointer hover:bg-gray-100 hidden md:inline-flex sm:inline-flex active:bg-gray-300' />
                    <Avatar url={"/images/yamin.jpg"} />
               </div>
          </header>
     )
}

export default Header;
