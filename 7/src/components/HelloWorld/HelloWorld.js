import styles from './HelloWorld.css';

export default class Demo extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Local Scope!</p>
      </div>
    );
  }

};
