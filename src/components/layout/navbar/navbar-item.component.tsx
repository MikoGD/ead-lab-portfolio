import classnames from 'classnames';
import React from 'react';

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  currentPage?: boolean;
  classNames?: string;
}

function NavBarItem({
  href,
  children,
  classNames,
  currentPage = false,
}: NavBarItemProps): React.ReactElement<NavBarItemProps> {
  return (
    <li className="nav-item">
      {currentPage ? (
        <a
          className={classnames('nav-link active', classNames)}
          aria-current="page"
          href={href}
        >
          {children}
        </a>
      ) : (
        <a className={classnames('nav-link active', classNames)} href={href}>
          {children}
        </a>
      )}
    </li>
  );
}

export default NavBarItem;
