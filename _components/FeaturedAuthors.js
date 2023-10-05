import Link from 'next/link';
import Image from 'next/image';
import ButtonText from './ButtonText';

export default function FeaturedAuthors({ authors }) {
  return (
    <>
      <div className='mb-12 mt-24 flex items-center justify-between border-t border-black pt-12 lg:mb-24 lg:mt-48'>
        <h1 className='BIGTEXT font-semibold uppercase'>Authors</h1>
        <Link href={`/authors`}>
          <ButtonText
            text='All authors'
            image='arrow-right-line'
            imageSide='right'
            showTextOnMobile={false}
          />
        </Link>
      </div>
      <div className='grid border border-b-0 border-black lg:grid-cols-2'>
        {authors.map((author, i) => {
          return (
            <Link href={`/authors/${author.username}`} key={i}>
              <div className='items-center border-b border-black p-6 md:flex md:p-8 odd:lg:border-r'>
                <div className='h-24 w-24 lg:h-40 lg:w-40'>
                  <div className='relative h-full w-full'>
                    <Image
                      src={author.avatar.formats.small.url}
                      alt={`${author.firstname} ${author.lastname}`}
                      fill
                      sizes='10vw'
                      className='rounded-full object-cover grayscale'
                    />
                  </div>
                </div>
                <div className='md:ml-12'>
                  <h5 className='my-2 text-2xl font-semibold md:mb-4 md:mt-0 md:text-[32px]'>
                    {author.firstname} {author.lastname}
                  </h5>
                  <div className='gap-6 text-[14px] md:flex'>
                    <p className='py-2 md:m-0 md:p-0'>
                      <span className='font-semibold'>Job</span> {author.job}
                    </p>
                    <p className='py-2 md:m-0 md:p-0'>
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
