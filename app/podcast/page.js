import Image from 'next/image';

export default function Podcast() {
  return (
    <>
      <div className='relative w-full aspect-[6.443]'>
        <Image
          src='/i/podcast.svg'
          alt='Podcast'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </>
  );
}
