'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Selected from './Selected';
import Other from './Other';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

type Props = {
  selectedPlatform: number;
  item_id: number;
};

const CustomSelect = ({ selectedPlatform, item_id }: Props) => {
  const { links, setLinks } = useLinkShare();
  const [selected, setSelected] = useState(selectedPlatform);
  const [showSelect, setShowSelect] = useState(false);

  const handleSelect = (id: number) => {
    const newLinks = links.map((link) => {
      if (link.id === item_id) {
        return {
          ...link,
          platform: id,
        };
      }
      return link;
    });
    setLinks(newLinks);
    setSelected(id);
    setShowSelect(false);
  };

  const toggleSelect = () => {
    setShowSelect((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Selected toggleSelect={toggleSelect} selected={selected} />
      {showSelect && <Other handleSelect={handleSelect} selected={selected} />}
    </div>
  );
};

export default CustomSelect;
