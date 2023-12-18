'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Selected from './Selected';
import Other from './Other';

const CustomSelect = () => {
  const [selected, setSelected] = useState(1);
  const [showSelect, setShowSelect] = useState(false);

  const handleSelect = (id: number) => {
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
