import CalculatorUI from '../../components/calculatorComponent/Calculator';
import style from './Calculator.module.css';

const Calculator = () => (
  <div className={style.calculatorContainer}>
    <div className={style.mathText}>
      Lets Do Some MATH!
    </div>
    <CalculatorUI />
  </div>
);

export default Calculator;
