import React from 'react';
import Image from 'next/image';
import CustomSelect from '../CustomSelect/CustomSelect';

type Links = {
  id: number;
  link: string;
  platform: number;
}[];
interface Props {
  data: {
    id: string | number;
    link: string;
    platform: number;
  };
  links: Links;
  setLinks: React.Dispatch<React.SetStateAction<Links>>;
  removeLinkById: (id: number) => void;
}

const LinkCard = ({ data, removeLinkById, links, setLinks }: Props) => {
  console.log(data, 'DATA');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = e.target;
    const newLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          link: value,
        };
      }
      return link;
    });
    setLinks(newLinks);
  };

  return (
    <div draggable className='bg-[#fafafa] p-[20px]'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='h-[2px] w-[12px] bg-[#737373]'></div>
            <div className='h-[2px] w-[12px] bg-[#737373]'></div>
          </div>
          <h1 className='text-[16px] font-bold text-[#737373]'>Link {data.id}</h1>
        </div>
        <button
          onClick={() => removeLinkById(data.id as number)}
          className='bg-none text-[14px] font-normal text-[#737373]'
        >
          Remove
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <CustomSelect item_id={data?.id as number} selectedPlatform={data?.platform} />
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Link</span>
          <input
            value={data.link as string}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, data.id as number)}
            className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[42px] text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300'
            type='text'
            placeholder='e.g. https://www.github.com/johnappleseed'
          />
          <Image
            src={'/images/icon-link.svg'}
            width={16}
            height={16}
            alt='icon'
            className='absolute bottom-0 left-[18px] top-[44px]'
          />
        </label>
      </div>
    </div>
  );
};

export default LinkCard;
