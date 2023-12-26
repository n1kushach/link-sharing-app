'use client';

import CustomizeLinkSection from '@/components/CustomizeLinkSection/CustomizeLinkSection';
import PreviewSection from '@/components/PreviewSection/PreviewSection';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

export default function Main() {
  const { view } = useLinkShare();
  return (
    <main className='pb-4'>
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
