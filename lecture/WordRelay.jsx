const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("자동차");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult("정답입니다.");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("오답입니다.");
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={state.value} onChange={onChange} />
        <button type="submit">click!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
