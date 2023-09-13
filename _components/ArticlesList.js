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
        <div key={i} className='flex h-60'>
          <Link href={`/post/${post.attributes.url}`}>
            <div className='absolute w-60 h-60'>
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
          </Link>
          <div className='ml-72 flex flex-col justify-between'>
            <Link href={`/post/${post.attributes.url}`}>
              <h3 className='text-[32px] font-semibold mb-3'>
                {post.attributes.title}
              </h3>
              <p className='leading-[28.8px]'>{post.attributes.excerpt}</p>
            </Link>
            <div className='flex justify-between'>
              <div className='flex gap-6 text-[14px]'>
                <p>
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
                <p>
                  <span className='font-semibold'>Date </span>
                  {`${D.getDate()}. ${getMonthName(
                    D.getMonth()
                  )} ${D.getFullYear()}`}
                </p>
                <p>
                  <span className='font-semibold'>Duration </span>
                  <Characters c={post.attributes.content.length} />
                </p>
              </div>
              <RoundedButton text={post.attributes.tag} />
            </div>
          </div>
        </div>
        {i != articles.data.length - 1 ? (
          <div className='border-b border-black my-12'></div>
        ) : (
          <>
            <div className='border-b border-transparent my-12'></div>
            <Link href={'/magazine'}>
              <ButtonText
                text='All articles'
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
