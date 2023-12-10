import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../../styles/globals.css";
import Image from "next/image";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Share",
  description: "Linkg Sharing Application",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrument_sans.className} min-h-screen sm-bg-[#fafafa]`}
      >
        <main className="flex flex-col gap-16 p-8 s:max-w-[396px] s:mx-auto s:h-screen s:justify-center s:items-center">
          <div>
            <Image
              src={"/images/logo-devlinks-large.svg"}
              width={182}
              height={40}
              alt="DevLinks Logo"
            />
          </div>
          <main className="sm:bg-white sm:p-[40px]">{children}</main>
        </main>
      </body>
    </html>
  );
}
