import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/python/python.js";
import "codemirror/lib/codemirror.css";

export class CM extends Component {
  componentDidMount(prevProps) {
    console.log("state", this.props);
    console.log("prev", prevProps);
  }
  render() {
    return (
      <div>
        <h2>CodeMirror</h2>
        <CodeMirror
          value={this.props.code}
          // {...this.props}
          editorDidMount={editor => {
            editor.refresh();
          }}
          options={Object.assign(
            {
              mode: "python",
              lineNumbers: true,
              indentUnit: 4,
              tabSize: 4,
              lineWrapping: true,
              dragDrop: false
            },
            this.props.options || {}
          )}
        />
      </div>
    );
  }
}

export default CM;
