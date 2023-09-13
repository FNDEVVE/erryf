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
            className='grid gap-12 grid-cols-5 my-12 pb-12 border-b border-black last:border-b-0 last:mb-0 last:pb-0 first:mt-24'
          >
            <div className='col-span-3 flex items-center'>
              <h6 className='text-2xl font-semibold'>
                {String(podcast.attributes.episode).padStart(2, '0')}
              </h6>
              <div className='w-60 mx-16 aspect-square'>
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
              <h1 className='font-semibold text-[32px]'>
                {podcast.attributes.title}
              </h1>
            </div>
            <div className='col-span-2 justify-between flex items-center gap-6'>
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
              <Link href={`/podcast/${podcast.attributes.url}`}>
                <ButtonText
                  text='Listen'
                  image='arrow-right-line'
                  imageSide='right'
                />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
