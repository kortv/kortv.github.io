let styles={}; //import styles from './_SlideShow.scss';

"use strict";

let Image = React.createClass({
  render: function() {
    let className = "";
    if (this.props.selected == 1 || this.props.selected == -this.props.num+1) {
      className = " animated05 fadeOut";
    } else if (this.props.selected == 0) {
      className = " animated05 fadeInRight";
    }
    return (
      <img className={styles.image+className} src={this.props.sourceToDir+this.props.index+".png"}/>
    );
  }
});

let SlideShow = React.createClass({
  getInitialState: function() {
    styles = this.props.styles
    
    return {
      selectedIndex: 1,
      interval : setInterval( this.onTimeInterval, 4000)
    }
  },

  onTimeInterval: function() {
    
    this.setState({
      selectedIndex: (this.state.selectedIndex % this.props.num + 1) 
    })
  },

  onClick: function() {
    clearInterval(this.state.interval)
    this.setState({
      selectedIndex: (this.state.selectedIndex % this.props.num + 1) ,
      interval : setInterval( this.onTimeInterval, 4000)
    })
  },

  render: function() {
    let boards = Array(this.props.num).fill(1).map(function  (val, key) { 
      let isSelected = this.state.selectedIndex%this.props.num - key;
      return <Image index={key+1} selected={isSelected} key={key}
        num={this.props.num} sourceToDir={this.props.sourceToDir}/>
    }.bind(this))
    
    return (
        <div onClick={this.onClick} className={styles.images}>{boards}</div>
    );
  }
});

export default SlideShow;