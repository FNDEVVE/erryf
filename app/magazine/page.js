import ArticlesGrid from '@/_components/ArticlesGrid';
import CategoriesButtons from '@/_components/CategoriesButtons';
import { getPosts } from '@/_components/util';
import Image from 'next/image';

export default async function Magazine() {
  return (
    <>
      <div className='relative w-full aspect-[7.068]'>
        <Image
          src='/i/magazine.svg'
          alt='Magazine'
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='flex justify-between mt-24 mb-16'>
        <h6 className='font-semibold uppercase'>Categories</h6>
        <div className='flex gap-3'>
          <CategoriesButtons articles={await getPosts()} />
        </div>
      </div>
      <ArticlesGrid articles={await getPosts()} />
    </>
  );
}
