import Image from 'next/image';
import Link from 'next/link';
import FourLinks from './FourLinks';

export default function Nav() {
  return (
    <div className='flex justify-between pb-4 border-b border-black mb-6'>
      <Link href={'/'} className='text-black uppercase text-2xl font-semibold'>
        Erryf Magazine
      </Link>
      <div className='flex gap-6'>
        <Link href={'/magazine'} className='text-[20px]'>
          Magazine
        </Link>
        <Link href={'/authors'} className='text-[20px]'>
          Authors
        </Link>
        <Link href={'/podcast'} className='text-[20px]'>
          Podcast
        </Link>
        <h4 className='text-[20px]'>—</h4>
        <FourLinks />
      </div>
    </div>
  );
}
