import Link from 'next/link';
import Image from 'next/image';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function PodcastsGrid({ podcasts, useData = true }) {
  let target = useData ? podcasts.data : podcasts;
  return (
    <div className='grid grid-cols-1 border border-b-0 border-r-0 border-black md:grid-cols-2 lg:grid-cols-3'>
      {target.map((podcast, i) => {
        let D = new Date(podcast.attributes.updatedAt);
        let durationHours = Math.floor(podcast.attributes.duration / 60);
        let durationMinutesLeft =
          podcast.attributes.duration - durationHours * 60;
        return (
          <div
            key={i}
            className='border-b border-r border-black p-6 md:p-8 lg:p-12'
          >
            <Link href={`/podcast/${podcast.attributes.url}`}>
              <div className='mb-8 aspect-square lg:my-8'>
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
                  <div className='absolute left-0 top-0 z-20 h-full w-full p-4'>
                    <div className='relative h-full w-full text-white'>
                      <h5 className='text-5xl font-semibold uppercase'>
                        Erryf
                      </h5>
                      <h6 className='text-2xl font-semibold uppercase'>
                        Podcast
                      </h6>
                      <h6 className='absolute bottom-0 text-2xl font-semibold uppercase'>
                        EP {String(podcast.attributes.episode).padStart(2, '0')}
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
              <h3 className='mb-3 text-2xl font-semibold md:text-[32px]'>
                {podcast.attributes.title}
              </h3>
              <p className='mb-8 leading-[28.8px]'>
                {podcast.attributes.excerpt}
              </p>
            </Link>
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
  );
}
