import * as React from 'react';
import cx from 'classnames';
import RefreshButton from './RefreshButton';
import PropTypes from 'prop-types';
import styles from './QRCode.module.scss';

const PAYMENT_STATUS = Object.freeze({
  SUCCESS: 1,
  FAILED: 2,
  PENDING: 3,
  EXPIRED: 4,
});

const QRCode = (props: Props) => {
  const {
    status_config: statusLabels,
    label_description: labelDescription,
    qr_code: qrCodePath,
    payment_logo: paymentLogoPath,
    label_refresh_button: labelRefreshButton,
    payment_status: paymentStatus,
    handleOnRefresh,
  } = props;
  

  const statusObject = React.useMemo(() => {
    const currentStatus = statusLabels.find(statusObject => {
      return statusObject.payment_status === paymentStatus;
    });
    return currentStatus;
  }, [paymentStatus, statusLabels]);

  const showGreyQRCode = React.useMemo(() => {
    return paymentStatus !== PAYMENT_STATUS.PENDING;
  }, [paymentStatus]);

  const showRefreshButton = React.useMemo(() => {
    return (
      paymentStatus === PAYMENT_STATUS.EXPIRED ||
      paymentStatus === PAYMENT_STATUS.FAILED
    );
  }, [paymentStatus]);

  const showSuccessTick = React.useMemo(() => {
    return paymentStatus === PAYMENT_STATUS.SUCCESS;
  }, [paymentStatus]);

  return (
    <div className={styles.container}>
      {statusObject && (
        <React.Fragment>
          <div
            className={cx(
              styles.statusTitle,
              showSuccessTick && styles.successTitle,
              showRefreshButton && styles.failedTitile
            )}
          >
            {statusObject.label_title}
          </div>
          <div className={styles.statusMessage}>
            {statusObject.label_message}
          </div>
        </React.Fragment>
      )}
      {qrCodePath && (
        <div className={styles.qrCodeContainer}>
          <img
            className={cx(styles.qrCode, showGreyQRCode && styles.greyQRCode)}
            src={`data:image/gif;base64,${qrCodePath}`}
            alt="payment qr code"
          />
          {showRefreshButton && (
              <RefreshButton
                className={styles.refreshButton}
                handleOnRefresh={handleOnRefresh}
                label={labelRefreshButton}
              />
          )}
          {showSuccessTick && (
            <div className={styles.successTick}>
              <svg viewBox="0 0 46 33" fill="none">
                <path
                  d="M16.8018 32.042C15.2559 32.042 13.7109 31.4541 12.5352 30.2773L1.39551 19.1377C-0.129883 17.6123 -0.129883 15.1387 1.39551 13.6133C2.9209 12.0879 5.39453 12.0879 6.91992 13.6133L16.8027 23.4961L39.1006 1.19824C40.626 -0.327148 43.0996 -0.327148 44.625 1.19824C46.1504 2.72363 46.1504 5.19727 44.625 6.72266L21.0693 30.2773C19.8926 31.4531 18.3467 32.042 16.8018 32.042Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      )}
      {labelDescription && (
        <div className={styles.description}>{labelDescription}</div>
      )}
      {paymentLogoPath && (
        <img className={styles.paymentLogo} src={paymentLogoPath} alt='Icon for WechatPay' />
      )}
    </div>
  );
};

QRCode.propTypes = {
  /** This is the labels to be shown on top of the QR box if the payment status is changed */
  status_config: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Label to be shown below the QR */
  label_description: PropTypes.string,
  /** QR code png encoded in base64 */
  qr_code: PropTypes.string.isRequired,
  /** URL of the payment_logo image */
  payment_logo: PropTypes.string.isRequired,
  /** e.g. label_display_amount */
  label_refresh_button: PropTypes.string.isRequired,
  /** In seconds, After expiry_time seconds (by default 15 minutes), FE will expire the QR. Default 180s */
  expiry_time: PropTypes.number,
  /** In seconds, This indicates how long is the period between each of the poll call made by FE. Default 5s. */
  polling_time: PropTypes.number,
}

export default QRCode;