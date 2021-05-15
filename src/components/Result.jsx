import React from "react";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Result = (props) => {
  var result = props.output;

  const [isCopied, setIsCopied] = React.useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    console.log(isCopied);
  };

  //console.log(copy);
  if (props.output) {
    return (
      <>
        <div class="popup">
          <div className="output">
            <div className="center">
              <p>
                Your shrinked URL:{" "}
                <a href={props.output} target="_blank" rel="noreferrer">
                  {props.output}
                </a>
              </p>
            </div>
          </div>
          <div class="content">
            <h3 className="center">OR</h3>
            <p> Copy link</p>
            <div class="field">
              <i class="url-icon uil uil-link"></i>
              <input type="text" value={result} readOnly className="result" />
              <CopyToClipboard text={result} onCopy={onCopyText}>
                <button
                  className="btn"
                  onClick={() => {
                    toast.success("Copied ", {
                      icon: "👏",
                    });
                  }}
                >
                  Copy
                </button>
              </CopyToClipboard>
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
