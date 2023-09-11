import Image from 'next/image';

export default function Podcast() {
  return (
    <>
      <div className='relative w-full aspect-[6.576]'>
        <Image
          src='/i/authors.svg'
          alt='Authors'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </>
  );
}
