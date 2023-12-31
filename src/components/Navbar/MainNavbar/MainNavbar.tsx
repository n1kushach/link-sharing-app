'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  view: {
    links: boolean;
    profile_details: boolean;
    preview: boolean;
  };
  setView: React.Dispatch<React.SetStateAction<{ links: boolean; profile_details: boolean; preview: boolean }>>;
};

const MainNavbar = ({ view, setView }: Props) => {
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [windowSize, setWindowSize] = useState<any>([]);

  const width = windowSize[0];
  return (
    <nav className='flex items-center justify-between bg-white px-6 py-4'>
      <div>
        {width > 767 ? (
          <Image src='/images/logo-devlinks-large.svg' width={146} height={32} alt='Logo' />
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M2.6185 25.3798C4.57317 27.3332 7.7145 27.3332 13.9998 27.3332C20.2852 27.3332 23.4278 27.3332 25.3798 25.3798C27.3332 23.4292 27.3332 20.2852 27.3332 13.9998C27.3332 7.7145 27.3332 4.57184 25.3798 2.6185C23.4292 0.666504 20.2852 0.666504 13.9998 0.666504C7.7145 0.666504 4.57184 0.666504 2.6185 2.6185C0.666504 4.57317 0.666504 7.7145 0.666504 13.9998C0.666504 20.2852 0.666504 23.4278 2.6185 25.3798ZM10.6665 9.6665C9.80945 9.6665 8.97165 9.92065 8.25903 10.3968C7.54642 10.873 6.99101 11.5497 6.66303 12.3415C6.33505 13.1334 6.24923 14.0046 6.41643 14.8452C6.58364 15.6858 6.99635 16.4579 7.60237 17.064C8.2084 17.67 8.98053 18.0827 9.82111 18.2499C10.6617 18.4171 11.533 18.3313 12.3248 18.0033C13.1166 17.6753 13.7934 17.1199 14.2695 16.4073C14.7457 15.6947 14.9998 14.8569 14.9998 13.9998C14.9998 13.7346 15.1052 13.4803 15.2927 13.2927C15.4803 13.1052 15.7346 12.9998 15.9998 12.9998C16.2651 12.9998 16.5194 13.1052 16.7069 13.2927C16.8945 13.4803 16.9998 13.7346 16.9998 13.9998C16.9998 15.2525 16.6284 16.4769 15.9325 17.5184C15.2366 18.56 14.2474 19.3717 13.0902 19.8511C11.9329 20.3304 10.6595 20.4558 9.43093 20.2115C8.20239 19.9671 7.07389 19.3639 6.18816 18.4782C5.30243 17.5924 4.69924 16.464 4.45486 15.2354C4.21049 14.0069 4.33591 12.7334 4.81527 11.5762C5.29462 10.4189 6.10638 9.42978 7.14789 8.73386C8.1894 8.03795 9.41389 7.6665 10.6665 7.6665C10.9317 7.6665 11.1861 7.77186 11.3736 7.9594C11.5611 8.14693 11.6665 8.40129 11.6665 8.6665C11.6665 8.93172 11.5611 9.18607 11.3736 9.37361C11.1861 9.56115 10.9317 9.6665 10.6665 9.6665ZM21.6665 13.9998C21.6665 15.1491 21.21 16.2513 20.3973 17.064C19.5846 17.8766 18.4824 18.3332 17.3332 18.3332C17.068 18.3332 16.8136 18.4385 16.6261 18.6261C16.4385 18.8136 16.3332 19.068 16.3332 19.3332C16.3332 19.5984 16.4385 19.8527 16.6261 20.0403C16.8136 20.2278 17.068 20.3332 17.3332 20.3332C18.5858 20.3332 19.8103 19.9617 20.8518 19.2658C21.8933 18.5699 22.7051 17.5808 23.1844 16.4235C23.6638 15.2662 23.7892 13.9928 23.5448 12.7643C23.3004 11.5357 22.6972 10.4072 21.8115 9.52149C20.9258 8.63576 19.7973 8.03257 18.5687 7.7882C17.3402 7.54382 16.0668 7.66924 14.9095 8.1486C13.7522 8.62795 12.7631 9.43971 12.0672 10.4812C11.3713 11.5227 10.9998 12.7472 10.9998 13.9998C10.9998 14.2651 11.1052 14.5194 11.2927 14.7069C11.4803 14.8945 11.7346 14.9998 11.9998 14.9998C12.2651 14.9998 12.5194 14.8945 12.7069 14.7069C12.8945 14.5194 12.9998 14.2651 12.9998 13.9998C12.9998 12.8506 13.4564 11.7484 14.269 10.9357C15.0817 10.123 16.1839 9.6665 17.3332 9.6665C18.4824 9.6665 19.5846 10.123 20.3973 10.9357C21.21 11.7484 21.6665 12.8506 21.6665 13.9998Z'
              fill='#633CFF'
            />
          </svg>
        )}
      </div>
      <div className='flex items-center'>
        <div
          onClick={() => {
            setView({ links: true, profile_details: false, preview: false });
          }}
          className={`cursor-pointer rounded-[8px] s:flex s:items-center s:gap-2 ${
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
            setView({ links: false, profile_details: true, preview: false });
          }}
          className={`cursor-pointer rounded-[8px] s:flex s:items-center s:gap-2 ${
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
            className={`heading_s hidden cursor-pointer ${
              view?.profile_details == true ? 'text-main-purple' : 'text-[#737373]'
            }  s:block`}
          >
            Profile Details
          </span>
        </div>
      </div>
      <div className='cursor-pointer rounded-[8px] border border-[#633CFF] px-[16px] py-[11px] s:flex s:items-center s:justify-center'>
        {width > 767 ? (
          <span
            onClick={() => {
              setView({ links: false, profile_details: false, preview: true });
            }}
            className='heading_s cursor-pointer  text-main-purple'
          >
            Preview
          </span>
        ) : (
          <svg
            onClick={() => {
              setView({ links: false, profile_details: false, preview: true });
            }}
            className='cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              fill='#633CFF'
              d='M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z'
            />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
