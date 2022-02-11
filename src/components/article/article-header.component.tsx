import React from 'react';
import classnames from 'classnames';
import isString from '../../utilities';
import styles from './article.module.scss';

interface ArticleHeaderProps {
  children: React.ReactNode;
}

export default function ArticleHeader({
  children,
}: ArticleHeaderProps): React.ReactElement<ArticleHeaderProps> {
  return (
    <div
      className={classnames(
        'd-flex justify-content-center align-items-center p-2 bg-white shadow-sm',
        styles.articleHeader
      )}
    >
      {isString(children) ? (
        <h2 className="text-uppercase m-0">{children}</h2>
      ) : (
        children
      )}
    </div>
  );
}
