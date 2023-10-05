import Image from 'next/image';
import Link from 'next/link';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function FeaturedPost({ post }) {
  let D = new Date(post.data[0].attributes.updatedAt);
  return (
    <div className='grid grid-cols-1 md:block'>
      <div className='grid lg:grid-cols-2 gap-4 lg:gap-12 mb-6 md:mb-12 order-2 md:order-none'>
        <Link href={`/post/${post.data[0].attributes.url}`}>
          <h1 className='font-semibold BIGTEXT uppercase'>
            {post.data[0].attributes.title}
          </h1>
        </Link>
        <div>
          <p className='font-normal text-lg md:leading-[32.4px] mb-8 lg:mb-16'>
            {post.data[0].attributes.excerpt}
          </p>
          <div className='md:flex justify-between items-center'>
            <div className='block md:flex md:gap-6 text-[14px]'>
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
        <div className='relative w-full aspect-square md:aspect-[1.9] lg:aspect-[1.5] mb-4 md:mb-12'>
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
