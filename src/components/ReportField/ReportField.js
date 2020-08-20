import React from 'react'
import classes from './ReportField.module.css'

const ReportField = (props) => {
    return (
        <div className={classes.Container}>
            <i className={`${classes.Icon} ${"fas fa-burn"}`} style={{'color' : '#0075f6'}}></i>
            <span className={`${classes.Item}`}>Haemoglobin</span>
            <span className={`${classes.Item} ${classes.CurrDate}`}> <span>8%</span>12/08/2020</span>
            <span className={`${classes.Item} ${classes.PrevDate}`}><span>15%</span>14/07/2020 </span>
            <span className={`${classes.Item} ${classes.Status}`}>Critical</span>
            <span className={`${classes.Item} ${classes.Reference}`}>40%-50%</span>
        </div>
    )
}

export default ReportField