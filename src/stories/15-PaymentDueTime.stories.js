import React from 'react';
import {text} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import PaymentDueTime from '../components/PaymentDueTime';
import styles from './stories.module.scss';

export default {
  title: 'PaymentDueTime',
  component: PaymentDueTime,
  excludeStories: /.*Data$/,
};

const PaymentDueTimeWithKnobs = (props) => (
  <PaymentDueTime
    label={text('Label', 'Payment Within')}
    remaining_time={text('Remaining Time', '23 hr 59 m 15 s')}
    due_date={text('Due date', '12 Feb 2010, 14:50')}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <PaymentDueTimeWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <PaymentDueTimeWithKnobs platform="rw" />
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
