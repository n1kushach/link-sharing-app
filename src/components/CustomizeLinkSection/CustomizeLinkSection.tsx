import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';
import NewLinkButton from '../main/NewLinkButton/NewLinkButton';
import LinkCard from '../main/LinkCard/LinkCard';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import LetsGetYouStarted from '../main/LetsGetYouStarted/LetsGetYouStarted';

interface Links {
  id: number;
  link: string;
  platform: string;
}

const CustomizeLinkSection = () => {
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

  return (
    <div className='p-[16px]'>
      <div className='rounded-[8px] bg-white p-[24px]'>
        <MainHeaderInfo
          main_title='Customize your links'
          body_text='Add/edit/remove links below and then share all your profiles with the world!'
        />
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
        <hr className='pt-6' />
        <div>
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
      </div>
    </div>
  );
};

export default CustomizeLinkSection;
