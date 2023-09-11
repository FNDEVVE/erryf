import Image from 'next/image';
import { getMonthName } from './util';
import ButtonText from './ButtonText';

export default function ArticlesList({ articles }) {
  delete articles.data[0];
  articles.data = articles.data.filter((x) => x);
  return articles.data.map((post, i) => {
    let D = new Date(post.attributes.updatedAt);
    return (
      <>
        <div key={i} className='flex h-60'>
          <div className='absolute w-60 h-60'>
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
          <div className='ml-72 flex flex-col justify-between'>
            <div>
              <h3 className='text-[32px] font-semibold mb-3'>
                {post.attributes.title}
              </h3>
              <p className='leading-[28.8px]'>{post.attributes.excerpt}</p>
            </div>
            <div className='flex gap-6 text-[14px]'>
              <p>
                <span className='font-semibold'>Text </span>
                {
                  post.attributes.users_permissions_user.data.attributes
                    .firstname
                }{' '}
                {
                  post.attributes.users_permissions_user.data.attributes
                    .lastname
                }
              </p>
              <p>
                <span className='font-semibold'>Date </span>
                {`${D.getDate()}. ${getMonthName(
                  D.getMonth()
                )} ${D.getFullYear()}`}
              </p>
              <p>
                <span className='font-semibold'>Duration </span>
                {post.attributes.content.length} characters
              </p>
            </div>
          </div>
        </div>
        {i != articles.data.length - 1 ? (
          <div className='border-b border-black my-12'></div>
        ) : (
          <>
            <div className='border-b border-transparent my-12'></div>
            <ButtonText
              text='All articles'
              image='arrow-right-line'
              imageSide='right'
            />
          </>
        )}
      </>
    );
  });
}
