import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className='flex justify-between pb-4 border-b border-black mb-12'>
      <Link href={'/'}>
        <h1 className='text-black uppercase text-2xl font-semibold'>
          Erryf Magazine
        </h1>
      </Link>
      <div className='flex gap-6'>
        <Link href={'/magazine'}>
          <h4 className='text-[20px]'>Magazine</h4>
        </Link>
        <Link href={'/authors'}>
          <h4 className='text-[20px]'>Authors</h4>
        </Link>
        <Link href={'/podcast'}>
          <h4 className='text-[20px]'>Podcast</h4>
        </Link>
        <h4 className='text-[20px]'>—</h4>
        <div className='flex gap-3 items-center'>
          <Link href={'https://instagram.com'}>
            <div className='relative w-5 h-5'>
              <Image
                src='/i/instagram-line.svg'
                alt='Instagram'
                fill
                sizes='20px'
                className='object-cover'
              />
            </div>
          </Link>
          <Link href={'https://x.com'}>
            <div className='relative w-5 h-5'>
              <Image
                src='/i/twitter-x-line.svg'
                alt='X'
                fill
                sizes='20px'
                className='object-cover'
              />
            </div>
          </Link>
          <Link href={'https://youtube.com'}>
            <div className='relative w-5 h-5'>
              <Image
                src='/i/youtube-fill.svg'
                alt='YouTube'
                fill
                sizes='20px'
                className='object-cover'
              />
            </div>
          </Link>
          <Link href={'https://wikipedia.org/wiki/RSS'}>
            <div className='relative w-5 h-5'>
              <Image
                src='/i/rss-fill.svg'
                alt='RSS'
                fill
                sizes='20px'
                className='object-cover'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
