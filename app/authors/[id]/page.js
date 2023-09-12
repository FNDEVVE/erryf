import Image from 'next/image';
import Link from 'next/link';
import { getAuthor, getArticlesOf } from '@/_components/util';
import AuthorArticles from '@/_components/AuthorArticles';
import GoBack from '@/_components/GoBack';

export default async function AuthorPage({ params }) {
  let author = await getAuthor({ username: params.id });
  author = author[0];
  return (
    <>
      <GoBack text={'Author'} />
      <div className='mx-60 mb-40'>
        <div className='grid grid-cols-3 gap-24'>
          <div className=''>
            <div className='w-full aspect-square'>
              <div className='relative w-full h-full'>
                <Image
                  src={`http://127.0.0.1:1337${author.avatar.formats.medium.url}`}
                  alt={`${author.firstname} ${author.lastname}`}
                  fill
                  sizes='25vw'
                  className='object-cover grayscale rounded-full'
                />
              </div>
            </div>
            <div className='border-t border-black pt-8 mt-12 flex justify-between'>
              <h5 className='text-xl font-semibold uppercase'>Follow</h5>
              <div className='flex gap-3 items-center'>
                <Link href={'https://instagram.com'}>
                  <div className='relative w-5 h-5'>
                    <Image
                      src='/i/instagram-line.svg'
                      alt='Instagram'
                      fill
                      sizes='20px'
                      className='object-cover'
                    />
                  </div>
                </Link>
                <Link href={'https://x.com'}>
                  <div className='relative w-5 h-5'>
                    <Image
                      src='/i/twitter-x-line.svg'
                      alt='X'
                      fill
                      sizes='20px'
                      className='object-cover'
                    />
                  </div>
                </Link>
                <Link href={'https://youtube.com'}>
                  <div className='relative w-5 h-5'>
                    <Image
                      src='/i/youtube-fill.svg'
                      alt='YouTube'
                      fill
                      sizes='20px'
                      className='object-cover'
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='text-7xl font-semibold uppercase leading-[114.4px] mb-8'>
              {author.firstname} {author.lastname}
            </h1>
            <p className='text-[22px] leading-[39.6px] font-medium mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
              vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>
            <p className='leading-[28.8px]'>
              Porttitor rhoncus dolor purus non enim praesent elementum. Eget
              dolor morbi non arcu risus quis varius. Posuere ac ut consequat
              semper viverra nam libero. In ornare quam viverra orci sagittis
              eu. Tristique risus nec feugiat in fermentum posuere urna nec.
              Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras
              semper auctor neque vitae tempus quam pellentesque. Sollicitudin
              ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed
              egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Sit amet porttitor eget dolor morbi non arcu risus.
              Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet
              luctus venenatis lectus magna fringilla. Neque vitae tempus quam
              pellentesque nec nam.
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-black pt-12'>
        <h2 className='text-7xl font-semibold mb-24'>
          Articles by {author.firstname} {author.lastname}
        </h2>
        <div className='grid grid-cols-2 border-l border-black'>
          <AuthorArticles
            articles={await getArticlesOf({ username: params.id })}
          />
        </div>
      </div>
    </>
  );
}
