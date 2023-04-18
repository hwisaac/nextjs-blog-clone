import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = { content: string };

export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
