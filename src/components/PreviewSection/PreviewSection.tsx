import React from 'react';
import Image from 'next/image';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

const PreviewSection = () => {
  const { profile } = useLinkShare();
  console.log(profile, 'PROFILE');
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative h-[104px] w-[104px]'>
          {profile?.image !== '' && (
            <Image
              src={URL.createObjectURL(profile?.image)}
              className='absolute rounded-full border-2 border-main-purple'
              layout='fill'
              alt='TEST'
            />
          )}
        </div>
        <h1>
          {profile?.first_name} {profile?.last_name}
        </h1>
        <span>{profile?.email}</span>
      </div>
    </div>
  );
};

export default PreviewSection;
