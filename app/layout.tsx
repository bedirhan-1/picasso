import Navbar from "./(components)/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./(components)/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import myUser from "./(actions)/getUser";
import { AuthProvider, ChakraProvider, StoreProvider } from "./Providers";
import { ToastContainer } from "./Providers/nextToast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const myCurrentUser = await myUser();

  return (
    <html lang='en'>
      <head>
        <title>MKSigorta</title>
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <AuthProvider>
            <ChakraProvider>
              <Navbar myUser={myCurrentUser || null} />
              <div className='min-h-[750px]'>
                {children}
              </div>
              <Footer />
              <ToastContainer />
            </ChakraProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
