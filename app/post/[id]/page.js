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
      <div className='grid grid-cols-2 gap-24 mb-12'>
        <h1 className='BIGTEXT font-semibold uppercase mb-8'>{post.title}</h1>
        <p className='text-xl font-medium leading-[36px]'>{post.excerpt}</p>
      </div>
      <div className='flex justify-between mb-8'>
        <div className='flex gap-6 text-[14px]'>
          <p>
            <span className='font-semibold'>Text </span>
            <Link href={`/authors/${author.username}`}>
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
            <Characters c={post.content.length} />
          </p>
        </div>
        <RoundedButton text={post.tag} />
      </div>
      <div className='relative w-full aspect-[1.5] mb-24'>
        <Image
          src={post.featuredimage.data.attributes.url}
          alt={post.title}
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='w-2/3 mx-auto grid grid-cols-3 gap-16 mb-48'>
        <div>
          <Link href={`/authors/${author.username}`}>
            <div className='flex items-center pb-8 border-b mb-4 border-black'>
              <div className='w-20 aspect-square'>
                <div className='relative w-full h-full'>
                  <Image
                    src={author.avatar.formats.small.url}
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
          </Link>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Date</h6>
            <h6>{`${D.getDate()}. ${getMonthName(
              D.getMonth()
            )} ${D.getFullYear()}`}</h6>
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Duration</h6>
            <h6>
              <Characters c={post.content.length} />
            </h6>
          </div>
          <div className='flex justify-between mt-4'>
            <h6 className='font-semibold'>Share</h6>
            <ThreeSocials />
          </div>
        </div>
        <div className='col-span-2'>
          <MDX source={post.content} />
        </div>
      </div>
      <div className='mb-24 pt-12 border-t border-black flex items-center justify-between'>
        <h1 className='font-semibold BIGTEXT uppercase'>Latest posts</h1>
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
