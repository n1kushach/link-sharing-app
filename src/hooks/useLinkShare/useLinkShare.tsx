import React, { useContext } from 'react';
import { LinkShareContext } from '@/context/LinkShareContext/LinkShareContext';

const useLinkShare = () => {
  return useContext(LinkShareContext);
};

export default useLinkShare;
