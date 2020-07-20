import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import QRCodeError from '../components/QRCodeError';
import styles from './stories.module.scss';

export default {
  title: 'QRCodeError',
  component: QRCodeError,
  excludeStories: /.*Data$/,
};

export const qrCodeErrorActionsData = {
  handleOnRefresh: action('refreshPage'),
};

const QRCodeErrorWithKnobs = (props) => (
  <QRCodeError
    label_title={text('Label Title', 'QR Code Error')}
    label_message={text(
      'Label Message',
      'An unexpected error occurred. Please try again later or change payment method.'
    )}
    label_refresh_button={text('Label Refresh Button', 'Refresh QR Code')}
    {...qrCodeErrorActionsData}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <QRCodeErrorWithKnobs platform="pc" />
  </div>
);

PC.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/oI1H59AsNkJictKWahnx7G/Wechat-integration?node-id=6%3A0',
    },
  },
};
