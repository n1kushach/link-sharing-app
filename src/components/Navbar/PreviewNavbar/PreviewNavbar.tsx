import React from 'react';
import Image from 'next/image';

type Props = {
  setView: React.Dispatch<React.SetStateAction<{ links: boolean; profile_details: boolean; preview: boolean }>>;
};

const PreviewNavbar = ({ setView }: Props) => {
  return (
    <div className='pt-4'>
      <div className='flex items-center gap-4 px-6'>
        <div className='flex-[1]'>
          <button
            onClick={() => setView({ preview: false, profile_details: false, links: true })}
            className='body_s w-full break-words rounded-[8px] border border-main-purple px-[27px] py-[11px] text-[13px] text-main-purple'
          >
            Back to Editor
          </button>
        </div>
        <div className='flex-[1]'>
          <button className='body_s w-full rounded-[8px] bg-main-purple px-[27px] py-[11px]  text-[13px]  text-white'>
            Share Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewNavbar;
