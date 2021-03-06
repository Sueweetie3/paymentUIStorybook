// @flow
import * as React from 'react';
import cx from 'classnames';
import styles from './RefreshButton.module.scss';

const RefreshButton = (props) => {
  const {
    handleOnRefresh,
    className,
    label,
  } = props;

  const handleRefresh = React.useCallback(() => {
    handleOnRefresh();
  }, [handleOnRefresh]);

  return (
    <div
      className={cx(styles.refreshButton, className)}
      onClick={handleRefresh}
    >
      <svg viewBox="0 0 16 16" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9381 1.2063C11.1122 0.832878 11.6379 0.818514 11.8322 1.18187L13.4038 4.12147C13.5609 4.41543 13.3919 4.77795 13.0657 4.84651L9.80363 5.53215C9.40042 5.6169 9.0735 5.20495 9.24763 4.83153L10.9381 1.2063Z"
          fill="#EE4D2D"
        />
        <path
          d="M12.4872 4.01685C11.3882 2.77957 9.78512 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14V14C11.3137 14 14 11.3137 14 8"
          stroke="#EE4D2D"
          strokeLinecap="round"
        />
      </svg>
      {label}
    </div>
  );
};

export default RefreshButton;