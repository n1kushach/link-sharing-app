'use client';

import React from 'react';
import Image from 'next/image';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import GenerateLink from '../GenerateLink/GenerateLink';

const PreviewSection = () => {
  const { profile, links } = useLinkShare();

  console.log(links, 'LINKS');

  return (
    <div className='flex flex-col gap-8 pt-8'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative h-[104px] w-[104px]'>
          {profile?.image !== '' && (
            <Image
              src={URL.createObjectURL(profile?.image as Blob)}
              className='absolute rounded-full border-2 border-main-purple'
              layout='fill'
              alt='TEST'
            />
          )}
        </div>
        <h1 className='heading_m text-[#333]'>
          {profile?.first_name} {profile?.last_name}
        </h1>
        <span className='body_m text-[#737373]'>{profile?.email}</span>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        {links?.map((item, index) => {
          return <GenerateLink key={index} id={item.platform} href={item.link} />;
        })}
      </div>
    </div>
  );
};

export default PreviewSection;
