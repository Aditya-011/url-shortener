import React, { useState } from "react";
const Result = require("./Result").default;
const TinyURL = require("tinyurl");

function Card() {
  const [result, setResult] = useState("");
  const [url, setUrl] = useState("");

  function getUrl(e) {
    setUrl(e.target.value);
    // console.log(url);
  }
  function getResult() {
    TinyURL.shorten(url).then(
      function (res) {
        // console.log(`The url is ${url} and result is ${res}`);
        // const data;
        if (res === "Error") {
          setResult("Link not found");
        } else {
          setResult(res);
        }
      },
      function (err) {
        console.log(err);
      }
    );
  }
  return (
    <div>
      <div className="background">
        <div className="card">
          <h1>URL Shortener</h1>
          <div className="input">
            <input type="text" value={url} onChange={getUrl}></input>
            <button onClick={getResult}>Submit</button>
          </div>
        </div>
      </div>
      <Result output={result}></Result>
    </div>
  );
}

export default Card;
