// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentDueTime.module.scss';

function PaymentDueTime(props: PaymentDueTimeComponent) {
  const { label, remaining_time, due_date, platform } = props;
  return (
    <div className={styles[`${platform}PaymentDueTime`]}>
      <div className={styles.label}>{label}</div>
      <div className={styles.time}>
        <div className={styles.countDown}>{remaining_time}</div>
        <div className={styles.dueDate}>{`Due On: ${due_date}`}</div>
      </div>
    </div>
  );
}

PaymentDueTime.propTypes = {
  /** timestamp, to be used to show human readable date and time in format 01 Jan 2020 14:02 */
  due_date: PropTypes.number.isRequired,
  /** in seconds, to be sued to show countdown timer in format 23h 4m 6s */
  countdown_start: PropTypes.number.isRequired,
  /** e.g. label_payment_due_time */
  label: PropTypes.string.isRequired,
  /** e.g. label_due_on for static text Due on: */
  text_due_on: PropTypes.string.isRequired,
}

export default PaymentDueTime;
