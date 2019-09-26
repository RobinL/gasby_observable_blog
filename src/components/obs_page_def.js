import React from 'react'
import Layout from "../layouts"
import ObeservableNotebookDivMod from "../components/observable_div_mod"

let output_order = [
    "title",
    "under_title_blurb",
    "key_to_graphics_title",
    "driving_title",
    "driving_text_output",
    "driving_chart_output"

]

let ObservablePageMod = (define) => (
    <Layout>
        <ObeservableNotebookDivMod define={define} output_order={output_order}/>
    </Layout>
)

export default ObservablePageMod