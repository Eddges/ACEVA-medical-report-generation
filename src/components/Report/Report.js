import React from 'react'
import classes from './Report.module.css'
import ReportField from '../ReportField/ReportField'

class Report extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
            Report
                <ReportField />
                <ReportField />
                <ReportField />

            </div>
        )
    }
}

export default Report