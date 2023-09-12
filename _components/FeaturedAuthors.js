import Link from 'next/link';
import Image from 'next/image';
import ButtonText from './ButtonText';

export default function FeaturedAuthors({ authors }) {
  return (
    <>
      <div className='mt-48 mb-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold leading-[114.4px] text-[104px] uppercase'>
          Authors
        </h1>
        <Link href={`/authors`}>
          <ButtonText
            text='All authors'
            image='arrow-right-line'
            imageSide='right'
          />
        </Link>
      </div>
      <div className='grid grid-cols-2 border border-b-0 border-black'>
        {authors.map((author, i) => {
          return (
            <Link href={`/authors/${author.username}`} key={i}>
              <div className='p-8 border-b odd:border-r border-black flex items-center'>
                <div className='w-40 h-40'>
                  <div className='relative w-full h-full'>
                    <Image
                      src={`http://127.0.0.1:1337${author.avatar.formats.small.url}`}
                      alt={`${author.firstname} ${author.lastname}`}
                      fill
                      sizes='10vw'
                      className='object-cover rounded-full grayscale'
                    />
                  </div>
                </div>
                <div className='ml-12'>
                  <h5 className='font-semibold text-[32px] mb-4'>
                    {author.firstname} {author.lastname}
                  </h5>
                  <div className='flex gap-6 text-[14px]'>
                    <p>
                      <span className='font-semibold'>Job</span> {author.job}
                    </p>
                    <p>
                      <span className='font-semibold'>City</span> {author.city}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
