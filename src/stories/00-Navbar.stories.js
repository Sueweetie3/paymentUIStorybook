import React from 'react';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import Navbar from '../components/Navbar';
import styles from './stories.module.scss';

export default {
  title: 'Navbar',
  component: Navbar,
  excludeStories: /.*Data$/,
};

export const buttonListActionsData = {
  handleActionConfig: action('handleBackConfig'),
};

const NavbarWithKnobs = (props) => (
  <Navbar
    title={text('Navbar Title', 'Payment')}
    {...buttonListActionsData}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <NavbarWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <NavbarWithKnobs platform="rw" />
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
