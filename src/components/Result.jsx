import React from "react";

const Result = (props) => {
  if (props.output) {
    return (
      <p>
        The result is{" "}
        <a href={props.output} target="_blank">
          {props.output}
        </a>
      </p>
    );
  } else {
    return <p> </p>;
  }
};

export default Result;
