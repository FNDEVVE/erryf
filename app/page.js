import {
  getFeaturedPost,
  getPosts,
  getPodcasts,
  getAuthors,
} from '@/_components/util';
import Image from 'next/image';
import NewsTicker from '@/_components/NewsTicker';
import FeaturedPost from '@/_components/FeaturedPost';
import ArticlesList from '@/_components/ArticlesList';
import FeaturedPodcasts from '@/_components/FeaturedPodcasts';
import FeaturedAuthors from '@/_components/FeaturedAuthors';
import Button from '@/_components/Button';
import MostPopularArticles from '@/_components/MostPopularArticles';
import NewsletterWidget from '@/_components/NewsletterWidget';

export default async function Home() {
  return (
    <>
      <div className='relative w-full aspect-[7.037]'>
        <Image
          src='/i/art-and-life.svg'
          alt='Art & Life'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <NewsTicker
        variant={1}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit +++'}
      />
      <FeaturedPost post={await getFeaturedPost()} />
      <div className='grid grid-cols-3 gap-24'>
        <div className='col-span-2'>
          <ArticlesList articles={await getPosts()} />
        </div>
        <div>
          <h6 className='font-semibold uppercase mb-2'>Printmagazine</h6>
          <h5 className='text-5xl font-semibold mb-8'>03/2022</h5>
          <div className='w-full aspect-[0.8] mb-4'>
            <div className='relative w-full h-full'>
              <Image
                src='/i/magazin.png'
                alt='xD'
                fill
                sizes='25vw'
                className='object-cover z-10'
              />
              <div className='absolute top-0 left-0 w-full h-full pt-8 pb-6 pl-9 pr-5 z-20'>
                <div className='relative w-full h-full text-white'>
                  <h5 className='text-8xl font-semibold uppercase'>Fyrre</h5>
                  <h6 className='text-2xl font-semibold uppercase'>Magazin</h6>
                  <h6 className='text-2xl bottom-0 absolute font-semibold uppercase'>
                    03/2022
                  </h6>
                  <div className='absolute bottom-0 right-0'>
                    <div className='relative w-20 h-20 -mr-4 -mb-4'>
                      <Image
                        src='/i/arrow-right-down-line.svg'
                        alt='xD'
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
          <Button variant={0} text={'Buy'} />
          <h6 className='font-semibold mt-16 uppercase'>Most popular</h6>
          <MostPopularArticles articles={await getPosts()} />
          <NewsletterWidget />
        </div>
      </div>
      <FeaturedPodcasts podcasts={await getPodcasts()} />
      <FeaturedAuthors authors={await getAuthors()} />
    </>
  );
}
