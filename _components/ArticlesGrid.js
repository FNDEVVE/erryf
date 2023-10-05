import Link from 'next/link';
import Image from 'next/image';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';
import Characters from './Characters';

export default function ArticlesGrid({
  articles,
  tag = 'all',
  useData = true,
}) {
  let target = useData ? articles.data : articles;
  target =
    tag != 'all' ? target.filter((t) => t.attributes.tag == tag) : target;
  return (
    <div className='grid border border-b-0 border-r-0 border-black md:grid-cols-2 lg:grid-cols-3'>
      {target.map((post, i) => {
        let D = new Date(post.attributes.updatedAt);
        return (
          <div
            key={i}
            className='border-b border-r border-black p-6 md:p-8 lg:p-12'
          >
            <div className='flex items-center justify-between'>
              <p className='text-sm lg:text-base'>
                {`${D.getDate()}. ${getMonthName(
                  D.getMonth()
                )} ${D.getFullYear()}`}
              </p>
              <RoundedButton text={post.attributes.tag} />
            </div>
            <Link href={`/post/${post.attributes.url}`}>
              <div className='my-8 aspect-square'>
                <div className='relative h-full w-full'>
                  <Image
                    src={
                      post.attributes.featuredimage.data.attributes.formats
                        .small.url
                    }
                    alt={post.attributes.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 25vw'
                    className='object-cover'
                  />
                </div>
              </div>
              <h3 className='mb-3 text-2xl font-semibold md:text-[32px]'>
                {post.attributes.title}
              </h3>
              <p className='mb-8 text-sm leading-[28.8px] md:text-base'>
                {post.attributes.excerpt}
              </p>
            </Link>
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
                <span className='font-semibold'>Read </span>
                <Characters c={post.attributes.content.length} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
