import {addParameters} from '@storybook/react';
import {addDecorator} from '@storybook/react';

import {withKnobs} from '@storybook/addon-knobs';
import {withPropsTable} from 'storybook-addon-react-docgen';
import {withDesign} from 'storybook-addon-designs';

addDecorator(withKnobs);
addDecorator(withDesign);
addDecorator(withPropsTable);

addParameters({
  knobs: {
    timestamps: true,
    escapeHTML: true,
  },
});
