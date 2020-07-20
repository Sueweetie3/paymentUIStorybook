import React from 'react';
import {action} from '@storybook/addon-actions';
import {text, boolean, array} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import BankAccount from '../components/BankAccount';
import styles from './stories.module.scss';

export default {
  title: 'BankAccount',
  component: BankAccount,
  excludeStories: /.*Data$/,
};

export const bankAccountData = {
  label_account_number: 'Account Number:',
};

export const bankAccountActionsData = {
  handleCopyText: action('copyText'),
};

const BankAccountWithKnobs = (props) => (
  <BankAccount
    {...bankAccountData}
    {...bankAccountActionsData}
    account_number={text('Account Number', '8086005300000307')}
    bank_name={text('Bank Name', 'Bank BRI (Virtual Account)')}
    bank_icon={text(
      'Bank Icon Src',
      'https://cf.shopee.co.id/file/b18d8b4fff42c4db820b085f3a21becc'
    )}
    allow_copy={boolean('Allow Copy', true)}
    extra_labels={array('Extra Notes', [
      '10 minutes to verify payment',
      'To ensure Virtual Account number remains the same, please complete payment before creating another order with Virtual Account.',
      'Accepts transfers from Bank BRI only.',
    ])}
    {...props}
  />
);

export const PC = () => (
  <div className={styles.pcContainer}>
    <BankAccountWithKnobs platform="pc" />
  </div>
);

export const RW = () => (
  <div className={styles.rwContainer}>
    <BankAccountWithKnobs platform="rw" />
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
