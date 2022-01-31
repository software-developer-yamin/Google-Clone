import React from 'react';
import PaginationButtons from './PaginationButtons';

function SearchResults({data}) {
     console.log(data);
     return (
          <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
               <p className='text-gray-500 mr-3 mb-4 text-md'>About {data.searchInformation?.formattedTotalResults} results ({data.searchInformation?.formattedSearchTime} seconds)</p>
               {
                    data.items?.map((item)=>(
                         <div key={item.link} className='max-w-xl mb-6'>
                              <div className='group'>
                                   <a href={item.link} className='text-sm'>
                                        {item.formattedUrl}
                                   </a>
                                   <a href={item.link} className='text-xl truncate text-blue-800 font-medium group-hover:underline'>
                                        <h2>{item.title}</h2>
                                   </a>
                              </div>
                              <p className='line-clamp-2'>{item.snippet}</p>
                         </div>
                    ))
               }
               <PaginationButtons />
          </div>
     )
}

export default SearchResults;
