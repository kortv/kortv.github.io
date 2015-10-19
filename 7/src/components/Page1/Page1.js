import styles from './Page1.css';

export default class Page1 extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <img className={styles.logoMbs} src={"img/Logo_MBS.svg"} onerror="this.url=img/Logo_MBS.png" />
        <h1 className={"tada "+styles.name}>«Разработка и принятие управленческих решений»</h1>
        <div className={styles.authorName}>Казарин Валерий Петрович</div>
        <img className={styles.pic} src={"img/p1/pic.png"} alt="Обложка" />
      </div>
    );
  }

};
