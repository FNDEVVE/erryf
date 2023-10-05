import Image from 'next/image';
import ButtonText from './ButtonText';
import Link from 'next/link';
import { getMonthName } from './util';

export default function AllPodcasts({ podcasts }) {
  return (
    <>
      {podcasts.data.map((podcast, i) => {
        let D = new Date(podcast.attributes.updatedAt);
        let durationHours = Math.floor(podcast.attributes.duration / 60);
        let durationMinutesLeft =
          podcast.attributes.duration - durationHours * 60;
        return (
          <div
            key={i}
            className='my-8 grid grid-cols-1 border-b border-black pb-8 first:mt-24 last:mb-0 last:border-b-0 last:pb-0 md:my-12 md:grid-cols-3 md:gap-4 md:pb-12 lg:grid-cols-5 lg:gap-12'
          >
            <div className='col-span-1 flex items-center lg:col-span-3'>
              <h6 className='hidden text-2xl font-semibold md:block'>
                {String(podcast.attributes.episode).padStart(2, '0')}
              </h6>
              <Link
                href={`/podcast/${podcast.attributes.url}`}
                className='aspect-square w-full md:ml-6 md:mr-2 md:w-60 lg:mx-16'
              >
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
                  <div className='absolute left-0 top-0 z-20 h-full w-full p-6 md:p-2'>
                    <div className='relative h-full w-full text-white'>
                      <h5 className='text-5xl font-semibold uppercase md:text-xl lg:text-5xl'>
                        Erryf
                      </h5>
                      <h6 className='text-2xl font-medium uppercase md:text-xs lg:text-2xl lg:font-semibold'>
                        Podcast
                      </h6>
                      <h6 className='absolute bottom-0 text-2xl font-medium uppercase md:text-sm lg:text-2xl lg:font-semibold'>
                        EP {String(podcast.attributes.episode).padStart(2, '0')}
                      </h6>
                      <div className='absolute bottom-0 right-0'>
                        <div className='relative -mb-3 -mr-3 h-20 w-20 md:h-12 md:w-12 lg:-mb-4 lg:-mr-4 lg:h-20 lg:w-20'>
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
                <h6 className='my-4 text-xl font-semibold md:hidden'>
                  {String(podcast.attributes.episode).padStart(2, '0')}
                </h6>
              </Link>
              <h1 className='hidden text-2xl font-semibold md:text-[32px] lg:block'>
                {podcast.attributes.title}
              </h1>
            </div>
            <div className='col-span-2 flex flex-col justify-center lg:block'>
              <h1 className='mb-4 text-2xl font-semibold md:text-[32px] lg:hidden'>
                {podcast.attributes.title}
              </h1>
              <div className='items-center gap-6 md:flex lg:h-full lg:justify-between'>
                <p className='py-2 text-sm md:m-0 md:p-0 md:text-base'>
                  <span className='font-semibold'>Date </span>
                  {`${D.getDate()}. ${getMonthName(
                    D.getMonth()
                  )} ${D.getFullYear()}`}
                </p>
                <p className='py-2 text-sm md:m-0 md:p-0 md:text-base'>
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
                <Link
                  href={`/podcast/${podcast.attributes.url}`}
                  className='hidden lg:block'
                >
                  <ButtonText
                    text='Listen'
                    image='arrow-right-line'
                    imageSide='right'
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
