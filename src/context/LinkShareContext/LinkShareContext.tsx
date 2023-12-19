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

type View = {
  links: boolean;
  profile_details: boolean;
};

interface LinkShareContext {
  links: Links[];
  setLinks: React.Dispatch<React.SetStateAction<Links[]>>;
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  view: {
    links: boolean;
    profile_details: boolean;
  };
  setView: React.Dispatch<React.SetStateAction<View>>;
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
  view: {
    links: true,
    profile_details: false,
  },
  setView: () => {},
});

export const LinkShareProvider = ({ children }: PropsWithChildren) => {
  const [links, setLinks] = useState<Links[]>([]);
  const [view, setView] = useState({
    links: true,
    profile_details: false,
  });
  const [profile, setProfile] = useState<Profile>({
    first_name: '',
    last_name: '',
    email: '',
    image: '',
  });

  return (
    <LinkShareContext.Provider
      value={{ links, setLinks, profile, setProfile, view, setView }}
    >
      {children}
    </LinkShareContext.Provider>
  );
};
