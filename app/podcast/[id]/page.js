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
      <GoBack text={'Podcast'} />

      <div className='w-2/3 mx-auto grid grid-cols-3 gap-16 mb-48'>
        <div>
          <div className='w-full aspect-square'>
            <div className='relative w-full h-full'>
              <Image
                src={podcast.featuredimage.data.attributes.formats.medium.url}
                alt={podcast.title}
                fill
                sizes='25vw'
                className='object-cover z-10 brightness-75'
              />
              <div className='absolute top-0 left-0 w-full h-full p-4 z-20'>
                <div className='relative w-full h-full text-white'>
                  <h5 className='text-5xl font-semibold uppercase'>Erryf</h5>
                  <h6 className='text-2xl font-semibold uppercase'>Podcast</h6>
                  <h6 className='text-2xl bottom-0 absolute font-semibold uppercase'>
                    EP {String(podcast.episode).padStart(2, '0')}
                  </h6>
                  <div className='absolute bottom-0 right-0'>
                    <div className='relative w-20 h-20 -mr-4 -mb-4'>
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
          <div className='flex justify-between my-8 pb-8 border-b border-black'>
            <h6 className='font-semibold'>Listen on</h6>
            <ThreeSocials podcast={true} />
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Date</h6>
            {`${D.getDate()}. ${getMonthName(D.getMonth())} ${D.getFullYear()}`}
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Duration</h6>
            {durationHours == 1
              ? `${durationHours} hour`
              : durationHours > 1
              ? `${durationHours} hours`
              : ''}{' '}
            {durationMinutesLeft > 0 ? `${durationMinutesLeft} minutes` : ''}
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Share</h6>
            <ThreeSocials />
          </div>
        </div>
        <div className='col-span-2'>
          <h6 className='font-semibold uppercase'>
            Episode {String(podcast.episode).padStart(2, '0')}
          </h6>
          <h1 className='BIGTEXT font-semibold uppercase mt-4 mb-8'>
            {podcast.title}
          </h1>
          <MDX source={podcast.content} />
        </div>
      </div>
      <div className='mb-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold BIGTEXT uppercase'>Latest episodes</h1>
        <Link href={`/podcast`}>
          <ButtonText
            text='All episodes'
            image='arrow-right-line'
            imageSide='right'
          />
        </Link>
      </div>
      <PodcastsGrid podcasts={selectedPodcasts} useData={false} />
    </>
  );
}
