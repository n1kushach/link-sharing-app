'use client';

import CustomizeLinkSection from '@/components/CustomizeLinkSection/CustomizeLinkSection';
import PreviewSection from '@/components/PreviewSection/PreviewSection';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

export default function Main() {
  const { view } = useLinkShare();
  return (
    <main
      className={`pb-4 ${
        view?.preview == true &&
        's:absolute s:left-0 s:right-0 s:top-[150px] s:mx-auto s:w-[50%] s:rounded-md s:border s:bg-white s:p-6'
      }`}
    >
      <div>
        {view?.links == true ? (
          <CustomizeLinkSection />
        ) : view?.profile_details == true ? (
          <ProfileSection />
        ) : (
          <PreviewSection />
        )}
      </div>
    </main>
  );
}
