import { footerLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-blue-500' style={{ borderTopWidth: "2px" }}>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image
          src='/blue-logo.png'
          alt='logo'
          width={150}
          height={150}
          className='object-contain rounded-md'
        />
        <p className='text-base text-slate-600'>
          MKsigorta 2023 <br />
          Tüm hakları saklıdır. &copy;
        </p>
      </div>
      <label className=" text-slate-600 font-semibold">MKsigorta {year}</label>

      <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
        {footerLinks.map((item) => (
          <div
            key={item.title}
            className='flex flex-col gap-6 text-base min-w-[170px]'
          >
            <h3 className='font-bold text-slate-700'>{item.title}</h3>
            <div className='flex flex-col gap-5'>
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className='text-slate-600'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-2 border-t border-blue-500 sm:px-16 px-6 py-2 pb-6'>
      <p className=" text-slate-500">@{year} MKSigorta. Tüm hakları saklıdır</p>
      <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-2 gap-10'>
        <Link href='/' className='text-slate-500'>
          Privacy & Policy
        </Link>
        <Link href='/' className='text-slate-500'>
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
