import Navbar from "./(components)/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import myUser from "./actions/getUser";
import Footer from "./(components)/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const myCurrentUser = await myUser();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar myUser={myCurrentUser} />
        <div className='min-h-[750px]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
