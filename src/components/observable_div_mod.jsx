import React, { Component } from 'react';

import { Runtime, Inspector } from '@observablehq/runtime';

const mountId = 'observable-mount';

function get_output_id_from_name(name) {
    return "output__" + name
}

// Think we need to pre-generate a cell for each output in the desired order.

class ObeservableNotebookDivMod extends Component {


    componentDidMount() {

        const define = this.props.define;
        const output_order = this.props.output_order;

        const node = document.getElementById(mountId);

        // Add a cell for each output in the order specified in output_order
        output_order.forEach(d => {
            let div = document.createElement("div");
            let output_id = get_output_id_from_name(d)
            div.setAttribute("id", output_id)
            node.append(div);
        })

        const runtime = new Runtime();

        const main = runtime.module(define, name => {

            return {
                pending() {
                    node.classList.add("running")
                },
                fulfilled(value) {
                    node.classList.remove("running");
                    console.log(name)

                    if (output_order.includes(name)) {
                        let output_id = get_output_id_from_name(name)
                        let output_node = document.getElementById(output_id);
                        output_node.innerHTML = null
                        output_node.append(value)
                    }

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