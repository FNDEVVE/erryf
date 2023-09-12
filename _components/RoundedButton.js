'use client';

export default function RoundedButton({ text, active = false }) {
  return (
    <button
      type='button'
      className={`${
        active ? 'clicked' : ''
      } p-2 rounded-full border border-black text-xs uppercase cursor-pointer hover:bg-black hover:text-white`}
    >
      {text != 'all' ? `#${text}` : 'all'}
    </button>
  );
}
