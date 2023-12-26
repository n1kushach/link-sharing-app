import Navbar from '@/components/Navbar/Navbar';
import '../../styles/globals.css';
import { Instrument_Sans } from 'next/font/google';
import { LinkShareProvider } from '@/context/LinkShareContext/LinkShareContext';

export const metadata = {
  title: 'Link share',
  description: 'Modern link share app',
};

const instrument_sans = Instrument_Sans({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkShareProvider>
        <html lang='en'>
          <body className={`${instrument_sans.className} min-h-screen bg-[#fafafa]`}>
            <Navbar />
            {children}
          </body>
        </html>
      </LinkShareProvider>
    </>
  );
}
