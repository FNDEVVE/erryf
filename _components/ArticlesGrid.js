import Link from 'next/link';
import Image from 'next/image';
import { getMonthName } from './util';
import RoundedButton from './RoundedButton';

export default function ArticlesGrid({ articles, tag }) {
  return (
    <div className='grid grid-cols-3 border border-r-0 border-b-0 border-black'>
      {articles.data.map((post, i) => {
        let D = new Date(post.attributes.updatedAt);
        return (
          <div key={i} className='p-12 border-r border-b border-black'>
            <div className='flex justify-between'>
              <p>
                {`${D.getDate()}. ${getMonthName(
                  D.getMonth()
                )} ${D.getFullYear()}`}
              </p>
              <RoundedButton text={post.attributes.tag} />
            </div>
            <div className='aspect-square my-8'>
              <div className='relative w-full h-full'>
                <Image
                  src={`http://127.0.0.1:1337${post.attributes.featuredimage.data.attributes.formats.small.url}`}
                  alt={post.attributes.title}
                  fill
                  sizes='25vw'
                  className='object-cover'
                />
              </div>
            </div>
            <h3 className='text-[32px] font-semibold mb-3'>
              {post.attributes.title}
            </h3>
            <p className='leading-[28.8px] mb-8'>{post.attributes.excerpt}</p>
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
                <span className='font-semibold'>Duration </span>
                {post.attributes.content.length} characters
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
