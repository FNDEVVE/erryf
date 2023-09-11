import Image from 'next/image';

export default function FeaturedPost() {
  return (
    <>
      <div className='grid grid-cols-2 gap-12 mb-12'>
        <h1 className='font-semibold leading-[114.4px] text-[104px] uppercase'>
          Don&apos;t close your eyes
        </h1>
        <div>
          <p className='font-normal text-lg leading-[32.4px] mb-16'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className='flex gap-6 text-[14px]'>
            <p>
              <span className='font-semibold'>Text</span> Jakob Gronberg
            </p>
            <p>
              <span className='font-semibold'>Date</span> 16. March 2022
            </p>
            <p>
              <span className='font-semibold'>Duration</span> 15 Min
            </p>
          </div>
        </div>
      </div>
      <div className='relative w-full aspect-[1.5] mb-12'>
        <Image
          src='/i/dont-close-your-eyes.jpeg'
          alt='Dont close your eyes'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </>
  );
}
