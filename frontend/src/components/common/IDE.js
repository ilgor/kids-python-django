import React, { Component } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";


export class IDE extends Component {
    render() {
        return (
    

<CodeMirror
    value = { code }
    options = {{
                theme: "monokai",
                keyMap: "sublime",
                mode: "jsx"
    }}
/>;
        )
    }
}

export default IDE

