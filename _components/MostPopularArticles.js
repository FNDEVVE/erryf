export default function MostPopularArticles({ articles }) {
  articles = articles.data.slice(0, 3);
  console.log(articles);
  return (
    <div className='mt-2'>
      {articles.map((article, i) => {
        return (
          <div
            key={i}
            className='flex py-6 border-b last:border-b-0 border-black'
          >
            <h5 className='font-semibold text-2xl w-12 mr-4'>
              {String(i + 1).padStart(2, '0')}
            </h5>
            <div>
              <h5 className='font-semibold text-2xl'>
                {article.attributes.title}
              </h5>
              <p className='text-sm mt-4'>
                <span className='font-semibold'>Text </span>
                {
                  article.attributes.users_permissions_user.data.attributes
                    .firstname
                }{' '}
                {
                  article.attributes.users_permissions_user.data.attributes
                    .lastname
                }
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
