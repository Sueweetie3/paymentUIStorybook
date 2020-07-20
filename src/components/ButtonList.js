// @flow
import * as React from 'react';
import Button from './Button';

import styles from './ButtonList.module.scss';

const ButtonList = (props) => {
  const {
    primary_button,
    secondary_button,
    platform,
    handleActionConfig,
  } = props;
  return (
    <div className={styles[`${platform}ButtonList`]}>
      {primary_button && (
        <div className={styles.primaryButton}>
          <Button {...primary_button} handleActionConfig={handleActionConfig} />
        </div>
      )}
      {secondary_button && (
        <div className={styles.secondaryButton}>
          <Button
            {...secondary_button}
            handleActionConfig={handleActionConfig}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonList;
