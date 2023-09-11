import ButtonText from '@/_components/ButtonText';
import { getAuthor } from '@/_components/util';

export default async function AuthorPage({ params }) {
  let author = await getAuthor({ username: params.id });
  author = author[0];
  return (
    <>
      <div className='flex justify-between mb-24'>
        <ButtonText text='Go back' image='arrow-left-line' imageSide='left' />
        <h5 className='text-[32px] font-semibold uppercase'>Author</h5>
      </div>
      <div className='mx-60 mb-40'>
        <div className='grid grid-cols-3 gap-24'>
          <div className='bg-orange-500'>a</div>
          <div className='col-span-2'>
            <h1 className='text-7xl font-semibold uppercase leading-[114.px] mb-8'>
              {author.firstname} {author.lastname}
            </h1>
            <p className='text-[22px] leading-[39.6px] font-medium mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui
              vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>
            <p className='leading-[28.8px]'>
              Porttitor rhoncus dolor purus non enim praesent elementum. Eget
              dolor morbi non arcu risus quis varius. Posuere ac ut consequat
              semper viverra nam libero. In ornare quam viverra orci sagittis
              eu. Tristique risus nec feugiat in fermentum posuere urna nec.
              Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras
              semper auctor neque vitae tempus quam pellentesque. Sollicitudin
              ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed
              egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Sit amet porttitor eget dolor morbi non arcu risus.
              Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet
              luctus venenatis lectus magna fringilla. Neque vitae tempus quam
              pellentesque nec nam.
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-black pt-12'>
        <h2 className='text-7xl font-semibold'>
          Articles by {author.firstname} {author.lastname}
        </h2>
      </div>
    </>
  );
}
