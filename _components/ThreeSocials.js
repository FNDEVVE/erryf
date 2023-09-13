import Link from 'next/link';
import Image from 'next/image';

export default function ThreeSocials() {
  return (
    <div className='flex gap-3 items-center'>
      <Link href={'https://instagram.com'} className='relative w-5 h-5'>
        <Image
          src='/i/instagram-line.svg'
          alt='Instagram'
          fill
          sizes='20px'
          className='object-cover'
        />
      </Link>
      <Link href={'https://x.com'} className='relative w-5 h-5'>
        <Image
          src='/i/twitter-x-line.svg'
          alt='X'
          fill
          sizes='20px'
          className='object-cover'
        />
      </Link>
      <Link href={'https://youtube.com'} className='relative w-5 h-5'>
        <Image
          src='/i/youtube-fill.svg'
          alt='YouTube'
          fill
          sizes='20px'
          className='object-cover'
        />
      </Link>
    </div>
  );
}
