import { addons } from '@storybook/addons';

import { create } from '@storybook/theming/create';
const paymentUITheme = create({
    base: 'light',
  
    colorPrimary: '#ee4d2d',
    colorSecondary: '#ee4d2d',
  
    // UI
    appBg: 'white',
    appContentBg: 'silver',
    inputBg: 'silver',
    inputBorder: '#333',

    brandTitle: 'Payment UI storybook',
    brandUrl: 'https://shopee.sg',
    brandImage: 'https://cf.shopee.co.id/file/cd5f61ccba8280c771f2bf938aa95c0b',
  });

addons.setConfig({
  theme: paymentUITheme,
  enableShortcuts: false,
});