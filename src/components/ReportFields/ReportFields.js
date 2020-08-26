import React from 'react'
import classes from './ReportFields.module.css'
import ReportField from '../ReportField/ReportField'

class ReportFields extends React.Component{
    render(){
        return(
            <div className={classes.Mid}>
                <div className={classes.MidTop}>

                    <i className={`${classes.ItemIcon} ${"fas fa-file-medical"}`} style={{'color' : '#0075f6'}}></i>
                    <span className={classes.Item}>Field</span>
                    <span className={classes.Item}>Current</span>
                    <span className={classes.Item}>Previous 1</span>
                    <span className={classes.Item}>Previous 2</span>
                    <span className={classes.Item}>Previous 3</span>

                    {/* <span className={classes.Item}>Status</span> */}
                    <span className={classes.Item}>Reference</span>

                </div>

                {/* <div className={classes.MidReport}> */}
                    {this.props.mainArray.map((iterator, index) => {
                        return(
                            <ReportField {...iterator} key={index} />
                        )
                    })}
                    {this.props.mainArray.map((iterator, index) => {
                        return(
                            <ReportField {...iterator} key={index} />
                        )
                    })}
                {/* </div> */}
            </div>
        )
    }
}

export default ReportFields