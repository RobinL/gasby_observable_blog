import React from 'react'
import Layout from "../layouts"
import ObeservableNotebookDiv from "../components/observable_div"

let ObservablePage = (d) => (
    <Layout>
        <ObeservableNotebookDiv notebook={d} />
    </Layout>
)

export default ObservablePage