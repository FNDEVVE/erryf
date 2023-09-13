import Link from 'next/link';
export default function MostPopularArticles({ articles }) {
  articles = articles.data.slice(0, 3);
  return (
    <div className='mt-2'>
      {articles.map((article, i) => {
        return (
          <div
            key={i}
            className='grid grid-cols-9 py-6 border-b gap-4 last:border-b-0 border-black'
          >
            <h5 className='font-semibold text-2xl'>
              {String(i + 1).padStart(2, '0')}
            </h5>
            <div className='col-span-8'>
              <Link href={`/post/${article.attributes.url}`}>
                <h5 className='font-semibold text-2xl'>
                  {article.attributes.title}
                </h5>
              </Link>
              <p className='text-sm mt-4'>
                <span className='font-semibold'>Text </span>
                <Link
                  href={`/authors/${article.attributes.users_permissions_user.data.attributes.username}`}
                >
                  <span className='underline'>
                    {
                      article.attributes.users_permissions_user.data.attributes
                        .firstname
                    }{' '}
                    {
                      article.attributes.users_permissions_user.data.attributes
                        .lastname
                    }
                  </span>
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
