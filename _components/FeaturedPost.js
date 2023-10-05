import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function FeaturedPost({ post }) {
  let D = new Date(post.data[0].attributes.updatedAt);
  return (
    <div className='grid grid-cols-1 md:block'>
      <div className='order-2 mb-6 grid gap-4 md:order-none md:mb-12 lg:grid-cols-2 lg:gap-12'>
        <Link href={`/post/${post.data[0].attributes.url}`}>
          <h1 className='BIGTEXT font-semibold uppercase'>
            {post.data[0].attributes.title}
          </h1>
        </Link>
        <div>
          <p className='mb-8 text-lg font-normal md:leading-[32.4px] lg:mb-16'>
            {post.data[0].attributes.excerpt}
          </p>
          <div className='items-center justify-between md:flex'>
            <div className='block text-[14px] md:flex md:gap-6'>
              <p className='py-2 md:m-0 md:p-0'>
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
              <p className='py-2 md:m-0 md:p-0'>
                <span className='font-semibold'>Date </span>
                {`${D.getDate()}. ${getMonthName(
                  D.getMonth()
                )} ${D.getFullYear()}`}
              </p>
              <p className='py-2 md:m-0 md:p-0'>
                <span className='font-semibold'>Read </span>
                <Characters c={post.data[0].attributes.content.length} />
              </p>
            </div>
            <div className='py-2 md:m-0 md:p-0'>
              <RoundedButton text={post.data[0].attributes.tag} />
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/post/${post.data[0].attributes.url}`}
        className='order-1 md:order-none'
      >
        <div className='relative mb-4 aspect-square w-full md:mb-12 md:aspect-[1.9] lg:aspect-[1.5]'>
          <Image
            src={post.data[0].attributes.featuredimage.data.attributes.url}
            alt={post.data[0].attributes.title}
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
      </Link>
    </div>
  );
}
