import Image from 'next/image';

export default function Magazine() {
  return (
    <>
      <div className='relative w-full aspect-[7.068]'>
        <Image
          src='/i/magazine.svg'
          alt='Magazine'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </>
  );
}
