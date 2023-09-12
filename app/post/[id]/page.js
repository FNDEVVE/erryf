import Link from 'next/link';
import Image from 'next/image';

import ButtonText from '@/_components/ButtonText';
import RoundedButton from '@/_components/RoundedButton';
import GoBack from '@/_components/GoBack';
import ArticlesGrid from '@/_components/ArticlesGrid';
import { getPost, getMonthName, getAuthor, getPosts } from '@/_components/util';

import { MDX } from '@/_components/MDX';

export default async function PostPage({ params }) {
  let post = await getPost({ url: params.id });
  post = post.data[0].attributes;
  let author = await getAuthor({
    username: post.users_permissions_user.data.attributes.username,
  });
  author = author[0];
  let D = new Date(post.updatedAt);
  let selectedPosts = await getPosts();
  selectedPosts = selectedPosts.data.filter(
    (p) => p.attributes.url != post.url
  );
  selectedPosts = selectedPosts.splice(0, 3);
  return (
    <>
      <GoBack text={'Magazine'} />
      <div className='grid grid-cols-2 gap-24 mb-12'>
        <h1 className='text-7xl font-semibold uppercase leading-[114.4px] mb-8'>
          {post.title}
        </h1>
        <p className='text-xl font-medium leading-[36px]'>{post.excerpt}</p>
      </div>
      <div className='flex justify-between mb-8'>
        <div className='flex gap-6 text-[14px]'>
          <p>
            <span className='font-semibold'>Text </span>
            <Link href={`/authors/${author.url}`}>
              <span className='underline'>
                {author.firstname} {author.lastname}
              </span>
            </Link>
          </p>
          <p>
            <span className='font-semibold'>Date </span>
            {`${D.getDate()}. ${getMonthName(D.getMonth())} ${D.getFullYear()}`}
          </p>
          <p>
            <span className='font-semibold'>Duration </span>
            {post.content.length} characters
          </p>
        </div>
        <RoundedButton text={post.tag} />
      </div>
      <div className='relative w-full aspect-[1.5] mb-24'>
        <Image
          src={`http://127.0.0.1:1337${post.featuredimage.data.attributes.url}`}
          alt={post.title}
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='w-2/3 mx-auto grid grid-cols-3 gap-16 mb-48'>
        <div>
          <div className='flex items-center pb-8 border-b mb-4 border-black'>
            <div className='w-20 aspect-square'>
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
            <h3 className='font-semibold text-[32px] ml-4 leading-[38.4px]'>
              {author.firstname} {author.lastname}
            </h3>
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Date</h6>
            <h6>{`${D.getDate()}. ${getMonthName(
              D.getMonth()
            )} ${D.getFullYear()}`}</h6>
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Duration</h6>
            <h6>{post.content.length} characters</h6>
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Share</h6>
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
          <MDX source={post.content} />
        </div>
      </div>
      <div className='mb-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold leading-[114.4px] text-7xl uppercase'>
          Latest posts
        </h1>
        <Link href={`/magazine`}>
          <ButtonText
            text='See all'
            image='arrow-right-line'
            imageSide='right'
          />
        </Link>
      </div>
      <ArticlesGrid articles={selectedPosts} useData={false} />
    </>
  );
}
