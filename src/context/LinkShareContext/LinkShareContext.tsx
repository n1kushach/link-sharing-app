'use client';
import React, { PropsWithChildren, createContext, useState } from 'react';

type Links = {
  id: number;
  link: string;
  platform: string;
};

type Profile = {
  first_name: string;
  last_name: string;
  email: string;
  image: string;
};

interface LinkShareContext {
  links: Links[];
  setLinks: React.Dispatch<React.SetStateAction<Links[]>>;
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export const LinkShareContext = createContext<LinkShareContext>({
  links: [],
  setLinks: () => {},
  profile: {
    first_name: '',
    last_name: '',
    email: '',
    image: '',
  },
  setProfile: () => {},
});

export const LinkShareProvider = ({ children }: PropsWithChildren) => {
  const [links, setLinks] = useState<Links[]>([]);

  const [profile, setProfile] = useState<Profile>({
    first_name: '',
    last_name: '',
    email: '',
    image: '',
  });

  return (
    <LinkShareContext.Provider value={{ links, setLinks, profile, setProfile }}>
      {children}
    </LinkShareContext.Provider>
  );
};
