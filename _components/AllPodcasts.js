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
            className='grid gap-4 lg:gap-12 grid-cols-3 lg:grid-cols-5 my-12 pb-12 border-b border-black last:border-b-0 last:mb-0 last:pb-0 first:mt-24'
          >
            <div className='col-span-1 lg:col-span-3 flex items-center'>
              <h6 className='text-2xl font-semibold'>
                {String(podcast.attributes.episode).padStart(2, '0')}
              </h6>
              <Link
                href={`/podcast/${podcast.attributes.url}`}
                className='w-60 ml-6 mr-2 lg:mx-16 aspect-square'
              >
                <div className='relative w-full h-full'>
                  <Image
                    src={
                      podcast.attributes.featuredimage.data.attributes.formats
                        .medium.url
                    }
                    alt={podcast.attributes.title}
                    fill
                    sizes='25vw'
                    className='object-cover z-10 brightness-75'
                  />
                  <div className='absolute top-0 left-0 w-full h-full p-2 z-20'>
                    <div className='relative w-full h-full text-white'>
                      <h5 className='text-xl lg:text-5xl font-semibold uppercase'>
                        Erryf
                      </h5>
                      <h6 className='text-xs lg:text-2xl font-medium lg:font-semibold uppercase'>
                        Podcast
                      </h6>
                      <h6 className='text-sm lg:text-2xl bottom-0 absolute font-medium lg:font-semibold uppercase'>
                        EP {String(podcast.attributes.episode).padStart(2, '0')}
                      </h6>
                      <div className='absolute bottom-0 right-0'>
                        <div className='relative lg:w-20 lg:h-20 w-12 h-12 -mr-3 lg:-mr-4 -mb-3 lg:-mb-4'>
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
              </Link>
              <h1 className='hidden lg:block font-semibold text-[32px]'>
                {podcast.attributes.title}
              </h1>
            </div>
            <div className='col-span-2 lg:block flex flex-col justify-center'>
              <h1 className='lg:hidden mb-4 font-semibold text-[32px]'>
                {podcast.attributes.title}
              </h1>
              <div className='lg:justify-between flex items-center gap-6 lg:h-full'>
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
