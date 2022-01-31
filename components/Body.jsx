import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Body() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <body>
      <form className="flex flex-col items-center flex-grow">
        <Image src={"/images/Google.webp"} width={300} height={100} />
        <div className="flex items-center w-full hover:shadow-lg focus-within:shadow-lg max-w-md border-2 mt-5 rounded-3xl p-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mx-3" />
          <input
            type="text"
            ref={searchInputRef}
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 text-gray-500 mr-3 cursor-pointer" />
        </div>
        <div className="flex space-y-2 flex-col w-1/2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="button" onClick={search}>
            Google Search
          </button>
          <button className="button" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </body>
  );
}

export default Body;
