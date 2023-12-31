import Image from 'next/image';
import AllPodcasts from '@/_components/AllPodcasts';
import { getAuthors, getPodcasts, getPosts } from '@/_components/util';
export default async function Podcast() {
  return (
    <>
      <div className='relative aspect-[6.443] w-full'>
        <Image
          src='/i/podcast.svg'
          alt='Podcast'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <AllPodcasts podcasts={await getPodcasts()} />
    </>
  );
}
