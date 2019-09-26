import React from "react"
import define from "@robinl/energy-usage-calculator-for-everyday-activities"
import ObservablePageMod from "../components/obs_page_def"

export default ({ data }) => (
    ObservablePageMod(define)
)