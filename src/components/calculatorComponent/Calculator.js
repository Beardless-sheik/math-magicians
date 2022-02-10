import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Calculator.module.css';
import calculate from './logic/calculate';

const CalculatorUI = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleButtonClick = (event) => {
    const calculator = calculate(state, event.target.textContent.trim());
    setState({ ...state, ...calculator });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={cx(styles.grid1, styles.calculatorValueContainer)}>
          <div className={styles.calculatorValue}>
            {state.total}
            {state.operation}
            {state.next}
          </div>
        </div>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> AC  </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> +/- </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> % </button>
        <button type="button" className={styles.gridOrangeContainer} onClick={handleButtonClick}> + </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 7 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}>  8 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 9 </button>
        <button type="button" className={styles.gridOrangeContainer} onClick={handleButtonClick}> x </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 4 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 5 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 6 </button>
        <button type="button" className={styles.gridOrangeContainer} onClick={handleButtonClick}> - </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 1 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 2 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> 3 </button>
        <button type="button" className={styles.gridOrangeContainer} onClick={handleButtonClick}> + </button>
        <button type="button" className={cx(styles.gridLightGreyContainer, styles.zeroValueContainer)} onClick={handleButtonClick}> 0 </button>
        <button type="button" className={styles.gridLightGreyContainer} onClick={handleButtonClick}> . </button>
        <button type="button" className={styles.gridOrangeContainer} onClick={handleButtonClick}> = </button>
      </div>
    </>
  );
};

export default CalculatorUI;
