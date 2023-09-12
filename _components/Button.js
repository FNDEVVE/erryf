export default function Button({ text, variant }) {
  return (
    <button
      type='button'
      className={`${
        variant == 1 ? 'bg-white text-black' : 'bg-black text-white'
      } uppercase text-[14px] font-medium px-6 h-12 m-0 cursor-pointer`}
    >
      {text}
    </button>
  );
}
