import React from 'react';
import cx from 'classnames';
import styles from './Calculator.module.css';

const CalculatorUI = () => {
  // const [calcValue, setCalcValue] = useState(0);
  const calcValue = 2;
  return (
    <>
      <div className={styles.container}>
        <div className={cx(styles.grid1, styles.calculatorValueContainer)}>
          <div className={styles.calculatorValue}>
            {calcValue}
          </div>
        </div>
        <div className={styles.gridLightGreyContainer}> AC </div>
        <div className={styles.gridLightGreyContainer}> +/- </div>
        <div className={styles.gridLightGreyContainer}> % </div>
        <div className={styles.gridOrangeContainer}> + </div>
        <div className={styles.gridLightGreyContainer}> 7 </div>
        <div className={styles.gridLightGreyContainer}> 8 </div>
        <div className={styles.gridLightGreyContainer}> 9 </div>
        <div className={styles.gridOrangeContainer}> * </div>
        <div className={styles.gridLightGreyContainer}> 4 </div>
        <div className={styles.gridLightGreyContainer}> 5 </div>
        <div className={styles.gridLightGreyContainer}> 6 </div>
        <div className={styles.gridOrangeContainer}> - </div>
        <div className={styles.gridLightGreyContainer}> 1 </div>
        <div className={styles.gridLightGreyContainer}> 2 </div>
        <div className={styles.gridLightGreyContainer}> 3 </div>
        <div className={styles.gridOrangeContainer}> + </div>
        <div className={cx(styles.gridLightGreyContainer, styles.zeroValueContainer)}> 0 </div>
        <div className={styles.gridLightGreyContainer}> . </div>
        <div className={styles.gridOrangeContainer}> = </div>
      </div>
    </>
  );
};

export default CalculatorUI;
