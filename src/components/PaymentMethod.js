// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentMethod.module.scss';

function PaymentMethod(props) {
  const {label, value, icon, platform} = props;
  return (
    <div className={styles[`${platform}PaymentMethod`]}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>
        <img className={styles.icon} src={icon} alt={`Icon for ${label}`} />
        <span className={styles.valueText}>{value}</span>
      </div>
    </div>
  );
}
PaymentMethod.propTypes = {
  /** payment method name e.g. Online Banking */
  value: PropTypes.string.isRequired,
  /** Icon url */
  icon: PropTypes.string.isRequired,
  /** e.g. label_payment_method */
  label: PropTypes.string.isRequired,
};

export default PaymentMethod;
