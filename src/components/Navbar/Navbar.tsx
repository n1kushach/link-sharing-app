'use client';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { view, setView } = useLinkShare();

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  const width = windowSize[0];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className='flex items-center justify-between bg-white px-6 py-4'>
      <div>
        {width > 767 ? (
          <Image src='/images/logo-devlinks-large.svg' width={146} height={32} alt='Logo' />
        ) : (
          <Image src='/images/logo-devlinks-small.svg' width={32} height={32} alt='Logo' />
        )}
      </div>
      <div className='flex items-center'>
        <div
          onClick={() => {
            setView({ links: true, profile_details: false });
          }}
          className={`rounded-[8px] s:flex s:items-center s:gap-2 ${
            view?.links == true && 'bg-[#efebff]'
          } px-[27px] py-[11px]`}
        >
          <svg
            className={`${view?.links == true ? 'fill-[#633CFF]' : 'fill-[#737373]'} `}
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill={'none'}
            viewBox='0 0 16 16'
          >
            <path d='M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z' />
          </svg>
          <span className={`heading_s hidden ${view?.links == true ? 'text-main-purple' : 'text-[#737373]'}  s:block`}>
            Links
          </span>
        </div>
        <div
          onClick={() => {
            setView({ links: false, profile_details: true });
          }}
          className={`rounded-[8px] s:flex s:items-center s:gap-2 ${
            view?.profile_details == true && 'bg-[#efebff]'
          } px-[27px] py-[11px]`}
        >
          <svg
            className={`${view?.profile_details == true ? 'fill-[#633CFF]' : 'fill-[#737373]'} `}
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='none'
            viewBox='0 0 21 20'
          >
            <path d='M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z' />
          </svg>
          <span
            className={`heading_s hidden ${
              view?.profile_details == true ? 'text-main-purple' : 'text-[#737373]'
            }  s:block`}
          >
            Profile Details
          </span>
        </div>
      </div>
      <div className='rounded-[8px] border border-[#633CFF] px-[16px] py-[11px] s:flex s:items-center s:justify-center'>
        {width > 767 ? (
          <span className='heading_s text-main-purple'>Preview</span>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
            <path
              fill='#633CFF'
              d='M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z'
            />
          </svg>
        )}
      </div>
    </nav>
  );
}
