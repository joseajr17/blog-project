import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkDownSafeProps = {
  markDown: string;
}

export function MarkDownSafe({ markDown }: MarkDownSafeProps) {
  return (
    <div className='prose prose-slate dark:prose-invert w-full max-w-none overflow-hidden prose-a:text-blue-500 
    prose-a:no-underline prose-a:hover:text-blue-700 prose-a:hover:underline prose-a:transition
    prose-img:mx-auto prose-img:rounded-lg md:prose-lg
    '>
      <ReactMarkdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children)
              return '';

            return (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[500px]' {...props} />
              </div>
            );
          }
        }}
      >
        {markDown}
      </ReactMarkdown>
    </div>
  );
}