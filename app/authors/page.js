import { getAuthors, getPosts } from '@/_components/util';
import AllAuthors from '@/_components/AllAuthors';
import Image from 'next/image';

export default async function Authors() {
  return (
    <>
      <div className='relative w-full aspect-[6.576] mb-16'>
        <Image
          src='/i/authors.svg'
          alt='Authors'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <AllAuthors authors={await getAuthors()} posts={await getPosts()} />
    </>
  );
}
