export default function RoundedButton({ text }) {
  return (
    <button
      type='button'
      className='p-2 rounded-full border border-black text-xs uppercase'
    >
      {text != 'All' ? `#${text}` : 'All'}
    </button>
  );
}
