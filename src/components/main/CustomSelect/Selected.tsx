import React from 'react';
import Image from 'next/image';
import { MENU_LIST, Menu } from '@/static/menu-list';

interface Props {
  selected: number;
  toggleSelect: () => void;
}

const Selected = ({ selected, toggleSelect }: Props) => {
  return (
    <>
      {MENU_LIST.filter((item) => item.id == selected).map((item: Menu, index: number) => {
        return (
          <div key={index}>
            <span className='body_s'>Platform</span>
            <div
              onClick={() => toggleSelect()}
              className='flex justify-between rounded-[8px] border border-[#d9d9d9] bg-[#fff] px-4 
  py-3'
            >
              <div className='flex items-center gap-2'>
                <Image src={item.icon} width={16} height={16} alt={`${item.name} icon`} />
                <span className='text-sm'>{item.name}</span>
              </div>
              <button className='bg-none'>
                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'>
                  <path d='M1 1L7 7L13 1' stroke='#633CFF' strokeWidth='2' />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Selected;
