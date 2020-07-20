import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, object, select} from '@storybook/addon-knobs';
import QRCode from '../components/QRCode';
import styles from './stories.module.scss';

export default {
  title: 'QRCode',
  component: QRCode,
  excludeStories: /.*Data$/,
};

export const qrCodeActionsData = {
  handleOnRefresh: action('refreshPage'),
};

const options = {
  SUCCESS: 1,
  FAILED: 2,
  PENDING: 3,
  EXPIRED: 4,
};

const QRCodeWithKnobs = (props) => (
  <QRCode
    status_config={object('Status Config', [
      {
        payment_status: 1,
        label_title: 'Payment Successful',
        label_message: '',
      },
      {
        payment_status: 2,
        label_title: 'Payment Failed',
        label_message: 'Please pay after refresh the QR Code.',
      },
      {
        payment_status: 3,
        label_title: '',
        label_message: '',
      },
      {
        payment_status: 4,
        label_title: 'QR Code Expired',
        label_message: 'Please pay after refresh the QR Code.',
      },
    ])}
    qr_code={text(
      'Base64 QRCode',
      'iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAACv0lEQVR42uyYMY7rMAxEx3ChUkfQTayLBbEDX0y+iY6gUoXg+Rh6k2wWv7cMhN16XxEK5HBIfOMbFwxHkluZ/A4EZgSgDtz0tVwIyIDbCjzLnEcyu+R2fcDYE0C6hMhHQWjKIyJyKzPXzgD96IEt6IFdYsLQIZD8xke5hRYQHN1WrwcALmHC3TfMbKGixjr8qaizgWfrKYs1t+BSndz/evNEwGIgy0yyoQVHbvWv1J0MuMzEXWVs+jCaPmAo+tARUGMFpmfrZaBGkrtvuA5gvZY8udsfI5mMv/ulJ0BTTEPNt9AwZv3bJb8/W68HwJHJ6WUXzBloqOAmMf7Vmx0AQJ0Qufg1A2NmMqWFXy8EIJjKRe5+5SIBSdy4lVeaXQDKI5ah3P2a56wil3/g4ykgPQCOFdz97smVDcxMkGDMfQFMOASBebSh5jYV+UvlOgAO02JDbc0SMURzYp8q1z1g4eUob2q8bH4S/sHWE3CMZj64mMmpqqFYZi79APK01msLZqtrjY8ayx1vg3E6IBFz5g19C0uwp94dueCG6wBKs07qTdww59GyrhPm9857PoCA6HbbcWw0Bxtq8I+XL+8AcHQ0s7hjzlrFSHkHvlqvBwChRnPmA9d807Yoz7OVobys2vmAHG2FZ7kfFZxdqgOT53uoXQCAKkSDefFLWELTxivH0xdgDsKzDGxQwSgpl36PtPOBn5OXtFeLuRStTratL/0AgBXAVu6HFwvAz4xrVwKCrUCbrQ+3QKpcLM3X+tABYDeQEsug4ZxHtZ682Pyu6vOB45okQTCVszst7QTa0A9gVW03jSXI5FQrEfxyQT0AdkyeNGpNxDSI3ceh5iqApYlRjRd4LBAfprcPwA41x3WRCZPWhzKXjgCrD+05K1dKLjR5zT32AxytR9lFynjXCLke+HYh4Bvf6Cr+BQAA//9Oshbf4yJM6gAAAABJRU5ErkJggg=='
    )}
    payment_logo={text(
      'Payment Logo Src',
      'https://cf.shopee.co.id/file/3b04fc2cf1449ccb17a8242c4432922c'
    )}
    label_refresh_button={text('Label Refresh Button', 'Refresh QR Code')}
    payment_status={select('Payment Status', options, 3)}
    {...qrCodeActionsData}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <QRCodeWithKnobs platform="pc" />
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
