'use client';
import LetsGetYouStarted from '@/components/main/LetsGetYouStarted/LetsGetYouStarted';
import LinkCard from '@/components/main/LinkCard/LinkCard';
import MainHeaderInfo from '@/components/main/MainHeaderInfo/MainHeaderInfo';
import NewLinkButton from '@/components/main/NewLinkButton/NewLinkButton';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

interface Links {
  id: number;
  link: string;
  platform: string;
}

export default function Main() {
  const { links, setLinks } = useLinkShare();

  const addLink = () => {
    setLinks((prev: Links[]) => [
      ...prev,
      {
        id: links.length === 0 ? 1 : links[links.length - 1].id + 1,
        link: '',
        platform: '',
      },
    ]);
  };

  const removeLinkById = (id: number) => {
    setLinks((prev: Links[]) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  console.log(links);

  return (
    <main className='pb-4'>
      <div className='p-[16px]'>
        <div className='rounded-[8px] bg-white p-[24px]'>
          <MainHeaderInfo />
          <NewLinkButton addLink={addLink} />
          <div className='links flex flex-col gap-6 pt-6'>
            {links?.map((link: Links) => (
              <LinkCard
                removeLinkById={removeLinkById}
                data={link}
                key={link.id}
              />
            ))}
          </div>
          {links?.length == 0 && <LetsGetYouStarted />}
        </div>
      </div>
      <hr className='pt-6' />
      <div className='px-8'>
        <button
          className={`heading_s w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white  ${
            links?.length > 0
              ? 'opacity-100 duration-300'
              : 'opacity-25 duration-300'
          } duration-300 `}
        >
          Save
        </button>
      </div>
    </main>
  );
}
