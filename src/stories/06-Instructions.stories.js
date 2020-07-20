import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, object} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import Instructions from '../components/Instructions';
import styles from './stories.module.scss';

export default {
  title: 'Instructions',
  component: Instructions,
  excludeStories: /.*Data$/,
};

export const instructionsActionsData = {
  handleToggle: action('toggleInstruction'),
};

const InstructionsWithKnobs = (props) => (
  <Instructions
    {...instructionsActionsData}
    header={text('Instruction Header', 'ATM')}
    instructions={object('Instructions', [
      {number: 1, text: 'Choose {{bold_text_other_menu}}.'},
      {
        number: 2,
        text:
          'Choose your from account and choose transfer destination to {{bold_text_bri_account}}.',
      },
      {
        number: 3,
        text:
          'Input account number {{orange_account_number}} and choose {{bold_text_correct}}.',
      },
      {
        number: 4,
        text: 'Enter transfer amount {{orange_amount}} and {{bold_text_correct}}.',
      },
      {
        number: 5,
        text:
          'Check the information on the screen. Ensure that Name is your shipping name in Shopee and amount is correct. If correct, choose {{bold_text_yes}}.',
      },
    ])}
    transifyData={object('Transify Data', {
      text_other_menu: 'Other Menu - Transfer',
      text_bri_account: 'BRI account',
      account_number: '9881916100329954',
      amount: 'Rp200.000',
      text_correct: 'Correct',
      text_yes: 'Yes',
    })}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <InstructionsWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <InstructionsWithKnobs platform="rw" />
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
