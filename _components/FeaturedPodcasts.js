import Image from 'next/image';
import { getMonthName } from './util';
import ButtonText from './ButtonText';
import Link from 'next/link';

export default function FeaturedPodcasts({ podcasts }) {
  podcasts.data.splice(3);
  return (
    <>
      <div className='my-12 flex items-center justify-between border-t border-black pt-12 lg:my-24'>
        <h1 className='BIGTEXT font-semibold uppercase'>Podcasts</h1>
        <Link href={`/podcast`}>
          <ButtonText
            text='All episodes'
            image='arrow-right-line'
            imageSide='right'
            showTextOnMobile={false}
          />
        </Link>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {podcasts.data.map((podcast, i) => {
          let D = new Date(podcast.attributes.updatedAt);
          let durationHours = Math.floor(podcast.attributes.duration / 60);
          let durationMinutesLeft =
            podcast.attributes.duration - durationHours * 60;
          return (
            <Link
              className='border border-b-0 border-black last:border-b md:border-y md:border-l-0 md:border-r md:first:border-b md:first:border-l md:last:border-l md:last:border-t-0 lg:border lg:border-l-0 lg:first:border-l lg:last:border-l-0 lg:last:border-t'
              href={`/podcast/${podcast.attributes.url}`}
              key={i}
            >
              <div className='p-6 md:p-8 lg:p-12'>
                <div className='aspect-square w-full'>
                  <div className='relative h-full w-full'>
                    <Image
                      src={
                        podcast.attributes.featuredimage.data.attributes.formats
                          .medium.url
                      }
                      alt={podcast.attributes.title}
                      fill
                      sizes='(max-width: 768px) 100vw, 25vw'
                      className='z-10 object-cover brightness-75'
                    />
                    <div className='absolute left-0 top-0 z-20 h-full w-full pb-4 pl-7 pr-3 pt-6 lg:pb-6 lg:pl-9 lg:pr-5 lg:pt-8'>
                      <div className='relative h-full w-full text-white'>
                        <h5 className='text-5xl font-semibold uppercase'>
                          Erryf
                        </h5>
                        <h6 className='text-2xl font-semibold uppercase'>
                          Podcast
                        </h6>
                        <h6 className='absolute bottom-0 text-2xl font-semibold uppercase'>
                          EP{' '}
                          {String(podcast.attributes.episode).padStart(2, '0')}
                        </h6>
                        <div className='absolute bottom-0 right-0'>
                          <div className='relative -mb-4 -mr-4 h-20 w-20'>
                            <Image
                              src='/i/arrow-right-down-line.svg'
                              alt={podcast.attributes.title}
                              fill
                              sizes='80px'
                              className='object-cover'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='mb-4 mt-6 text-[32px] font-semibold leading-[38.4px]'>
                  {podcast.attributes.title}
                </h3>
                {/* <p className='text-sm line-clamp-4 mb-4'>
                  {podcast.attributes.content}
                </p> */}
                <div className='text-[14px] md:flex md:gap-6'>
                  <p className='py-2 md:m-0 md:p-0'>
                    <span className='font-semibold'>Date </span>
                    {`${D.getDate()}. ${getMonthName(
                      D.getMonth()
                    )} ${D.getFullYear()}`}
                  </p>
                  <p className='py-2 md:m-0 md:p-0'>
                    <span className='font-semibold'>Duration </span>
                    {durationHours == 1
                      ? `${durationHours} hour`
                      : durationHours > 1
                      ? `${durationHours} hours`
                      : ''}{' '}
                    {durationMinutesLeft > 0
                      ? `${durationMinutesLeft} minutes`
                      : ''}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
