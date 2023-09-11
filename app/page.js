import Image from 'next/image';
import NewsTicker from '@/_components/NewsTicker';
import FeaturedPost from '@/_components/FeaturedPost';
import ArticlesList from '@/_components/ArticlesList';
import FeaturedPodcasts from '@/_components/FeaturedPodcasts';
import FeaturedAuthors from '@/_components/FeaturedAuthors';

export default function Home() {
  let posts = [
    {
      title: 'Hope dies last',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      author: 'Jakob Gronberg',
      date: '16. March 2022',
      read: '5 Min',
      tag: 'art',
      image: '/i/hope-dies-last.jpeg',
    },
    {
      title: 'The best art museums',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      author: 'Jakob Gronberg',
      date: '11. March 2022',
      read: '7 Min',
      tag: 'art',
      image: '/i/the-best-art-museums.jpeg',
    },
    {
      title: 'The devil is the details',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
      author: 'Jakob Gronberg',
      date: '4. March 2022',
      read: '3 Min',
      tag: 'art',
      image: '/i/the-devil-is-the-details.jpeg',
    },
  ];

  let podcasts = [
    {
      title: 'The Problem of today’s cultural development',
      date: '16. March 2022',
      duration: '1 Hour 50 Min',
      ep: '05',
    },
    {
      title: 'The hidden messages of Jack Nielson',
      date: '10. March 2022',
      duration: '1 Hour 15 Min',
      ep: '04',
    },
    {
      title: 'Behind the scenes of the street art culture',
      date: '2. March 2022',
      duration: '40 Min',
      ep: '03',
    },
  ];

  let authors = [
    {
      name: 'Jakob Grønberg',
      job: 'Artist',
      city: 'Berlin',
    },
    {
      name: 'Louise Jensen',
      job: 'Artist',
      city: 'Stockholm',
    },
    {
      name: 'Anne Henry',
      job: 'Photograph',
      city: 'New York',
    },
    {
      name: 'Anna Nielsen',
      job: 'Columnists',
      city: 'Copenhagen',
    },
    {
      name: 'Jane Cooper',
      job: 'Artist',
      city: 'Berlin',
    },
    {
      name: 'Cristofer Vaccaro',
      job: 'Artist',
      city: 'Lisbon',
    },
  ];
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
      <NewsTicker />
      <FeaturedPost />
      <div className='grid grid-cols-3 gap-24'>
        <div className='col-span-2'>
          <ArticlesList articles={posts} />
        </div>
        <div className=''></div>
      </div>
      <FeaturedPodcasts podcasts={podcasts} />
      <FeaturedAuthors authors={authors} />
    </>
  );
}
