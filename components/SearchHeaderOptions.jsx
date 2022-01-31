import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import SearchHeaderOption from './SearchHeaderOption';

function SearchHeaderOptions() {
     return (
          <div className='flex w-full justify-evenly text-gray-700 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
               <div className="flex space-x-6">
                    <SearchHeaderOption Icon={SearchIcon} title={"All"} selected />
                    <SearchHeaderOption Icon={PhotographIcon} title={"Images"} />
                    <SearchHeaderOption Icon={PlayIcon} title={"Videos"} />
                    <SearchHeaderOption Icon={NewspaperIcon} title={"News"} />
                    <SearchHeaderOption Icon={MapIcon} title={"Maps"} />
                    <SearchHeaderOption Icon={DotsVerticalIcon} title={"More"} />
               </div>
               <div className="flex space-x-4">
                    <p className='link'>Settings</p>
                    <p className='link'>Tools</p>
               </div>
          </div>
     )
}

export default SearchHeaderOptions;
