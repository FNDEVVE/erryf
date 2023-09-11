import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';

export default function FeaturedPost({ post }) {
  let D = new Date(post.data.attributes.updatedAt);
  return (
    <>
      <div className='grid grid-cols-2 gap-12 mb-12'>
        <h1 className='font-semibold leading-[105.6px] text-[96px] uppercase'>
          {post.data.attributes.title}
        </h1>
        <div>
          <p className='font-normal text-lg leading-[32.4px] mb-16'>
            {post.data.attributes.excerpt}
          </p>
          <div className='flex justify-between'>
            <div className='flex gap-6 text-[14px]'>
              <p>
                <span className='font-semibold'>Text </span>
                <Link
                  href={`/authors/${post.data.attributes.users_permissions_user.data.attributes.username}`}
                >
                  <span className='underline'>
                    {
                      post.data.attributes.users_permissions_user.data
                        .attributes.firstname
                    }{' '}
                    {
                      post.data.attributes.users_permissions_user.data
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
                {post.data.attributes.content.length} characters
              </p>
            </div>
            <RoundedButton text={post.data.attributes.tag} />
          </div>
        </div>
      </div>
      <div className='relative w-full aspect-[1.5] mb-12'>
        <Image
          src={`http://127.0.0.1:1337${post.data.attributes.featuredimage.data.attributes.url}`}
          alt={post.data.attributes.title}
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
    </>
  );
}
