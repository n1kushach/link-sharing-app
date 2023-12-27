import React from 'react';

type Props = {
  setView: React.Dispatch<React.SetStateAction<{ links: boolean; profile_details: boolean; preview: boolean }>>;
};

const PreviewNavbar = ({ setView }: Props) => {
  return (
    <div className='pt-4 s:h-[379px] s:rounded-b-xl s:bg-main-purple'>
      <div className='flex items-center gap-4 px-6 s:w-full s:justify-between'>
        <div className='flex w-full items-center gap-4 px-6 s:justify-between s:gap-0 s:rounded-md s:bg-slate-100 s:p-6'>
          <div className='flex-[1] s:flex-[0] '>
            <button
              onClick={() => setView({ preview: false, profile_details: true, links: false })}
              className='body_s w-full break-words rounded-[8px] border border-main-purple px-[15px] py-[11px] text-[13px] text-main-purple s:w-[159px]'
            >
              Back to Editor
            </button>
          </div>
          <div className='flex-[1] s:flex-[0] '>
            <button className='body_s w-full rounded-[8px] bg-main-purple px-[15px] py-[11px]  text-[13px]  text-white s:w-[159px]'>
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewNavbar;
