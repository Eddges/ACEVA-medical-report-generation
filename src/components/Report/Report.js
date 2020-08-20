import React from 'react'
import classes from './Report.module.css'
import ReportField from '../ReportField/ReportField'
import Logo from '../../assets/ChiroHDLogo.png'


class Report extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Report}>
                    <div className={classes.Top}>

                        <img src={Logo} alt="Logo" />

                        <div className={classes.Search}>
                            <input placeholder="Search Record" />
                        </div>

                        <div className={classes.Select}>
                            <select>
                                <option>Report</option>
                                <option>Supplements</option>
                            </select>
                        </div>

                        <div className={classes.LabelFilter}>
                            {/* <div className={classes.Filter}></div> */}
                            <i className="fas fa-eye" style={{'color' : '#0075f6'}}></i>
                            <div className={classes.VerticalLine}></div>
                        </div>

                    </div>

                    <div className={classes.Mid}>
                        <div className={classes.MidTop}>

                            <i className={`${classes.ItemIcon} ${"fas fa-file-medical"}`} style={{'color' : '#0075f6'}}></i>
                            <span className={classes.Item}>Field</span>
                            <span className={classes.Item}>Current</span>
                            <span className={classes.Item}>Previous</span>
                            <span className={classes.Item}>Status</span>
                            <span className={classes.Item}>Reference</span>

                        </div>

                        <div className={classes.MidReport}>
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />
                            <ReportField />

                        </div>
                        
                    </div>
                    {/* <ReportField />
                    <ReportField />
                    <ReportField /> */}
                </div>
                

            </div>
        )
    }
}

export default Report