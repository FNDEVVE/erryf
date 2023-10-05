import Image from 'next/image';
import Link from 'next/link';
import FourLinks from './FourLinks';

export default function Nav() {
  return (
    <div className='flex pt-4 md:pt-0 justify-between items-center pb-4 border-b border-black mb-6'>
      <Link href={'/'} className='text-black uppercase text-2xl font-semibold'>
        Erryf Magazine
      </Link>
      <div className='hidden md:flex gap-6'>
        <Link href={'/magazine'} className='text-base lg:text-[20px]'>
          Magazine
        </Link>
        <Link href={'/podcast'} className='text-base lg:text-[20px]'>
          Podcast
        </Link>
        <Link href={'/authors'} className='text-base lg:text-[20px]'>
          Authors
        </Link>
        <h4 className='text-base lg:text-[20px]'>—</h4>
        <FourLinks />
      </div>
    </div>
  );
}
