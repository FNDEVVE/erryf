import RoundedButton from './RoundedButton';

export default function CategoriesButtons({ articles }) {
  let categories = ['All'];
  articles.data.map((art) => {
    categories.push(art.attributes.tag);
  });
  categories = [...new Set(categories)];
  return (
    <>
      {categories.map((cat, i) => {
        return <RoundedButton key={i} text={cat} />;
      })}
    </>
  );
}
