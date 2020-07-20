import React from 'react';
import {text} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import PaymentMethod from '../components/PaymentMethod';
import styles from './stories.module.scss';

export default {
  title: 'PaymentMethod',
  component: PaymentMethod,
  excludeStories: /.*Data$/,
};

const PaymentMethodWithKnobs = (props) => (
  <PaymentMethod
    value={text('Payment Method', 'Pay At FPT')}
    icon={text(
      'Icon src',
      'https://cf.shopee.co.id/file/ec623d01f30b3e660a6789fa117e358c'
    )}
    label={text('Label of Payment Method', 'Payment Method')}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <PaymentMethodWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <PaymentMethodWithKnobs platform="rw" />
  </div>
);

PC.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/owyoOfpwHtGowzZvgnsODt/OTC?node-id=79%3A559',
    },
  },
};

RW.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/owyoOfpwHtGowzZvgnsODt/OTC?node-id=79%3A432',
    },
  },
};
