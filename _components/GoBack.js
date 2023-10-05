import ButtonText from './ButtonText';

export default function GoBack({ text }) {
  return (
    <div className='mb-12 flex justify-between'>
      <ButtonText
        text='Go back'
        image='arrow-left-line'
        imageSide='left'
        GB={true}
      />
      <h5 className='text-[32px] font-semibold uppercase'>{text}</h5>
    </div>
  );
}
