'use client';
import LetsGetYouStarted from '@/components/main/LetsGetYouStarted/LetsGetYouStarted';
import LinkCard from '@/components/main/LinkCard/LinkCard';
import MainHeaderInfo from '@/components/main/MainHeaderInfo/MainHeaderInfo';
import NewLinkButton from '@/components/main/NewLinkButton/NewLinkButton';
import { useState } from 'react';

interface Links {
  id: string | number;
  link: string;
  platform: string;
}

export default function Main() {
  const [links, setLinks] = useState<Links[]>([]);
  const addLink = () => {
    setLinks((prev: Links[]) => [
      ...prev,
      { id: (links?.length + 1).toString(), link: '', platform: '' },
    ]);
  };

  return (
    <main className='pb-8 pt-4'>
      <div className='p-[16px]'>
        <div className='rounded-[8px] bg-white p-[24px]'>
          <MainHeaderInfo />
          <NewLinkButton addLink={addLink} />
          <div className='links flex flex-col gap-6 pt-6'>
            {links?.map((link: Links) => (
              <LinkCard data={link} key={link.id} />
            ))}
          </div>
          {links?.length == 0 && <LetsGetYouStarted />}
        </div>
      </div>
      <hr className='pt-6' />
      <div className='px-8'>
        <button
          className={`heading_s w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white opacity-25 ${
            links?.length > 0 && 'opacity-100 duration-300'
          } duration-300 `}
        >
          Save
        </button>
      </div>
    </main>
  );
}
