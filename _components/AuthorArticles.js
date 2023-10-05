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
            ? 'p-8 border-b border-r first:border-t lg:border-t last:border-t-0 border-black'
            : 'p-8 border border-l-0 border-black'
        }
      >
        <Link href={`/post/${post.attributes.url}`}>
          <div className='flex h-36'>
            <div className='absolute w-36 h-36'>
              <div className='relative w-full h-full'>
                <Image
                  src={
                    post.attributes.featuredimage.data.attributes.formats.small
                      .url
                  }
                  alt={post.attributes.title}
                  fill
                  sizes='25vw'
                  className='object-cover'
                />
              </div>
            </div>
            <div className='ml-48 flex flex-col justify-center'>
              <h3 className='text-[32px] font-semibold mb-4'>
                {post.attributes.title}
              </h3>
              <div className='flex justify-between'>
                <div className='flex gap-6 text-[14px]'>
                  <p>
                    <span className='font-semibold'>Date </span>
                    {`${D.getDate()}. ${getMonthName(
                      D.getMonth()
                    )} ${D.getFullYear()}`}
                  </p>
                  <p className='hidden lg:block'>
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
