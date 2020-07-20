import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentCode.module.scss';

const PaymentCode = (props) => {
  const {method, label, icon, code, platform} = props;

  return (
    <div className={styles[`${platform}PaymentCode`]}>
      <div className={styles.method}>
        <div className={styles.methodIcon}>
          <img src={icon} alt={`Icon for ${method}`}/>
        </div>
        <div className={styles.methodName}>{method}</div>
      </div>
      <div className={styles.code}>
        <div className={styles.codeLabel}>{label}</div>
        <div className={styles.codeString}>{code}</div>
      </div>
    </div>
  );
};

PaymentCode.propTypes = {
  /** e.g. Indomaret/Isaku , Pay at shopname */
  method: PropTypes.string.isRequired,
  /** icon url */
  icon: PropTypes.string.isRequired,
  /** payment code/VA number/phone number etc. */
  code: PropTypes.string.isRequired,
  /** e.g. label_payment_code */
  label: PropTypes.string.isRequired,
}

export default PaymentCode;
