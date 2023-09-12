import RoundedButton from './RoundedButton';

export default async function CategoriesButtons({ articles }) {
  let categories = ['all'];
  articles.data.map((art) => {
    categories.push(art.attributes.tag);
  });
  categories = [...new Set(categories)];
  return (
    <>
      {categories.map((cat, i) => {
        return (
          <RoundedButton
            key={i}
            text={cat}
            active={cat == 'all' ? true : false}
          />
        );
      })}
    </>
  );
}
