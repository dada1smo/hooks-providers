'use client';

import { FunctionComponent, ReactNode } from 'react';

interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'table'
    | 'list'
    | 'inline-code'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted';
  content?: ReactNode;
  items?: ReactNode[];
}

const Typography: FunctionComponent<TypographyProps> = ({
  variant,
  content,
  items,
}) => {
  if (variant === 'h1') {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {content}
      </h1>
    );
  }

  if (variant === 'h2') {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-4">
        {content}
      </h2>
    );
  }

  if (variant === 'h3') {
    return (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {content}
      </h3>
    );
  }

  if (variant === 'p') {
    return (
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">{content}</p>
    );
  }

  if (variant === 'list' && items && items.length > 0) {
    return (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {items.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul>
    );
  }

  if (variant === 'inline-code') {
    return (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {content}
      </code>
    );
  }

  if (variant === 'muted') {
    return <p className="text-sm text-slate-600">{content}</p>;
  }
};

export default Typography;
