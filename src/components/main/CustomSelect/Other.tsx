import React from 'react';
import { MENU_LIST, Menu } from '@/static/menu-list';
import Image from 'next/image';

interface Props {
  selected: number;
  handleSelect: (id: number) => void;
}

const Other = ({ selected, handleSelect }: Props) => {
  return (
    <div className='flex max-h-[200px] flex-col gap-2 overflow-auto rounded-[8px] border border-[#d9d9d9] bg-[#fff] px-4 py-3'>
      {MENU_LIST.filter((item) => item.id !== selected).map((item: Menu, index) => {
        return (
          <div onClick={() => handleSelect(item.id)} key={index}>
            <div className='flex items-center gap-2 border-b py-2'>
              <Image src={item.icon} width={16} height={16} alt={`${item.name} icon`} />
              <span className='text-sm'>{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Other;
