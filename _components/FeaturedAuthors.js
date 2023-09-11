import Image from 'next/image';
import ButtonText from './ButtonText';

export default function FeaturedAuthors({ authors }) {
  return (
    <>
      <div className='mt-48 mb-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold leading-[114.4px] text-[104px] uppercase'>
          Authors
        </h1>
        <ButtonText
          text='All authors'
          image='arrow-right-line'
          imageSide='right'
        />
      </div>
      <div className='grid grid-cols-2 border border-b-0 border-black'>
        {authors.map((author, i) => {
          return (
            <div
              key={i}
              className='p-8 border-b odd:border-r border-black flex items-center'
            >
              <div className='w-40 h-40'>
                <div className='relative w-full h-full'>
                  <Image
                    src={`/i/${author.name.split(' ')[0].toLowerCase()}.jpeg`}
                    alt={author.name}
                    fill
                    sizes='10vw'
                    className='object-cover rounded-full grayscale'
                  />
                </div>
              </div>
              <div className='ml-12'>
                <h5 className='font-semibold text-[32px] mb-4'>
                  {author.name}
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
          );
        })}
      </div>
    </>
  );
}
