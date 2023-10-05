import Link from 'next/link';
import Image from 'next/image';

import ButtonText from '@/_components/ButtonText';
import RoundedButton from '@/_components/RoundedButton';
import GoBack from '@/_components/GoBack';
import ArticlesGrid from '@/_components/ArticlesGrid';
import Characters from '@/_components/Characters';
import { getPost, getMonthName, getAuthor, getPosts } from '@/_components/util';

import { MDX } from '@/_components/MDX';
import ThreeSocials from '@/_components/ThreeSocials';

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
      <div className='mb-6 grid grid-cols-1 md:mb-12 lg:grid-cols-2 lg:gap-24'>
        <h1 className='BIGTEXT mb-8 font-semibold uppercase'>{post.title}</h1>
        <p className='text-xl font-medium leading-[36px]'>{post.excerpt}</p>
      </div>
      <div className='mb-4 justify-between md:mb-8 md:flex'>
        <div className='gap-6 text-[14px] md:flex'>
          <p className='py-2 md:m-0 md:p-0'>
            <span className='font-semibold'>Text </span>
            <Link href={`/authors/${author.username}`}>
              <span className='underline'>
                {author.firstname} {author.lastname}
              </span>
            </Link>
          </p>
          <p className='py-2 md:m-0 md:p-0'>
            <span className='font-semibold'>Date </span>
            {`${D.getDate()}. ${getMonthName(D.getMonth())} ${D.getFullYear()}`}
          </p>
          <p className='py-2 md:m-0 md:p-0'>
            <span className='font-semibold'>Read </span>
            <Characters c={post.content.length} />
          </p>
        </div>
        <div className='py-2 md:m-0 md:p-0'>
          <RoundedButton text={post.tag} />
        </div>
      </div>
      <div className='relative mb-12 aspect-[1.9] w-full lg:mb-24 lg:aspect-[1.5]'>
        <Image
          src={post.featuredimage.data.attributes.url}
          alt={post.title}
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='mx-auto mb-12 grid w-full grid-cols-1 md:mb-24 md:grid-cols-3 md:gap-8 lg:mb-48 lg:w-5/6 lg:gap-16 xl:w-2/3'>
        <div className='order-2 mt-4 md:order-1 md:mt-0'>
          <Link href={`/authors/${author.username}`}>
            <div className='mb-4 flex items-center border-b border-black pb-4 md:pb-8'>
              <div className='aspect-square w-20 md:w-32'>
                <div className='relative h-full w-full'>
                  <Image
                    src={author.avatar.formats.small.url}
                    alt={`${author.firstname} ${author.lastname}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 25vw'
                    className='rounded-full object-cover grayscale'
                  />
                </div>
              </div>
              <h3 className='ml-4 text-2xl font-semibold leading-[38.4px] md:text-[32px]'>
                {author.firstname} {author.lastname}
              </h3>
            </div>
          </Link>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Date</h6>
            <h6>{`${D.getDate()}. ${getMonthName(
              D.getMonth()
            )} ${D.getFullYear()}`}</h6>
          </div>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Read</h6>
            <h6>
              <Characters c={post.content.length} />
            </h6>
          </div>
          <div className='mt-4 flex justify-between'>
            <h6 className='font-semibold'>Share</h6>
            <ThreeSocials />
          </div>
        </div>
        <div className='order-1 col-span-2 md:order-2'>
          <MDX source={post.content} />
        </div>
      </div>
      <div className='mb-12 flex items-center justify-between border-t border-black pt-12 md:mb-24'>
        <h1 className='BIGTEXT font-semibold uppercase'>Latest posts</h1>
        <Link href={`/magazine`}>
          <ButtonText
            text='See all'
            image='arrow-right-line'
            imageSide='right'
            showTextOnMobile={false}
          />
        </Link>
      </div>
      <ArticlesGrid articles={selectedPosts} useData={false} />
    </>
  );
}
