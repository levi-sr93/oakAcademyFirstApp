import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = {text: 'Submit'}
  return (
    <div>
      <label htmlFor="name" className="label">Enter e-mail</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: "red", color: "white", marginLeft: "10px"}}>
        {buttonText.text}
      </button>
</div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))