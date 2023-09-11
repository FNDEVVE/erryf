import Image from 'next/image';
import ButtonText from './ButtonText';

export default function ArticlesList({ articles }) {
  return articles.map((post, i) => {
    return (
      <>
        <div key={i} className='flex h-60'>
          <div className='absolute w-60 h-60'>
            <div className='relative w-full h-full'>
              <Image
                src={post.image}
                alt='Art & Life'
                fill
                sizes='25vw'
                className='object-cover'
              />
            </div>
          </div>
          <div className='ml-72 flex flex-col justify-between'>
            <div>
              <h3 className='text-[32px] font-semibold mb-3'>{post.title}</h3>
              <p className='leading-[28.8px]'>{post.excerpt}</p>
            </div>
            <div className='flex gap-6 text-[14px]'>
              <p>
                <span className='font-semibold'>Text</span> {post.author}
              </p>
              <p>
                <span className='font-semibold'>Date</span> {post.date}
              </p>
              <p>
                <span className='font-semibold'>Duration</span> {post.read}
              </p>
            </div>
          </div>
        </div>
        {i != articles.length - 1 ? (
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
