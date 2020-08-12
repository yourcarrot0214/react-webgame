const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "자동차",
    value: "",
    result: "",
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "정답!",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "오답!",
        value: "",
      });
    }
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">submit</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
