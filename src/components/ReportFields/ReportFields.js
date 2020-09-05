import React from 'react'
import classes from './ReportFields.module.css'
import ReportField from '../ReportField/ReportField'

class ReportFields extends React.Component{
    render(){

        let filterstate = null

        switch (this.props.filterState%4) {
            case 0 :
                filterstate = null
                break
            case 1 :
                filterstate = 'RED'
                break
            case 2 :
                filterstate = 'AMBER'
                break
            case 3 :
                filterstate = 'GREEN'
                break
        }

        return(
            <div className={classes.Mid}>
                <div className={classes.MidTop}>

                    <i className={`${classes.ItemIcon} ${"fas fa-file-medical"}`} style={{'color' : '#0075f6'}}></i>
                    <span className={`${classes.Item} ${classes.Specific}`}>Field</span>
                    <span className={classes.Item}>Current <span className={classes.FieldDate}>({this.props.userInfo.current})</span></span>
                    <span className={classes.Item}>Previous 1 <span className={classes.FieldDate}>({this.props.userInfo.previous1})</span></span>
                    <span className={classes.Item}>Previous 2 <span className={classes.FieldDate}>({this.props.userInfo.previous2})</span></span>
                    <span className={classes.Item}>Previous 3 <span className={classes.FieldDate}>({this.props.userInfo.previous3})</span></span>

                    {/* <span className={classes.Item}>Status</span> */}
                    <span className={classes.Item}>Reference</span>

                </div>

                {/* <div className={classes.MidReport}> */}
                    {filterstate ? 
                        this.props.mainArray.map((iterator, index) => {
                            if(iterator.status === filterstate) {
                                return (
                                    <ReportField {...iterator} key={index} />
                                )
                            }
                        })
                     : this.props.mainArray.map((iterator, index) => {
                        return(
                            <ReportField {...iterator} key={index} />
                        )
                    })}
                    {filterstate ? 
                        this.props.mainArray.map((iterator, index) => {
                            if(iterator.status === filterstate) {
                                return (
                                    <ReportField {...iterator} key={index} />
                                )
                            }
                        })
                     : this.props.mainArray.map((iterator, index) => {
                        return(
                            <ReportField {...iterator} key={index} />
                        )
                    })}
                    {/* {this.props.mainArray.map((iterator, index) => {
                        return(
                            <ReportField {...iterator} key={index} />
                        )
                    })} */}
                {/* </div> */}
            </div>
        )
    }
}

export default ReportFields