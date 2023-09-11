import Image from 'next/image';

export default function ButtonText({ text, image, imageSide }) {
  return (
    <button
      type='button'
      className='items-center font-semibold flex gap-2 uppercase'
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
