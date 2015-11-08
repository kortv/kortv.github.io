import styles from './Page1.scss';

export default class Page1 extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logoMbs}/>
        <h2 className={styles.titleName}>«Разработка и принятие <br/>управленческих решений»</h2>
        <h2 className={styles.authorName}>Казарин Валерий Петрович</h2>
        <div className={styles.pic} alt="Обложка" />
      </div>
    );
  }
};