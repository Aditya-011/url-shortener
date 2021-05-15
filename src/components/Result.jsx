import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Result = (props) => {
  const [copy, setCopy] = React.useState({
    value: "",
    copied: false,
  });
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
            <h3 className="center">OR</h3>
            <p> Copy link</p>
            <div class="field">
              <i class="url-icon uil uil-link"></i>
              <input value={props.output} readOnly text />

              <CopyToClipboard
                text={copy.value}
                onCopy={() => setCopy({ value: props.output, copied: true })}
              >
                <button
                  onClick={() => {
                    toast.success("Copied ", {
                      icon: "👏",
                    });
                  }}
                >
                  Copy to clipboard with button
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
