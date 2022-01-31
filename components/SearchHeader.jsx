import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Avatar from './Avatar'
import SearchHeaderOptions from './SearchHeaderOptions';


function SearchHeader() {
     const router = useRouter();
     const searchInputRef = useRef(null);
     const search = (e) => {
          e.preventDefault();
          const term = searchInputRef.current.value;
          if (!term) return;
          router.push(`/search?term=${term}`);
     }
     return (
          <header className='sticky top-0 bg-white'>
               <div className='flex w-full p-6 items-center'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png' width={120} height={40} onClick={() => router.push('/')} className='cursor-pointer' />
                    <form className='flex flex-grow px-6 py-3 ml-10 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center mr-4'>
                         <input type='text' ref={searchInputRef} defaultValue={router.query.term} className='flex-grow w-full focus:outline-none' />
                         <XIcon className={`h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125`} onClick={() => (searchInputRef.current.value = "")} />
                         <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
                         <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer' />
                         <button className='hidden' onClick={search} type='submit'>Search</button>
                    </form>
                    <Avatar className='ml-auto' url="/images/yamin.jpg" />
               </div>
               <SearchHeaderOptions />
          </header>
     )
}

export default SearchHeader;
