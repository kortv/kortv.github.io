import styles from './FooBar.css';



export default class Demo extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Another Local Scope!</p>
      </div>
    );
  }

};
