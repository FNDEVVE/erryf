import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  strong: (props) => (
    <strong className='text-xl font-medium leading-[36px]'>
      {props.children}
    </strong>
  ),
  p: (props) => <p className='leading-relaxed mb-6'>{props.children}</p>,
  blockquote: (props) => (
    <blockquote className='py-12 my-6 border-y border-black text-5xl font-semibold'>
      <div className='flex'>
        <h4 className='text-8xl font-semibold mr-6'>“</h4>
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
