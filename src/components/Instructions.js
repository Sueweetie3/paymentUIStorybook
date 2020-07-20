import * as React from 'react';
import Dropdown from '../stardust/dropdown';
import InstructionHeader from './InstructionHeader';
import InstructionBody from './InstructionBody';

import PropTypes from 'prop-types';
import styles from './Instructions.module.scss';

const Instructions = props => {
  const {
    header: headerText,
    instructions,
    transifyData,
    handleToggle,
    platform,
  } = props;

  const [isOpen, setIsOpen] = React.useState(true);

  const header = React.useMemo(() => {
    return <InstructionHeader headerText={headerText} isOpen={isOpen} />;
  }, [headerText, isOpen]);

  const body = React.useMemo(() => {
    return <InstructionBody instructions={instructions} transifyData={transifyData} platform={platform} />;
  }, [instructions, platform, transifyData]);

  const onToggle = React.useCallback(() => {
    handleToggle && handleToggle();
    setIsOpen(!isOpen);
  }, [handleToggle, isOpen]);

  return (
    <div className={styles[`${platform}InstructionContainer`]}>
      <Dropdown header={header} body={body} open={isOpen} onToggle={onToggle} />
    </div>
  );
};

Instructions.propTypes = {
  header: PropTypes.string.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Instructions;
