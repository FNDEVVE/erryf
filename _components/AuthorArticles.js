import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import Characters from './Characters';

export default function AuthorArticles({ articles }) {
  return articles.data.map((post, i) => {
    let D = new Date(post.attributes.updatedAt);
    return (
      <div
        key={i}
        className={
          articles.data.length > 1
            ? 'border-b border-r border-black p-6 first:border-t last:border-t-0 md:p-8 lg:border-t'
            : 'border border-l-0 border-black p-6 md:p-8'
        }
      >
        <Link href={`/post/${post.attributes.url}`}>
          <div className='md:flex md:h-36 md:w-auto'>
            <div className='aspect-square h-full w-full md:absolute md:h-36 md:w-36'>
              <div className='relative h-full w-full'>
                <Image
                  src={
                    post.attributes.featuredimage.data.attributes.formats.small
                      .url
                  }
                  alt={post.attributes.title}
                  fill
                  sizes='100vw'
                  className='object-cover'
                />
              </div>
            </div>
            <div className='mt-6 flex flex-col justify-center md:ml-48 md:mt-0'>
              <h3 className='mb-4 text-2xl font-semibold md:text-[32px]'>
                {post.attributes.title}
              </h3>
              <div className='flex justify-between'>
                <div className='text-[14px] md:flex md:gap-6'>
                  <p className='py-2 md:m-0 md:p-0'>
                    <span className='font-semibold'>Date </span>
                    {`${D.getDate()}. ${getMonthName(
                      D.getMonth()
                    )} ${D.getFullYear()}`}
                  </p>
                  <p className='py-2 md:m-0 md:p-0'>
                    <span className='font-semibold'>Read </span>
                    <Characters c={post.attributes.content.length} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}
