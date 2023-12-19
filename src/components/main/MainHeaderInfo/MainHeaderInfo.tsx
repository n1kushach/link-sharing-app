import React from 'react';

interface Props {
  main_title: string;
  body_text: string;
}

const MainHeaderInfo = ({ main_title, body_text }: Props) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <h1 className='text-[24px] font-bold text-[#333]'>{main_title}</h1>
      <span className='body_m text-[#737373]'>{body_text}</span>
    </div>
  );
};

export default MainHeaderInfo;
