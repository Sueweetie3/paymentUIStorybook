// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './TotalAmount.module.scss';

const TotalAmount = (props) => {
  const { label, displayValue, platform } = props;
  return (
    <div className={styles[`${platform}TotalAmount`]}>
      <div className={styles.label}>{label}</div>
      <div className={styles.amount}>{displayValue}</div>
    </div>
  );
};

TotalAmount.propTypes = {
  /** Amount inflated by 10^5 */
  amount: PropTypes.number.isRequired,
  /** "IDR", "BRL", etc. */
  currency: PropTypes.string.isRequired,
  /** e.g. label_display_amount */
  label: PropTypes.string.isRequired,
}

export default TotalAmount;
