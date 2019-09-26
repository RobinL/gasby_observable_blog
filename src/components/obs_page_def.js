import React from 'react'
import Layout from "../layouts"
import ObeservableNotebookDivMod from "../components/observable_div_mod"



let ObservablePageMod = (define, output_order) => (
    <Layout>
        <ObeservableNotebookDivMod define={define} output_order={output_order}/>
    </Layout>
)

export default ObservablePageMod