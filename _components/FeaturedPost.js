import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function FeaturedPost({ post }) {
  let D = new Date(post.data[0].attributes.updatedAt);
  return (
    <>
      <div className='grid grid-cols-2 gap-12 mb-12'>
        <Link href={`/post/${post.data[0].attributes.url}`}>
          <h1 className='font-semibold BIGTEXT uppercase'>
            {post.data[0].attributes.title}
          </h1>
        </Link>
        <div>
          <p className='font-normal text-lg leading-[32.4px] mb-16'>
            {post.data[0].attributes.excerpt}
          </p>
          <div className='flex justify-between'>
            <div className='flex gap-6 text-[14px]'>
              <p>
                <span className='font-semibold'>Text </span>
                <Link
                  href={`/authors/${post.data[0].attributes.users_permissions_user.data.attributes.username}`}
                >
                  <span className='underline'>
                    {
                      post.data[0].attributes.users_permissions_user.data
                        .attributes.firstname
                    }{' '}
                    {
                      post.data[0].attributes.users_permissions_user.data
                        .attributes.lastname
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
                <Characters c={post.data[0].attributes.content.length} />
              </p>
            </div>
            <RoundedButton text={post.data[0].attributes.tag} />
          </div>
        </div>
      </div>
      <Link href={`/post/${post.data[0].attributes.url}`}>
        <div className='relative w-full aspect-[1.5] mb-12'>
          <Image
            src={post.data[0].attributes.featuredimage.data.attributes.url}
            alt={post.data[0].attributes.title}
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
      </Link>
    </>
  );
}
