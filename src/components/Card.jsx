import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
//import asset from "../images/asset.svg";
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
    if (url) {
      TinyURL.shorten(url).then(
        function (res) {
          // console.log(`The url is ${url} and result is ${res}`);
          // const data;
          if (res === "Error") {
            toast.error("Link not found");
            setResult("");
          } else {
            setResult(res);
          }
        },
        function (err) {
          console.log(err);
        }
      );
    } else {
      toast.error("Please enter a URL");
    }
  }
  React.useEffect(() => {
    if (result) {
      return <Result output={result}></Result>;
    }
  }, [result]);
  return (
    <div className="card">
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        {" "}
        <h1 className="center">Shrink your URLs</h1>
        <div className="input">
          <input type="text" value={url} onChange={getUrl} />
          <button className="btn" onClick={getResult}>
            Shrink
          </button>
        </div>
      </header>
      {}
      <Result output={result}></Result>
    </div>
  );
}

export default Card;
