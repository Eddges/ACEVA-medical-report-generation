import React from 'react'
import classes from './ReportField.module.css'

const ReportField = (props) => {

    let icon = "fas fa-band-aid"
    let bgcol = 'white'

    // switch (props.description) {
    //     case 'rbcHealth' : 
    //         icon = "fas fa-burn"
    //         return
    // }
    if(props.description==='rbcHealth') {
        icon = 'fas fa-burn'
    }
    if(props.description==='heartHealth'){
        icon = 'fas fa-heartbeat'
    }
    if(props.description==='bloodSugar'){
        icon = 'fas fa-cookie-bite'
    }

    if(props.status ==='RED') {
        bgcol = 'rgba(255, 0, 0)'
    }
    if(props.status ==='AMBER') {
        bgcol = '#f0b802'
    }
    if(props.status ==='GREEN') {
        bgcol = 'rgb(9, 160, 54)'
    }

    return (
        <div className={classes.Container}>
            {/* <i className={`${classes.Icon} ${icon}`} style={{'color' : bgcol}}></i> */}
            <span className={`${classes.Item} ${classes.Specific}`} style={{'color' : bgcol}}>{props.specific}</span>
            <span className={`${classes.Item} ${classes.CurrDate}`}> <span style={{'color' : bgcol}}>{props.currentValue}</span></span>
            <span className={`${classes.Item} ${classes.PrevDate}`}><span>{props.previousValue}</span></span>
            <span className={`${classes.Item} ${classes.PrevDate}`}><span>{props.previousValue}</span></span>
            <span className={`${classes.Item} ${classes.PrevDate}`}><span>{props.previousValue}</span></span>
            {/* <span className={`${classes.Item} ${classes.Status}`} style={{'color' : `${props.status}`}}>{props.status}</span> */}
            <span className={`${classes.Item} ${classes.Reference}`}>{props.rangeLower}-{props.rangeUpper} %</span>
        </div>
    )
}

export default ReportField