import React from 'react';

interface Props {
  addLink: () => void;
}

const NewLinkButton = ({ addLink }: Props) => {
  return (
    <div
      onClick={() => addLink()}
      className='mt-[40px] flex cursor-pointer items-center justify-center rounded-[8px] border border-[#633CFF] px-[27px] py-[11px]'
    >
      <button className='heading_s text-[#633CFF]'>+ Add new link</button>
    </div>
  );
};

export default NewLinkButton;
