import classnames from 'classnames';
import React from 'react';

interface ArticleProps {
  header: React.ReactNode;
  body: React.ReactNode;
  classNames?: string;
}

export default function Article({
  header,
  body,
  classNames,
}: ArticleProps): React.ReactElement<ArticleProps> {
  return (
    <article className={classnames('w-75', classNames)}>
      {header}
      {body}
    </article>
  );
}
