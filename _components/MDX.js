import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  strong: (props) => (
    <strong className='text-lg font-medium leading-[36px] md:text-xl'>
      {props.children}
    </strong>
  ),
  p: (props) => <p className='mb-4 leading-relaxed'>{props.children}</p>,
  blockquote: (props) => (
    <blockquote className='my-4 border-y border-black pt-4 text-2xl font-semibold md:text-3xl'>
      <div className='flex'>
        <h4 className='mr-6 text-2xl font-semibold md:text-3xl'>“</h4>
        {props.children}
      </div>
    </blockquote>
  ),
};

export function MDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
