import React from 'react';
import Image from 'next/image';
import CustomSelect from '../CustomSelect/CustomSelect';

interface Props {
  data: {
    id: string | number;
    link: string;
    platform: string;
  };
  removeLinkById: (id: number) => void;
}

const LinkCard = ({ data, removeLinkById }: Props) => {
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
        <button
          onClick={() => removeLinkById(data.id as number)}
          className='bg-none text-[14px] font-normal text-[#737373]'
        >
          Remove
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <CustomSelect />
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Link</span>
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
    </div>
  );
};

export default LinkCard;
