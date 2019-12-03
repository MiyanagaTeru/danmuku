import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Danmu from './danmu';

function App() {
  return (
    <div className="App">
      <Danmu >
      <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
            <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
          <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
            <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
          <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
            <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
          <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
            <p>hello, this is a really  width and more.</p>
      <p>I'm new here</p>
      </Danmu>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
