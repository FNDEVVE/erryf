import Link from 'next/link';
import Image from 'next/image';

import NewsTicker from './NewsTicker';
import Button from './Button';

export default function Footer() {
  return (
    <div className='bg-black w-full mt-48'>
      <NewsTicker variant={2} text={'Newsletter+++'} />
      <div className='mx-20'>
        <div className='grid grid-cols-2 pt-16 pb-32'>
          <h2 className='text-white text-[80px] leading-[88px] font-semibold uppercase'>
            Design news to your inbox
          </h2>
          <div className='flex items-center justify-center'>
            <input
              type='email'
              className='h-11 m-0 mr-3 w-2/5 px-4'
              placeholder='Email'
            />
            <Button text={'Sign up'} variant={1} />
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className=''>
            <h1 className='text-white uppercase text-2xl font-semibold'>
              Erryf Magazine
            </h1>
          </div>
          <div className='col-span-2'>
            <div className='grid grid-cols-3 gap-16'>
              <div className='mt-4'>
                <Link href={'/art'}>
                  <h4 className='text-white mb-3'>Art</h4>
                </Link>
                <Link href={'/design'}>
                  <h4 className='text-white mb-3'>Design</h4>
                </Link>
                <Link href={'/architecture'}>
                  <h4 className='text-white mb-3'>Architecture</h4>
                </Link>
              </div>
              <div className='mt-4'>
                <Link href={'/magazine'}>
                  <h4 className='text-white mb-3'>Magazine</h4>
                </Link>
                <Link href={'/podcast'}>
                  <h4 className='text-white mb-3'>Podcast</h4>
                </Link>
                <Link href={'/authors'}>
                  <h4 className='text-white mb-3'>Authors</h4>
                </Link>
              </div>
              <div className='mt-4'>
                <h4 className='text-white mb-3'>Styleguide</h4>
                <h4 className='text-white mb-3'>Licensing</h4>
                <h4 className='text-white mb-3'>Changelog</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-24 pb-16 justify-between'>
          <h6 className='text-sm text-white'>
            © Coded by Flick - Designed by Pawel Gola
          </h6>
          <div className='flex gap-3 items-center'>
            <Link href={'https://instagram.com'}>
              <div className='relative w-5 h-5'>
                <Image
                  src='/i/instagram-line.svg'
                  alt='Instagram'
                  fill
                  sizes='20px'
                  className='object-cover invert'
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
                  className='object-cover invert'
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
                  className='object-cover invert'
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
                  className='object-cover invert'
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
