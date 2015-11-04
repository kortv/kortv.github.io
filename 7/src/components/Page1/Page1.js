import styles from './Page1.css';

export default class Page1 extends React.Component {

  render() {
    return (
      <div className={styles.flexbox}>
        <div className={"flex-row "+styles.logoMbs} />
        <h2 className={"flex-row "+styles.titleName}>«Разработка и принятие <br/>управленческих решений»</h2>
        <div className={"flex-row "+styles.authorName}>Казарин Валерий Петрович</div>
        <img className={"flex-row "+styles.pic} src={"img/p1/pic.png"} alt="Обложка" />
      </div>
    );
  }
};

//import styles from './Page1.css';

/* export default class Page1 extends React.Component {

 render() {
    return (
      <div className={"flexbox"}>
        <div className={"flex-row logoMbs"}  />
        <h2 className={"flex-row titleName"}>«Разработка и принятие <br/>управленческих решений»</h2>
        <div className={"flex-row authorName"}>Казарин Валерий Петрович</div>
        <img className={"flex-row pic"} src={"img/p1/pic.png"} alt="Обложка" />
      </div>
    );
  }
};  */      