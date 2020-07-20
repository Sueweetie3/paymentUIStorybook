import React from 'react';
import {text} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import ChannelMessage from '../components/ChannelMessage';
import styles from './stories.module.scss';

export default {
  title: 'ChannelMessage',
  component: ChannelMessage,
  excludeStories: /.*Data$/,
};

const ChannelMessageWithKnobs = (props) => (
  <ChannelMessage
    text={text('Channel Message', 'ATTENTION: Virtual Account Number for ShopeePay top up and item purchase is different.')}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <ChannelMessageWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <ChannelMessageWithKnobs platform="rw" />
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
