import Image from 'next/image';
import ButtonText from './ButtonText';
import Link from 'next/link';

export default function AllAuthors({ authors, posts }) {
  return (
    <>
      {authors.map((author, i) => {
        let authorPosts = posts.data.filter(
          (post) =>
            post.attributes.users_permissions_user.data.attributes.username ==
            author.username
        );
        return (
          <Link href={`/authors/${author.username}`} key={i}>
            <div className='my-12 flex justify-between border-b border-black pb-12'>
              <div className='flex items-center'>
                <div className='mr-4 aspect-square w-32 lg:mr-12 lg:w-40'>
                  <div className='relative h-full w-full grayscale'>
                    <Image
                      src={author.avatar.formats.small.url}
                      alt={`${author.firstname} ${author.lastname}`}
                      fill
                      sizes='(max-width: 768px) 100vw, 25vw'
                      className='rounded-full object-cover'
                    />
                  </div>
                </div>
                <h5 className='text-2xl font-semibold lg:text-[32px]'>
                  {author.firstname} {author.lastname}
                </h5>
              </div>
              <div className='flex items-center gap-8 text-sm lg:gap-24 lg:text-base'>
                <p>
                  <span className='font-semibold'>Job </span>
                  {author.job}
                </p>
                <p>
                  <span className='font-semibold'>City </span>
                  {author.city}
                </p>
                <p className='hidden lg:block'>
                  <span className='font-semibold'>Articles </span>
                  {authorPosts.length}
                </p>
                <ButtonText
                  text='About'
                  image='arrow-right-line'
                  imageSide='right'
                />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
