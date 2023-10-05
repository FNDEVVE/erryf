import Image from 'next/image';
import Link from 'next/link';
import { getAuthor, getArticlesOf } from '@/_components/util';
import AuthorArticles from '@/_components/AuthorArticles';
import GoBack from '@/_components/GoBack';
import ThreeSocials from '@/_components/ThreeSocials';

export default async function AuthorPage({ params }) {
  let author = await getAuthor({ username: params.id });
  author = author[0];
  return (
    <>
      <GoBack text={'Authors'} />
      <div className='mb-40 lg:mx-20 xl:mx-60'>
        <div className='grid grid-cols-5 gap-8 lg:grid-cols-3 lg:gap-24'>
          <div className='col-span-2 lg:col-span-1'>
            <div className='aspect-square w-full'>
              <div className='relative h-full w-full'>
                <Image
                  src={author.avatar.formats.medium.url}
                  alt={`${author.firstname} ${author.lastname}`}
                  fill
                  sizes='25vw'
                  className='rounded-full object-cover grayscale'
                />
              </div>
            </div>
            <div className='mb-8 mt-12 flex justify-between border-y border-black py-4'>
              <h5 className='text-xl font-semibold uppercase'>Follow</h5>
              <ThreeSocials />
            </div>
            <div className='my-6 flex items-center justify-between'>
              <p className='font-semibold'>Job</p>
              <p className='text-sm'>{author.job}</p>
            </div>
            <div className='my-6 flex items-center justify-between'>
              <p className='font-semibold'>City</p>
              <p className='text-sm'>{author.city}</p>
            </div>
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <h1 className='BIGTEXT mb-8 font-semibold uppercase'>
              {author.firstname} {author.lastname}
            </h1>
            <p className='mb-12 text-[22px] font-medium leading-[39.6px]'>
              {author.excerpt}
            </p>
            <p className='leading-[28.8px]'>{author.bio}</p>
          </div>
        </div>
      </div>
      <div className='border-t border-black pt-12'>
        <h2 className='BIGTEXT mb-24 font-semibold'>
          Articles by {author.firstname} {author.lastname}
        </h2>
        <div className='grid grid-cols-1 border-l border-black lg:grid-cols-2'>
          <AuthorArticles
            articles={await getArticlesOf({ username: params.id })}
          />
        </div>
      </div>
    </>
  );
}
