import * as React from 'react';

const Button = (props) => {
  const {
    button_label: buttonLabel,
    action_config: actionConfig,
    handleActionConfig,
  } = props;

  const handleClick = React.useCallback(() => {
    handleActionConfig(actionConfig || {action_type: 1});
  }, [actionConfig, handleActionConfig]);

  return <div onClick={handleClick}>{buttonLabel}</div>;
};

export default Button;
