import SlideShow from './../_SlideShow/_SlideShow';
import styles from './Page3.scss';
"use strict";

//import styles from './Page3.scss';

export default class Page3 extends React.Component {

  render() {
    return (
      <div className={styles.flexbox}>
        <div>
          <h1>MBS Mobile</h1>
          <h6>приложение для iPhone и Android</h6>
          <h4>Скидка 15% на семинары Moscow Business School при регистрации через приложение.<br/>
            Приложение включает в себя каталог семинаров Moscow Business School, оно также предназначено для оперативного получения информации о специальных акциях, существующих услугах и сервисах.<br/>
            Действует скидка 15% на участие в семинарах Moscow Business School при регистрации через это приложение.
          </h4>
        </div>
        <hr/>
        <SlideShow num={3} styles={styles} sourceToDir="./img/p03/"/>
      </div>
    );
  }
};