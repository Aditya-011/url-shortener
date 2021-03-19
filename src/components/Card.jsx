import React from "react";
const Query = require("./Query").default;
const Result = require("./Result").default;
function Card() {
  return (
    <div>
      <div className="background">
        <div className="card">
          <h1>URL Shortener</h1>
          <Query></Query>
          <Result></Result>
        </div>
      </div>
    </div>
  );
}

export default Card;
