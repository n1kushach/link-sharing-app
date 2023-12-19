'use client';

import CustomizeLinkSection from '@/components/CustomizeLinkSection/CustomizeLinkSection';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';

export default function Main() {
  const { view } = useLinkShare();
  return (
    <main className='pb-4'>
      <div>
        {view?.links == true ? <CustomizeLinkSection /> : <ProfileSection />}
      </div>
    </main>
  );
}
