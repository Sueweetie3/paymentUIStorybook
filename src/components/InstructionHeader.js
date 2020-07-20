import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './InstructionHeader.module.scss';

const InstructionHeader = (props: PropTypes) => {
  const {headerText, isOpen} = props;
  return (
    <div className={styles.header}>
      <div className={styles.title}>{headerText}</div>
      {isOpen ? (
        <div className={styles.icon}>
          <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11">
            <path
              stroke="none"
              d="m11 8.5c0-.1 0-.2-.1-.3l-5-6c-.1-.1-.3-.2-.4-.2s-.3.1-.4.2l-5 6c-.2.2-.1.5.1.7s.5.1.7-.1l4.6-5.5 4.6 5.5c.2.2.5.2.7.1.1-.1.2-.3.2-.4z"
            />
          </svg>
        </div>
      ) : (
        <div className={styles.icon}>
          <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11">
            <path
              stroke="none"
              d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default InstructionHeader;
