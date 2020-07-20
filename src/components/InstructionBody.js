import * as React from 'react';
import {tReplace} from '../utils';
import styles from './InstructionBody.module.scss';

const InstructionBody = props => {
  const { instructions, platform, transifyData } = props;

  console.log('transifyData', transifyData);
  
  return (
    <div className={styles[`${platform}InstructionBody`]}>
      {instructions.map((instruction, index) => (
        <div key={index} className={styles.instruction}>
          <div className={styles.number}>{instruction.number}</div>
          <div className={styles.text}>{tReplace(str => str, instruction.text, transifyData)}</div>
        </div>
      ))}
    </div>
  );
};

export default InstructionBody;
