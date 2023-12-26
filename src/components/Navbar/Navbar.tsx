'use client';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import PreviewNavbar from './PreviewNavbar/PreviewNavbar';
import MainNavbar from './MainNavbar/MainNavbar';

export default function Navbar() {
  const { view, setView } = useLinkShare();

  if (view?.preview) {
    return <PreviewNavbar setView={setView} />;
  }
  if (view?.links || view?.profile_details) {
    return <MainNavbar view={view} setView={setView} />;
  }
}
