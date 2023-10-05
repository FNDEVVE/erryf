import Link from 'next/link';
import Image from 'next/image';

import ButtonText from '@/_components/ButtonText';
import RoundedButton from '@/_components/RoundedButton';
import GoBack from '@/_components/GoBack';
import ArticlesGrid from '@/_components/ArticlesGrid';
import Characters from '@/_components/Characters';
import {
  getPodcast,
  getMonthName,
  getAuthor,
  getPodcasts,
} from '@/_components/util';

import { MDX } from '@/_components/MDX';
import ThreeSocials from '@/_components/ThreeSocials';
import PodcastsGrid from '@/_components/PodcastsGrid';

export default async function PodcastPage({ params }) {
  let podcast = await getPodcast({ url: params.id });
  podcast = podcast.data[0].attributes;
  console.log(podcast);
  let D = new Date(podcast.updatedAt);
  let durationHours = Math.floor(podcast.duration / 60);
  let durationMinutesLeft = podcast.duration - durationHours * 60;
  let selectedPodcasts = await getPodcasts();
  selectedPodcasts = selectedPodcasts.data.filter(
    (p) => p.attributes.url != podcast.url
  );
  selectedPodcasts = selectedPodcasts.splice(0, 3);
  return (
    <>
      <GoBack text={'Podcasts'} />

      <div className='mx-auto mb-24 grid w-full grid-cols-3 gap-8 lg:mb-48 lg:w-5/6 lg:gap-16 xl:w-2/3'>
        <div>
          <div className='aspect-square w-full'>
            <div className='relative h-full w-full'>
              <Image
                src={podcast.featuredimage.data.attributes.formats.medium.url}
                alt={podcast.title}
                fill
                sizes='25vw'
                className='z-10 object-cover brightness-75'
              />
              <div className='absolute left-0 top-0 z-20 h-full w-full p-4'>
                <div className='relative h-full w-full text-white'>
                  <h5 className='text-5xl font-semibold uppercase'>Erryf</h5>
                  <h6 className='text-2xl font-semibold uppercase'>Podcast</h6>
                  <h6 className='absolute bottom-0 text-2xl font-semibold uppercase'>
                    EP {String(podcast.episode).padStart(2, '0')}
                  </h6>
                  <div className='absolute bottom-0 right-0'>
                    <div className='relative -mb-4 -mr-4 h-20 w-20'>
                      <Image
                        src='/i/arrow-right-down-line.svg'
                        alt={podcast.title}
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
          <div className='my-8 flex justify-between border-b border-black pb-8'>
            <h6 className='font-semibold'>Listen on</h6>
            <ThreeSocials podcast={true} />
          </div>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Date</h6>
            {`${D.getDate()}. ${getMonthName(D.getMonth())} ${D.getFullYear()}`}
          </div>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Duration</h6>
            {durationHours == 1
              ? `${durationHours} hour`
              : durationHours > 1
              ? `${durationHours} hours`
              : ''}{' '}
            {durationMinutesLeft > 0 ? `${durationMinutesLeft} minutes` : ''}
          </div>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Share</h6>
            <ThreeSocials />
          </div>
        </div>
        <div className='col-span-2'>
          <h6 className='font-semibold uppercase'>
            Episode {String(podcast.episode).padStart(2, '0')}
          </h6>
          <h1 className='BIGTEXT mb-8 mt-4 font-semibold uppercase'>
            {podcast.title}
          </h1>
          <MDX source={podcast.content} />
        </div>
      </div>
      <div className='mb-24 flex items-center justify-between border-t border-black pt-12'>
        <h1 className='BIGTEXT font-semibold uppercase'>Latest episodes</h1>
        <Link href={`/podcast`}>
          <ButtonText
            text='See all'
            image='arrow-right-line'
            imageSide='right'
          />
        </Link>
      </div>
      <PodcastsGrid podcasts={selectedPodcasts} useData={false} />
    </>
  );
}
