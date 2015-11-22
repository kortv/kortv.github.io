import SlideShow from './../_SlideShow/_SlideShow';
import styles from './Page3.scss';
"use strict";

//import styles from './Page3.scss';

export default class Page3 extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.p03}>
          <hr/>
          <div>
            <h1>MBS Mobile</h1>
            <h4>приложение для iPhone и Android</h4>
          </div>
          <div className={styles.container2}>
            <h4>Приложение в Google Play<br/><img src="./img/p03/x2.png" alt=""/></h4>
            <h4>Приложение в Applw Store<br/><img src="./img/p03/x3.png" alt=""/></h4>
          </div>

          <h3>Скидка 15% на семинары Moscow Business School при регистрации через приложение.<br/>
            Приложение включает в себя каталог семинаров Moscow Business School, оно также предназначено для оперативного получения информации о специальных акциях, существующих услугах и сервисах.<br/>
            Действует скидка 15% на участие в семинарах Moscow Business School при регистрации через это приложение.
          </h3>
        </div>
        <hr/> 
          <SlideShow num={3} styles={styles} sourceToDir="./img/p03/"/>
      </div>
    );
  }
};