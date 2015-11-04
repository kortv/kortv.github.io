import styles from './Page2.css';

export default class Demo extends React.Component {

  render() {
    return (
      <div className={styles.pic}>
        <img id="picp2" src={"img/p02/picp2.png"} />
        <div id="txt">
          <strong>Moscow Business School</strong> – крупнейший центр бизнес-образования, осуществляющий профессиональную подготовку специалистов и руководителей российских и западных компаний. Слушателям предоставляется широкий выбор программ MBA, курсов повышения квалификации, семинаров и тренингов по самым востребованным направлениям. Обучение в Moscow Business School полностью соответствует современным образовательным стандартам и проводится с применением актуальных информационно-коммуникационных технологий.
        </div>
        <img className={styles.logoMbs} src={"img/Logo_MBS.svg"} onerror="this.url=img/Logo_MBS.png" />
      </div>
    );
  }

};
