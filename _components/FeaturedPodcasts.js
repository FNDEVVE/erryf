import Image from 'next/image';
import { getMonthName } from './util';
import ButtonText from './ButtonText';
import Link from 'next/link';

export default function FeaturedPodcasts({ podcasts }) {
  return (
    <>
      <div className='my-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold leading-[114.4px] text-[104px] uppercase'>
          Podcast
        </h1>
        <Link href={`/podcast`}>
          <ButtonText
            text='All episodes'
            image='arrow-right-line'
            imageSide='right'
          />
        </Link>
      </div>
      <div className='grid grid-cols-3 border border-black'>
        {podcasts.data.map((podcast, i) => {
          let D = new Date(podcast.attributes.updatedAt);
          let durationHours = Math.floor(podcast.attributes.duration / 60);
          let durationMinutesLeft =
            podcast.attributes.duration - durationHours * 60;
          return (
            <div
              key={i}
              className='first:border-l-0 border-l border-black p-12'
            >
              <div className='w-full aspect-square'>
                <div className='relative w-full h-full'>
                  <Image
                    src={`http://127.0.0.1:1337${podcast.attributes.featuredimage.data.attributes.formats.small.url}`}
                    alt={podcast.attributes.title}
                    fill
                    sizes='25vw'
                    className='object-cover z-10'
                  />
                  <div className='absolute top-0 left-0 w-full h-full pt-8 pb-6 pl-9 pr-5 z-20'>
                    <div className='relative w-full h-full text-white'>
                      <h5 className='text-5xl font-semibold uppercase'>
                        Fyrre
                      </h5>
                      <h6 className='text-2xl font-semibold uppercase'>
                        Podcast
                      </h6>
                      <h6 className='text-2xl bottom-0 absolute font-semibold uppercase'>
                        EP {String(podcast.attributes.episode).padStart(2, '0')}
                      </h6>
                      <div className='absolute bottom-0 right-0'>
                        <div className='relative w-20 h-20 -mr-4 -mb-4'>
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
              <h3 className='text-[32px] font-semibold leading-[38.4px] mt-8 mb-12'>
                {podcast.attributes.title}
              </h3>
              <div className='flex gap-6 text-[14px]'>
                <p>
                  <span className='font-semibold'>Date </span>
                  {`${D.getDate()}. ${getMonthName(
                    D.getMonth()
                  )} ${D.getFullYear()}`}
                </p>
                <p>
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
          );
        })}
      </div>
    </>
  );
}
