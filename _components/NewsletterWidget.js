import Button from './Button';

export default function NewsletterWidget() {
  return (
    <div className='bg-[#f8f8f8] p-8 mt-10'>
      <h6 className='font-semibold uppercase'>NEWSLETTER</h6>
      <h5 className='font-semibold text-[32px] mt-2 mb-4'>
        Design news to your inbox
      </h5>
      <input
        type='email'
        className='h-12 m-0 mr-3 w-full px-4'
        placeholder='Email'
      />
      <div className='text-right mt-3'>
        <Button text={'Sign up'} variant={2} />
      </div>
    </div>
  );
}
