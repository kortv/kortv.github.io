
var checkLabels = [
  {id: 0, checked: false, answer: true, label: "A. программируемое решение"},
  {id: 1, checked: false, answer: true, label: "B. непрограммируемое решение"},
  {id: 2, checked: false, answer: false, label: "C. оперативное решение"},
  {id: 3, checked: false, answer: false, label: "D. стратегическое решение"},
  {id: 4, checked: false, answer: false, label: "E. внутреннее решение"},
  {id: 5, checked: false, answer: false, label: "F. внешнее решение"}
];
var question = "1. К какого типа решениям Вы можете отнести решение начальникаотдела продаж о принятии возврата товара, который не подошел покупателю магазина?"

var checkLabels2 = [
  {id: 0, checked: false, answer: true, label: "A. решение, основанное на суждениях"},
  {id: 1, checked: false, answer: false, label: "B. рациональное решение"},
  {id: 2, checked: false, answer: false, label: "C. ограниченно рациональное решение"},
  {id: 3, checked: false, answer: false, label: "D. интуитивное решение"}
];
var question2 = "2.К какого типа решениям Вы можете отнести решение руководителя организации не применять административное взыскание к системному администратору, который часто опаздывает на работу, если прошлый опыт начальника говорит о том, что системные администраторы редко бывают дисциплинированными?"


var CheckListTest = React.createClass({
  getInitialState: function () {
    return { checkAnswer: false,
      text: ""
     };
  },

  changeTest: function() {
    this.setState({ checkAnswer: !this.state.checkAnswer });
  },
  clickTest: function(event) {
    console.log( event.target.attributes)
    this.setState({ text: event.target.state });
  },

  render: function () {
    var checkText = this.state.checkAnswer ? "Повторить" : "Проверить ответ"
    console.log(this.state.checkAnswer)
    return (
      <div onClick={this.clickTest} className="flex-column">
        <div>
          <p>{this.props.questionText}</p>
          <hr/>
          <CheckOptionGroup  checkAnswer={this.state.checkAnswer} options={this.props.options}/>
          <br/>
          
        </div>
        <button onClick={this.changeTest}>{checkText}
        </button> 
        
      </div>
    )
  }
});

var CheckOptionGroup = React.createClass({

  render: function () {
    var group = this.props.options.map(function (checkLabel, i, state) {

          return (
            <CheckBoxLine  checkAnswer={this.props.checkAnswer}
            key={i}
            name={checkLabel.id} 
            checked={checkLabel.checked} 
            answer={checkLabel.answer}>
             {checkLabel.label}</CheckBoxLine>
          )
        }, this)

    return (
        <div>{group}</div>
    );
  }
});

var CheckBoxLine = React.createClass({

  getInitialState: function () {
    return {
      checked: false
    };
  },

  handleChange: function (e) {
    checkLabels[this.props.name].checked = !checkLabels[this.props.name].checked;
    this.setState({ checked: !this.state.checked });
  },

  render: function () {
    
    if (!this.props.checkAnswer) {
      var klass = (this.state.checked) ? "fa fa-circle" : "fa fa-circle-o";
      var klassAnimated = (this.state.checked) ? "animated pulse" : "";
  }
    else {
      var klassAnswer = klass;
      if (this.state.checked && this.props.answer) klassAnswer = "fa fa-check-circle-o";
      else if (!this.state.checked && !this.props.answer) klassAnswer = "fa fa-circle-o";
      else klassAnswer = "fa fa-times-circle"
      this.state.checked = false;
    }

      return this.props.checkAnswer ? ( 
        <div >
          <i className={klassAnswer}></i> {this.props.children}
        </div>
      ):(
        <div className={klassAnimated} onClick={this.handleChange}>
          <i className={klass}></i> {this.props.children}
        </div>
      );
  }
});


export default class Page3 extends React.Component {
  render() {
    return (
      <div className="textbox14 flexbox">
        <CheckListTest options={checkLabels} questionText={question}/>
        <CheckListTest options={checkLabels2} questionText={question2}/>
      </div>
    )
  }
} 
