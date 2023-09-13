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
      <GoBack text={'Author'} />
      <div className='mx-60 mb-40'>
        <div className='grid grid-cols-3 gap-24'>
          <div className=''>
            <div className='w-full aspect-square'>
              <div className='relative w-full h-full'>
                <Image
                  src={author.avatar.formats.medium.url}
                  alt={`${author.firstname} ${author.lastname}`}
                  fill
                  sizes='25vw'
                  className='object-cover grayscale rounded-full'
                />
              </div>
            </div>
            <div className='border-t border-black pt-8 mt-12 flex justify-between'>
              <h5 className='text-xl font-semibold uppercase'>Follow</h5>
              <ThreeSocials />
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='BIGTEXT font-semibold uppercase mb-8'>
              {author.firstname} {author.lastname}
            </h1>
            <p className='text-[22px] leading-[39.6px] font-medium mb-12'>
              {author.excerpt}
            </p>
            <p className='leading-[28.8px]'>{author.bio}</p>
          </div>
        </div>
      </div>
      <div className='border-t border-black pt-12'>
        <h2 className='text-7xl font-semibold mb-24'>
          Articles by {author.firstname} {author.lastname}
        </h2>
        <div className='grid grid-cols-2 border-l border-black'>
          <AuthorArticles
            articles={await getArticlesOf({ username: params.id })}
          />
        </div>
      </div>
    </>
  );
}
