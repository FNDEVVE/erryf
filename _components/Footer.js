import Link from 'next/link';
import Image from 'next/image';

import NewsTicker from './NewsTicker';
import Button from './Button';
import FourLinks from './FourLinks';

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
              className='h-12 m-0 mr-3 w-2/5 px-4'
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
                <Link href={'/art'} className='text-white mb-3 block'>
                  Art
                </Link>
                <Link href={'/design'} className='text-white mb-3 block'>
                  Design
                </Link>
                <Link href={'/architecture'} className='text-white mb-3 block'>
                  Architecture
                </Link>
              </div>
              <div className='mt-4'>
                <Link href={'/magazine'} className='text-white mb-3 block'>
                  Magazine
                </Link>
                <Link href={'/podcast'} className='text-white mb-3 block'>
                  Podcast
                </Link>
                <Link href={'/authors'} className='text-white mb-3 block'>
                  Authors
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
            © Coded by Flick - Designed by Pawel Gola - Photos from Unsplash -
            Text generated by ChatGPT
          </h6>
          <FourLinks />
        </div>
      </div>
    </div>
  );
}
