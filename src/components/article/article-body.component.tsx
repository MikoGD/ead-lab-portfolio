import React from 'react';
import classnames from 'classnames';
import { isString } from '../../utilities';

interface ArticleBodyProps {
  children: React.ReactNode;
  classNames?: string;
}

export default function ArticleBody({
  children,
  classNames,
}: ArticleBodyProps): React.ReactElement {
  return (
    <div className={classnames('bg-white p-4', classNames)}>
      {isString(children) ? <p>{children}</p> : children}
    </div>
  );
}
