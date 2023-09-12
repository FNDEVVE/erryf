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
          <div
            key={i}
            className='flex justify-between my-12 pb-12 border-b border-black last:border-b-0 last:mb-0 last:pb-0 first:mt-24'
          >
            <div className='flex items-center'>
              <div className='aspect-square w-40 mr-12'>
                <div className='relative w-full h-full grayscale'>
                  <Image
                    src={`http://127.0.0.1:1337${author.avatar.formats.small.url}`}
                    alt={`${author.firstname} ${author.lastname}`}
                    fill
                    sizes='25vw'
                    className='object-cover rounded-full'
                  />
                </div>
              </div>
              <h5 className='font-semibold text-[32px]'>
                {author.firstname} {author.lastname}
              </h5>
            </div>
            <div className='flex items-center gap-24'>
              <p>
                <span className='font-semibold'>Job </span>
                {author.job}
              </p>
              <p>
                <span className='font-semibold'>City </span>
                {author.city}
              </p>
              <p>
                <span className='font-semibold'>Articles </span>
                {authorPosts.length}
              </p>
              <Link href={`/authors/${author.username}`}>
                <ButtonText
                  text='About'
                  image='arrow-right-line'
                  imageSide='right'
                />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
