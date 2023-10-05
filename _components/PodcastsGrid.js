import Link from 'next/link';
import Image from 'next/image';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function PodcastsGrid({ podcasts, useData = true }) {
  let target = useData ? podcasts.data : podcasts;
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 border border-r-0 border-b-0 border-black'>
      {target.map((podcast, i) => {
        let D = new Date(podcast.attributes.updatedAt);
        let durationHours = Math.floor(podcast.attributes.duration / 60);
        let durationMinutesLeft =
          podcast.attributes.duration - durationHours * 60;
        return (
          <div key={i} className='p-8 lg:p-12 border-r border-b border-black'>
            <Link href={`/podcast/${podcast.attributes.url}`}>
              <div className='aspect-square mb-8 lg:my-8'>
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
                  <div className='absolute top-0 left-0 w-full h-full p-4 z-20'>
                    <div className='relative w-full h-full text-white'>
                      <h5 className='text-5xl font-semibold uppercase'>
                        Erryf
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
              <h3 className='text-[32px] font-semibold mb-3'>
                {podcast.attributes.title}
              </h3>
              <p className='leading-[28.8px] mb-8'>
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
