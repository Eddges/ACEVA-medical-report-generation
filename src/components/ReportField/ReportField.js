import React from 'react'
import classes from './ReportField.module.css'

const ReportField = (props) => {

    let icon = "fas fa-band-aid"

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



    return (
        <div className={classes.Container}>
            <i className={`${classes.Icon} ${icon}`} style={{'color' : '#0075f6'}}></i>
            <span className={`${classes.Item}`}>{props.specific}</span>
            <span className={`${classes.Item} ${classes.CurrDate}`}> <span>{props.currentValue}</span>{props.currentDate}</span>
            <span className={`${classes.Item} ${classes.PrevDate}`}><span>{props.previousValue}</span>{props.previousDate}</span>
            <span className={`${classes.Item} ${classes.Status}`} style={{'color' : `${props.status}`}}>{props.status}</span>
            <span className={`${classes.Item} ${classes.Reference}`}>{props.rangeLower}-{props.rangeUpper} %</span>
        </div>
    )
}

export default ReportField