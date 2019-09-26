import React from "react"
import define from "@robinl/energy-usage-calculator-for-everyday-activities"
import ObservablePageMod from "../components/obs_page_def"


let output_order = [
    "title",
    "under_title_blurb",
    "key_to_graphics_title",
    "driving_title",
    "driving_text_output",
    "driving_chart_output"

]


export default ({ data }) => (
    ObservablePageMod(define, output_order)
)