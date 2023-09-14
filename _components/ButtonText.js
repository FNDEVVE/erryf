'use client';

import Image from 'next/image';

export default function ButtonText({ text, image, imageSide, GB = false }) {
  return (
    <button
      type='button'
      className='items-center font-semibold flex gap-2 uppercase cursor-pointer'
      onClick={() => {
        GB ? history.back() : console.log('');
      }}
    >
      {imageSide == 'right' ? text : ''}
      <div className='relative w-6 h-6'>
        <Image
          src={`/i/${image}.svg`}
          alt={text}
          fill
          sizes='24px'
          className='object-cover'
        />
      </div>
      {imageSide == 'left' ? text : ''}
    </button>
  );
}
