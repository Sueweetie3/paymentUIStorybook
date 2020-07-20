import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, object} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import ButtonList from '../components/ButtonList';
import styles from './stories.module.scss';

export default {
  title: 'ButtonList',
  component: ButtonList,
  excludeStories: /.*Data$/,
};

export const buttonListActionsData = {
  handleActionConfig: action('handleActionConfig'),
};

const ButtonListWithKnobs = (props) => (
  <ButtonList
    {...buttonListActionsData}
    primary_button={object('Primary Button', {
      button_label: 'Ok',
    })}
    secondary_button={object('Secondary Button', {
      button_label: 'Change Payment Method',
    })}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <ButtonListWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <ButtonListWithKnobs platform="rw" />
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
