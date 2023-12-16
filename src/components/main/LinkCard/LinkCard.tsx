import React from 'react';
import Image from 'next/image';

interface Props {
  data: {
    id: string | number;
    link: string;
    platform: string;
  };
}

const LinkCard = ({ data }: Props) => {
  return (
    <div className='bg-[#fafafa] p-[20px]'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='h-[2px] w-[12px] bg-[#737373]'></div>
            <div className='h-[2px] w-[12px] bg-[#737373]'></div>
          </div>
          <h1 className='text-[16px] font-bold text-[#737373]'>
            Link {data.id}
          </h1>
        </div>
        <button className='bg-none text-[16px] font-normal text-[#737373]'>
          Remove
        </button>
      </div>
      <div className='gap-1'>
        <span className='body_s'>Platform</span>
        <div
          className='flex justify-between rounded-[8px] border border-[#d9d9d9] bg-[#fff] px-4 
        py-3'
        >
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <g clip-path='url(#clip0_112_824)'>
                <path
                  d='M9.98174 2.28781C8.67787 1.98483 7.32189 1.98483 6.01801 2.28781C5.26495 1.82594 4.69001 1.61367 4.27188 1.52407C4.09342 1.4838 3.91081 1.46482 3.72788 1.46754C3.64464 1.4698 3.56179 1.4798 3.48041 1.49741L3.46974 1.49954L3.46548 1.50167H3.46228L3.60841 2.01474L3.46228 1.50274C3.38734 1.52392 3.31795 1.56125 3.25898 1.61211C3.20001 1.66297 3.1529 1.72613 3.12094 1.79714C2.80625 2.5019 2.7463 3.29412 2.95134 4.03821C2.42029 4.68179 2.13089 5.49075 2.13321 6.32514C2.13321 7.98167 2.62174 9.09527 3.45481 9.81101C4.03828 10.3123 4.74654 10.579 5.45694 10.7315C5.34515 11.0599 5.30301 11.4079 5.33321 11.7534V12.3913C4.89908 12.4819 4.59828 12.4531 4.38388 12.3827C4.11614 12.2942 3.91028 12.1161 3.71294 11.8601C3.60979 11.7221 3.51367 11.579 3.42494 11.4313L3.36414 11.3321C3.28737 11.2044 3.20771 11.0785 3.12521 10.9545C2.92254 10.6547 2.62174 10.2793 2.13534 10.1513L1.61908 10.0158L1.34814 11.0483L1.86441 11.1838C1.94974 11.2051 2.06068 11.2851 2.24308 11.5529C2.31328 11.6586 2.38086 11.766 2.44574 11.875L2.51828 11.9923C2.61854 12.1545 2.73374 12.3337 2.86708 12.5086C3.13694 12.8606 3.50494 13.2158 4.05108 13.3961C4.42441 13.5198 4.84894 13.5497 5.33321 13.475V15.4665C5.33321 15.6079 5.3894 15.7436 5.48942 15.8436C5.58944 15.9436 5.7251 15.9998 5.86654 15.9998H10.1332C10.2747 15.9998 10.4103 15.9436 10.5103 15.8436C10.6104 15.7436 10.6665 15.6079 10.6665 15.4665V11.6659C10.6665 11.3299 10.6516 11.0217 10.5567 10.7347C11.2639 10.5854 11.9668 10.3187 12.5471 9.81741C13.3791 9.09634 13.8665 7.97207 13.8665 6.30594V6.30487C13.8639 5.47731 13.5744 4.67627 13.0473 4.03821C13.2521 3.29445 13.1922 2.50265 12.8777 1.79821C12.846 1.72711 12.7991 1.66381 12.7404 1.61277C12.6816 1.56173 12.6123 1.52417 12.5375 1.50274L12.3913 2.01474C12.5375 1.50274 12.5364 1.50274 12.5353 1.50274L12.5332 1.50167L12.5289 1.49954L12.5193 1.49741C12.493 1.49056 12.4663 1.48522 12.4393 1.48141C12.3835 1.47326 12.3272 1.46862 12.2708 1.46754C12.0879 1.46484 11.9053 1.48382 11.7268 1.52407C11.3097 1.61367 10.7348 1.82594 9.98174 2.28781Z'
                  fill='#737373'
                />
              </g>
              <defs>
                <clipPath id='clip0_112_824'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <span>GitHub</span>
          </div>
          <button className='bg-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='9'
              viewBox='0 0 14 9'
              fill='none'
            >
              <path d='M1 1L7 7L13 1' stroke='#633CFF' stroke-width='2' />
            </svg>
          </button>
        </div>
      </div>
      <label className='relative flex flex-col gap-1'>
        <span className='body_s'>Password</span>
        <input
          className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[42px] focus:shadow-active-input focus:outline-main-purple focus:duration-300'
          type='text'
          placeholder='e.g. https://www.github.com/johnappleseed'
        />
        <Image
          src={'/images/icon-link.svg'}
          width={16}
          height={16}
          alt='icon'
          className='absolute bottom-0 left-[18px] top-[39px]'
        />
      </label>
    </div>
  );
};

export default LinkCard;
