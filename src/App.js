import React from 'react';
import Navbar from './components/Navbar';
import TotalAmount from './components/TotalAmount';
import ChannelMessage from './components/ChannelMessage';
import Instruction from './components/Instructions';
import PaymentCode from './components/PaymentCode';
import PaymentDueTime from './components/PaymentDueTime';
import QRCode from './components/QRCode';
import QRCodeError from './components/QRCodeError';
import PaymentMethod from './components/PaymentMethod';
import ButtonList from './components/ButtonList';

import './App.css';

const channelMessageData = {
  text:
    'ATTENTION: Virtual Account Number for ShopeePay top up and item purchase is different.',
};

const instructionData = {
  header: 'ATM',
  instructions: [
    {number: 1, text: 'Choose bolder_text_other_menu'},
    {
      number: 2,
      text:
        'Choose your from account and choose transfer destination to bold_text_bri_account.',
    },
    {
      number: 3,
      text:
        'Input account number orange_account_number and choose bold_text_correct.',
    },
    {
      number: 4,
      text: 'Enter transfer amount orange_amount and bold_text_correct.',
    },
    {
      number: 5,
      text:
        'Check the information on the screen. Ensure that Name is your shipping name in Shopee and amount is correct. If correct, choose bold_text_yes.',
    },
  ],
  transifyData: {
    text_other_menu: 'Other Menu > Transfer',
    text_bri_account: 'BRI account',
    account_number: '9881916100329954',
    amount: 'Rp200.000',
    text_correct: 'Correct',
    text_yes: 'Yes',
  },
};

const paymentCodeData = {
  method: 'Pay At FPT',
  icon: 'https://cf.shopee.co.id/file/ec623d01f30b3e660a6789fa117e358c',
  code: 'SHPZGL9896SDFGQ',
  label: 'Payment Code',
};

const totalAmountData = {
  label: 'Total Payment',
  displayValue: 'Rp 300.000',
};

const paymentDueTimeData = {
  label: 'Payment Within',
  remaining_time: '23 hr 59 m 15 s',
  due_date: '12 Feb 2010, 14:50',
};

const qrCodeData = {
  status_config: [
    {
      payment_status: 1,
      label_title: 'label_payment_success',
      label_message: '',
    },
    {
      payment_status: 2,
      label_title: 'label_payment_failed',
      label_message: 'msg_retry_after_refresh_qr',
    },
    {
      payment_status: 3,
      label_title: '',
      label_message: '',
    },
    {
      payment_status: 4,
      label_title: 'label_qr_expired',
      label_message: 'msg_retry_after_refresh_qr',
    },
  ],
  qr_code:
    'iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAACv0lEQVR42uyYMY7rMAxEx3ChUkfQTayLBbEDX0y+iY6gUoXg+Rh6k2wWv7cMhN16XxEK5HBIfOMbFwxHkluZ/A4EZgSgDtz0tVwIyIDbCjzLnEcyu+R2fcDYE0C6hMhHQWjKIyJyKzPXzgD96IEt6IFdYsLQIZD8xke5hRYQHN1WrwcALmHC3TfMbKGixjr8qaizgWfrKYs1t+BSndz/evNEwGIgy0yyoQVHbvWv1J0MuMzEXWVs+jCaPmAo+tARUGMFpmfrZaBGkrtvuA5gvZY8udsfI5mMv/ulJ0BTTEPNt9AwZv3bJb8/W68HwJHJ6WUXzBloqOAmMf7Vmx0AQJ0Qufg1A2NmMqWFXy8EIJjKRe5+5SIBSdy4lVeaXQDKI5ah3P2a56wil3/g4ykgPQCOFdz97smVDcxMkGDMfQFMOASBebSh5jYV+UvlOgAO02JDbc0SMURzYp8q1z1g4eUob2q8bH4S/sHWE3CMZj64mMmpqqFYZi79APK01msLZqtrjY8ayx1vg3E6IBFz5g19C0uwp94dueCG6wBKs07qTdww59GyrhPm9857PoCA6HbbcWw0Bxtq8I+XL+8AcHQ0s7hjzlrFSHkHvlqvBwChRnPmA9d807Yoz7OVobys2vmAHG2FZ7kfFZxdqgOT53uoXQCAKkSDefFLWELTxivH0xdgDsKzDGxQwSgpl36PtPOBn5OXtFeLuRStTratL/0AgBXAVu6HFwvAz4xrVwKCrUCbrQ+3QKpcLM3X+tABYDeQEsug4ZxHtZ682Pyu6vOB45okQTCVszst7QTa0A9gVW03jSXI5FQrEfxyQT0AdkyeNGpNxDSI3ceh5iqApYlRjRd4LBAfprcPwA41x3WRCZPWhzKXjgCrD+05K1dKLjR5zT32AxytR9lFynjXCLke+HYh4Bvf6Cr+BQAA//9Oshbf4yJM6gAAAABJRU5ErkJggg==',
  payment_logo: 'https://cf.shopee.co.id/file/3b04fc2cf1449ccb17a8242c4432922c',
  label_refresh_button: 'label_refresh_qr_code',
  payment_status: 3,
};

const qrCodeErrorData = {
  label_title: 'QR Code Error',
  label_message: 'An unexpected error occured. Please try again.',
  label_refresh_button: 'Refresh QR Code',
};

const paymentMethodData = {
  value: 'Pay At Shop',
  icon: 'https://cf.shopee.co.id/file/ec623d01f30b3e660a6789fa117e358c',
  label: 'Payment Method',
};

const buttonListData = {
  primary_button: {
    button_label: 'Ok',
    action_config: {
      action_type: 2,
      redirect_url:
        'https://test.shopee.co.id/buyer/payment/bridge_safe/callback/38028945308950/8005200/?action=backAction&paymentCode=12109405331047856587&paymentStatus=8',
    },
  },
  secondary_button: {
    button_label: 'Change Payment Method',
    action_config: {
      action_type: 2,
      redirect_url:
        'https://test.shopee.co.id/buyer/payment/bridge_safe/callback/38028945308950/8005200/?action=changeAction&paymentCode=12109405331047856587&paymentStatus=8',
    },
  },
};

const navbarData = {
  title: 'Payment',
  back_config: {
    action_type: 2,
    redirect_url:
      'https://test.shopee.co.id/buyer/payment/bridge_safe/callback/38028945308950/8005200/?action=changeAction&paymentCode=12109405331047856587&paymentStatus=8',
  },
};

function App() {
  return (
    <div className="App">
      <Navbar {...navbarData} platform="pc" />
      <ChannelMessage {...channelMessageData} platform="rw" />
      <Instruction {...instructionData} platform="rw" />
      <PaymentCode {...paymentCodeData} platform="rw" />
      <TotalAmount {...totalAmountData} platform="rw" />
      <PaymentDueTime {...paymentDueTimeData} platform="rw" />
      <QRCode {...qrCodeData} />
      <QRCodeError {...qrCodeErrorData} />
      <PaymentMethod {...paymentMethodData} platform="rw" />
      <ButtonList {...buttonListData} platform="pc" />
    </div>
  );
}

export default App;
