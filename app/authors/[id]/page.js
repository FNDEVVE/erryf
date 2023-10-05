import Image from 'next/image';
import Link from 'next/link';
import { getAuthor, getArticlesOf } from '@/_components/util';
import AuthorArticles from '@/_components/AuthorArticles';
import GoBack from '@/_components/GoBack';
import ThreeSocials from '@/_components/ThreeSocials';

export default async function AuthorPage({ params }) {
  let author = await getAuthor({ username: params.id });
  author = author[0];
  console.log(author);
  return (
    <>
      <GoBack text={'Authors'} />
      <div className='mb-40 lg:mx-20 xl:mx-60'>
        <div className='md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3 lg:gap-24'>
          <div className='md:col-span-2 lg:col-span-1'>
            <div className='mb-12 aspect-square w-full md:mb-0'>
              <div className='relative h-full w-full'>
                <Image
                  src={author.avatar.formats.medium.url}
                  alt={`${author.firstname} ${author.lastname}`}
                  fill
                  sizes='(max-width: 768px) 100vw, 25vw'
                  className='rounded-full object-cover grayscale'
                />
              </div>
            </div>
            <div className='mb-8 mt-4 flex justify-between border-y border-black py-4 md:mt-12'>
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
        <h2 className='BIGTEXT mb-12 font-semibold md:mb-24'>
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
