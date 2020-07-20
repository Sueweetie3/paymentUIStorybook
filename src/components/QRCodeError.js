// @flow
import * as React from 'react';
import RefreshButton from './RefreshButton';
import PropTypes from 'prop-types';
import styles from './QRCodeError.module.scss';

const QRCodeError = (props) => {
  const {
    label_title: labelTitle,
    label_message: labelMessage,
    label_refresh_button: labelRefreshButton,
    handleOnRefresh
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.statusTitle}>{labelTitle}</div>
      <div className={styles.statusMessage}>{labelMessage}</div>
      <RefreshButton
        className={styles.refreshButton}
        label={labelRefreshButton}
        handleOnRefresh={handleOnRefresh}
      />
    </div>
  );
};

QRCodeError.propTypes = {
  /** Error to be pushed to the BI side */
  error: PropTypes.string.isRequired,
  /** Labels to be shown on top of the QR box if the payment status is changed */
  label_title: PropTypes.string.isRequired,
  /** Labels to be shown on top of the QR box if the payment status is changed */
  label_message: PropTypes.string.isRequired,
  /** Label of the refresh button */
  label_refresh_button: PropTypes.string.isRequired,
};

export default QRCodeError;
