import React, { Component } from 'react';

import { Runtime, Inspector } from '@observablehq/runtime';
// import { clearLine } from 'readline';

const mountId = 'observable-mount';




// Think we need to pre-generate a cell for each output in the desired order.

class ObeservableNotebookDivMod extends Component {


    componentDidMount() {

        const define = this.props.define;



        const node = document.getElementById(mountId);
        const runtime = new Runtime();

        const main = runtime.module(define, name => {

            return {
                pending() {
                    node.classList.add("running")
                },
                fulfilled(value) {
                    node.classList.remove("running");
                    node.prepend(value)


                },
                rejected(error) {
                    node.classList.remove("running");
                    node.classList.add("error");
                    node.textContent = error.message;
                }
            };
        });

        // const main = runtime.module(define, name => {

        //     console.log(name)


        //     var this_cell = document.getElementById(mountId)
        //     var d = this_cell.appendChild("div")

        //     return new Inspector(d);

        //             // return {
        //                 // fulfilled: (value) => {
        //                     debugger;
        //                     this_cell.prepend(name)
        //                 // }
        //             // };

        //         // return new Inspector(document.body);

        // });

        // Runtime.load(
        //     notebook,
        //     (cell) => {
        //         if (outputs.includes(cell.name) || true) {
        //             var this_cell = document.getElementById(mountId)
        //             return {
        //                 fulfilled: (value) => {
        //                     // this_cell.innerHTML = this.props.d;
        //                     this_cell.prepend(value)
        //                 }
        //             };
        //         }
        //     },
        //     Inspector.into(root)
        // );



    }

    render() {
        return (<div id={mountId} style={{ textAlign: 'left' }}> </div>);
    }


}

export default ObeservableNotebookDivMod;