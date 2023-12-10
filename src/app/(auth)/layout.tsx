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
      <body className={instrument_sans.className}>
        <main className="flex flex-col gap-16 p-8">
          <div>
            <Image
              src={"/images/logo-devlinks-large.svg"}
              width={182}
              height={40}
              alt="DevLinks Logo"
            />
          </div>
          <main>{children}</main>
        </main>
      </body>
    </html>
  );
}
