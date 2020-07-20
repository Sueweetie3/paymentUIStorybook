import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './BankAccount.module.scss';

const insertSpaceIntoAccountNumber = (accountNumber) => {
  if (!accountNumber) return '';
  const numberArrays = accountNumber.match(/.{1,4}/g);
  if (!numberArrays) return '';
  return numberArrays.join(' ');
};

const BankAccount = (props) => {
  const {
    bank_name: bankName,
    bank_icon: bankIcon,
    account_number: accountNumber,
    allow_copy: allowCopy,
    extra_labels: infoText,
    label_account_number,
    handleCopyText,
    platform,
  } = props;

  const split_account_number = React.useMemo(() => {
    return insertSpaceIntoAccountNumber(accountNumber);
  }, [accountNumber]);

  return (
    <div className={styles[`${platform}BankAccount`]}>
      <div className={styles.title}>
        <div className={styles.bankIcon}>
          <img src={bankIcon} alt={`Icon for ${bankName}`}/>
        </div>
        <div className={styles.bankName}>{bankName}</div>
      </div>
      <div className={styles.number}>
        <div className={styles.numberLabel}>{label_account_number}</div>
        <div className={styles.numberMain}>
          <div className={styles.accountNumber}>{split_account_number}</div>
          {allowCopy && (
            <div
              className={styles.allowCopy}
              onClick={() => handleCopyText(accountNumber)}
            >
              COPY
            </div>
          )}
        </div>
      </div>
      <div className={styles.text}>
        {infoText && <div className={styles.highlightText}>{infoText[0]}</div>}
        {infoText &&
          infoText.slice(1).map((text, i) => (
            <div className={styles.normalText} key={i}>
              {text}
            </div>
          ))}
      </div>
    </div>
  );
};

BankAccount.propTypes = {
  /** Bank account number */
  account_number: PropTypes.string.isRequired,
  /** If true, show the COPY button and allow copy */
  allow_copy: PropTypes.bool.isRequired,
  /** e.g. label_shopee_bank_account */
  bank_name: PropTypes.string.isRequired,
  /** Image path */
  bank_icon: PropTypes.string.isRequired,
  /** Bank account code */
  bank_code: PropTypes.string,
  /** Additional labels to displayed on the bottom */
  extra_labels: PropTypes.arrayOf(PropTypes.string),
};

export default BankAccount;
