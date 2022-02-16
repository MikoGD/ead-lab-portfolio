import React from 'react';
import { isString } from '../../utilities';

interface ArticleBodyProps {
  children: React.ReactNode;
}

export default function ArticleBody({
  children,
}: ArticleBodyProps): React.ReactElement {
  return (
    <div className="bg-white p-4">
      {isString(children) ? <p>{children}</p> : children}
    </div>
  );
}
