import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  strong: (props) => (
    <strong className='text-xl font-medium leading-[36px]'>
      {props.children}
    </strong>
  ),
  p: (props) => <p className='leading-relaxed mb-4'>{props.children}</p>,
  blockquote: (props) => (
    <blockquote className='pt-4 my-4 border-y border-black text-3xl font-semibold'>
      <div className='flex'>
        <h4 className='text-3xl font-semibold mr-6'>“</h4>
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
