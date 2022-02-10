import style from './Quote.module.css';

const Quote = () => (
  <figure className={style.mainQuote}>
    <blockquote cite="https://www.prodigygame.com/main-en/blog/math-quotes/">
      <p>What is mathematics? It is only a systematic effort of solving puzzles posed by nature.</p>
    </blockquote>
    <figcaption>
      —Shakuntala Devi,
      <cite>Brave New World</cite>
    </figcaption>
  </figure>
);

export default Quote;
