import Navbar from "./(components)/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./(components)/footer/Footer";
import { ToastContainer } from "./nextToast";
import "react-toastify/dist/ReactToastify.css";
import Chakra from "./Chackra";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang='en'>
      <body className={inter.className} style={{
        backgroundImage: "linear-gradient(to top, #475569 20%, #f0f9ff 80%)",
      }}>
        <Chakra>
          <Navbar />
          <div className='min-h-[750px]'>

            {children}
          </div>
          <Footer />
          <ToastContainer />
        </Chakra>
      </body>
    </html>
  );
}
