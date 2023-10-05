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
      <div className='relative aspect-[7.037] w-full'>
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
      <div className='grid gap-16 lg:grid-cols-3 lg:gap-24'>
        <div className='lg:col-span-2'>
          <ArticlesList articles={await getPosts()} />
        </div>
        <div className='hidden lg:block'>
          <h6 className='mb-2 font-semibold uppercase'>Printmagazine</h6>
          <h5 className='mb-8 text-5xl font-semibold'>09/2023</h5>
          <div className='mb-4 aspect-[0.8] w-full'>
            <div className='relative h-full w-full'>
              <Image
                src='/i/magazin.png'
                alt='Magazin'
                fill
                sizes='25vw'
                className='z-10 object-cover'
              />
              <div className='absolute left-0 top-0 z-20 h-full w-full pb-6 pl-9 pr-5 pt-8'>
                <div className='relative h-full w-full text-white'>
                  <h5 className='text-8xl font-semibold uppercase'>Erryf</h5>
                  <h6 className='text-2xl font-semibold uppercase'>Magazin</h6>
                  <h6 className='absolute bottom-0 text-2xl font-semibold uppercase'>
                    09/2023
                  </h6>
                  <div className='absolute bottom-0 right-0'>
                    <div className='relative -mb-4 -mr-4 h-20 w-20'>
                      <Image
                        src='/i/arrow-right-down-line.svg'
                        alt='Arrow Right Down Line'
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
          <h6 className='mt-16 font-semibold uppercase'>Most popular</h6>
          <MostPopularArticles articles={await getPosts()} />
          <NewsletterWidget />
        </div>
      </div>
      <FeaturedPodcasts podcasts={await getPodcasts()} />
      <FeaturedAuthors authors={await getAuthors()} />
    </>
  );
}
