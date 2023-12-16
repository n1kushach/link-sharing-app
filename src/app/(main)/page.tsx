import LetsGetYouStarted from '@/components/main/LetsGetYouStarted/LetsGetYouStarted';
import MainHeaderInfo from '@/components/main/MainHeaderInfo/MainHeaderInfo';
import NewLinkButton from '@/components/main/NewLinkButton/NewLinkButton';

export default function Main() {
  return (
    <main className='pt-4'>
      <div className='p-[16px]'>
        <div className='rounded-[8px] bg-white p-[24px]'>
          <MainHeaderInfo />
          <NewLinkButton />
          <LetsGetYouStarted />
        </div>
      </div>
    </main>
  );
}
