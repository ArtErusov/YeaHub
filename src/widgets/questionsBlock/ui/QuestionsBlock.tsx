import styles from './QuestionsBlock.module.scss';

function QuestionsBlock() {
   const questionsBlockTestData: string = 'React';
   return (
      <div className={styles['questions-block']}>
         <h2 className={styles['questions-block__title']}>{`Вопросы ${questionsBlockTestData}`}</h2>
      </div>
   );
}

export default QuestionsBlock;
