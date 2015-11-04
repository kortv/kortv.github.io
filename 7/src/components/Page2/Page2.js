import styles from './Page2.css';

export default class Page2 extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logoMbs} />
        <div className={styles.mainText}>
          <strong>Moscow Business School</strong> – крупнейший центр бизнес-образования, осуществляющий профессиональную подготовку специалистов и руководителей российских и западных компаний. Слушателям предоставляется широкий выбор программ MBA, курсов повышения квалификации, семинаров и тренингов по самым востребованным направлениям. Обучение в Moscow Business School полностью соответствует современным образовательным стандартам и проводится с применением актуальных информационно-коммуникационных технологий.
        </div>
        <div className={styles.mainPic} />
      </div>
    );
  }

};
