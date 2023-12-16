import React from 'react';

interface Props {
  addLink: () => void;
}

const NewLinkButton = ({ addLink }: Props) => {
  return (
    <div className='mt-[40px] flex items-center justify-center rounded-[8px] border border-[#633CFF] px-[27px] py-[11px]'>
      <button onClick={() => addLink()} className='heading_s text-[#633CFF]'>
        + Add new link
      </button>
    </div>
  );
};

export default NewLinkButton;
