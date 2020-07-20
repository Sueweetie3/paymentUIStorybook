import React from 'react';
import {text} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import TotalAmount from '../components/TotalAmount';
import styles from './stories.module.scss';

export default {
  title: 'TotalAmount',
  component: TotalAmount,
  excludeStories: /.*Data$/,
};

const TotalAmountWithKnobs = (props) => (
  <TotalAmount
    label={text('Label', 'Total Payment')}
    displayValue={text('Display Value(decided by currency and amount)', 'Rp 300.000')}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <TotalAmountWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <TotalAmountWithKnobs platform="rw" />
  </div>
);

PC.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/EifHCVZrwvbYuNADNbuRsf/Virtual-Account?node-id=872%3A9905',
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
        'https://www.figma.com/file/EifHCVZrwvbYuNADNbuRsf/Virtual-Account?node-id=63%3A279',
    },
  },
};
