import React, { Component } from 'react';

import { Runtime, Inspector } from '@observablehq/runtime';

const mountId = 'observable-mount';

const outputs = ["header__o", "text__o"]


// import { Runtime, Inspector } from "./runtime.js";
// import define from "./d/2206327fcbf2a485.js";

// const runtime = new Runtime();
// const main = runtime.module(define, Inspector.into(document.body));


// import { Runtime, Inspector } from "@observablehq/runtime";
// import define from "@robinl/energy-usage-calculator-for-everyday-activities";

class ObeservableNotebookDiv extends Component {


    componentDidMount() {

        const notebook = this.props.notebook;
        const root = document.getElementById(
            mountId
        );



        Runtime.load(
            notebook,
            (cell) => {
                if (outputs.includes(cell.name) || true) {
                    var this_cell = document.getElementById(mountId)
                    return {
                        fulfilled: (value) => {
                            // this_cell.innerHTML = this.props.d;
                            this_cell.prepend(value)
                        }
                    };
                }
            },
            Inspector.into(root)
        );



    }

    render() {
        return (<div id={mountId} style={{ textAlign: 'center' }}> </div>);
    }


}

export default ObeservableNotebookDiv;