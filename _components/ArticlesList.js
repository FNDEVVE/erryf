import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import ButtonText from './ButtonText';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function ArticlesList({ articles }) {
  delete articles.data[0];
  articles.data = articles.data.filter((x) => x);

  return articles.data.map((post, i) => {
    let D = new Date(post.attributes.updatedAt);
    return (
      <>
        <div key={i} className='grid md:flex md:h-60'>
          <Link href={`/post/${post.attributes.url}`}>
            <div className='aspect-square w-full md:absolute md:h-60 md:w-60'>
              <div className='relative h-full w-full'>
                <Image
                  src={
                    post.attributes.featuredimage.data.attributes.formats.small
                      .url
                  }
                  alt={post.attributes.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 25vw'
                  className='object-cover'
                />
              </div>
            </div>
          </Link>
          <div className='flex flex-col justify-between md:ml-[272px] lg:ml-72'>
            <Link href={`/post/${post.attributes.url}`}>
              <h3 className='my-3 text-2xl font-semibold md:mt-0 md:text-[32px]'>
                {post.attributes.title}
              </h3>
              <p className='mb-4 line-clamp-4 leading-[28.8px] lg:mb-0'>
                {post.attributes.excerpt}
              </p>
            </Link>
            <div className='justify-between md:flex'>
              <div className='block text-[14px] md:flex md:gap-6'>
                <p className='py-2 md:m-0 md:p-0'>
                  <span className='font-semibold'>Text </span>
                  <Link
                    href={`/authors/${post.attributes.users_permissions_user.data.attributes.username}`}
                  >
                    <span className='underline'>
                      {
                        post.attributes.users_permissions_user.data.attributes
                          .firstname
                      }{' '}
                      {
                        post.attributes.users_permissions_user.data.attributes
                          .lastname
                      }
                    </span>
                  </Link>
                </p>
                <p className='py-2 md:m-0 md:p-0'>
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
              <div className='py-2 md:m-0 md:p-0'>
                <RoundedButton text={post.attributes.tag} />
              </div>
            </div>
          </div>
        </div>
        {i != articles.data.length - 1 ? (
          <div className='my-12 border-b border-black'></div>
        ) : (
          <>
            <div className='mt-8 border-b border-transparent md:my-12'></div>
            <Link href={'/magazine'}>
              <ButtonText
                text='See all'
                image='arrow-right-line'
                imageSide='right'
              />
            </Link>
          </>
        )}
      </>
    );
  });
}
