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
            <div className='flex justify-between my-12 pb-12 border-b border-black'>
              <div className='flex items-center'>
                <div className='aspect-square w-32 lg:w-40 mr-4 lg:mr-12'>
                  <div className='relative w-full h-full grayscale'>
                    <Image
                      src={author.avatar.formats.small.url}
                      alt={`${author.firstname} ${author.lastname}`}
                      fill
                      sizes='25vw'
                      className='object-cover rounded-full'
                    />
                  </div>
                </div>
                <h5 className='font-semibold text-2xl lg:text-[32px]'>
                  {author.firstname} {author.lastname}
                </h5>
              </div>
              <div className='flex items-center gap-8 lg:gap-24 text-sm lg:text-base'>
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
