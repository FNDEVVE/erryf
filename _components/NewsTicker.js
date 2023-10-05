export default function NewsTicker({ variant, text }) {
  return (
    <div
      className={`flex bg-black text-white mt-6 lg:mt-12 mb-4 md:mb-12 lg:mb-16 gap-6 w-full overflow-hidden ${
        variant == 1 ? 'p-5' : 'py-5'
      }`}
    >
      {variant == 1 ? (
        <>
          <h3 className='font-medium md:text-[22px] md:font-semibold uppercase whitespace-nowrap'>
            News Ticker+++
          </h3>
          <div className='flex gap-6 grow items-center'>
            <h4 className='text-sm md:text-base lg:text-xl font-light lg:font-normal whitespace-nowrap'>
              {text}
            </h4>
            <h4 className='text-sm md:text-base lg:text-xl font-light lg:font-normal whitespace-nowrap'>
              {text}
            </h4>
            <h4 className='text-sm md:text-base lg:text-xl font-light lg:font-normal whitespace-nowrap'>
              {text}
            </h4>
          </div>
        </>
      ) : (
        <div className='flex gap-6 grow'>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>{' '}
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>{' '}
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
          <h4 className='text-[22px] font-semibold uppercase whitespace-nowrap'>
            {text}
          </h4>
        </div>
      )}
    </div>
  );
}
