'use client';

import Image from 'next/image';

export default function ButtonText({
  text,
  image,
  imageSide,
  GB = false,
  showTextOnMobile = true,
}) {
  return (
    <button
      type='button'
      className='items-center font-semibold flex gap-2 uppercase cursor-pointer'
      onClick={() => {
        GB ? history.back() : console.log('');
      }}
    >
      <p className={`${showTextOnMobile == false ? 'hidden md:block' : ''}`}>
        {imageSide == 'right' ? text : ''}
      </p>
      <div className='relative w-6 h-6'>
        <Image
          src={`/i/${image}.svg`}
          alt={text}
          fill
          sizes='24px'
          className='object-cover'
        />
      </div>
      <p className={`${showTextOnMobile == false ? 'hidden md:block' : ''}`}>
        {imageSide == 'left' ? text : ''}
      </p>
    </button>
  );
}
