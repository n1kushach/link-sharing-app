import React from 'react';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

const LetsGetYouStarted = () => {
  return (
    <div className='pt-6'>
      <div className='flex flex-col items-center justify-center gap-[24px] rounded-[4px] bg-[#fafafa] p-[20px]'>
        <ImageContent />
        <TextContent />
      </div>
    </div>
  );
};

export default LetsGetYouStarted;
