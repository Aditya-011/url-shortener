import React from "react";

const Result = (props) => {
  if (props.output) {
    return (
      <>
        <div class="popup">
          <div className="output">
            <p>
              Your shrinked URL:{" "}
              <a href={props.output} target="_blank" rel="noreferrer">
                {props.output}
              </a>
            </p>
          </div>
          <div class="content">
            <p> Copy link</p>
            <div class="field">
              <i class="url-icon uil uil-link"></i>
              <input
                type="text"
                readonly
                value="example.com/share-link"
              ></input>
              <button>Copy</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <p> </p>;
  }
};

export default Result;
