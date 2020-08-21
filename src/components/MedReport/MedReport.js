import React from 'react'
import classes from './Report.module.css'
import Logo from '../../assets/ChiroHDLogo.png'
import record from '../../data/record'
import ref from '../../data/ref'
import ReactToPrint from 'react-to-print';
import ReportFields from '../ReportFields/ReportFields'



class MedReport extends React.Component{

    render(){

        const currUser = 'Epic'
        const userInfo = record.find(user => {
            return user.user === currUser
        })

        const mainArray = ref.map((iterator, index) => {
            const field = {
                description : iterator.description,
                specific : iterator.specific,
                currentDate : userInfo.report[`${iterator.specific}`].current.date,
                previousDate : userInfo.report[`${iterator.specific}`].previous.date,
                currentValue : userInfo.report[`${iterator.specific}`].current.value,
                previousValue : userInfo.report[`${iterator.specific}`].previous.value,
                rangeLower : iterator.lower,
                rangeUpper : iterator.upper
            }
            let status="GREEN"
            if(userInfo.report[`${iterator.specific}`].current.value < iterator.lower || userInfo.report[`${iterator.specific}`].current.value > iterator.upper) {
                status="AMBER"
            }
            if(userInfo.report[`${iterator.specific}`].current.value < iterator.criticalLower || userInfo.report[`${iterator.specific}`].current.value > iterator.criticalUpper) {
                status="RED"
            }
            field.status = status
            return field
        })

        console.log('mainArray : ', mainArray)

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
                            <i className="fas fa-eye" style={{'color' : '#0075f6'}}></i>
                            <div className={classes.VerticalLine}></div>
                        </div>

                        <ReactToPrint
                            trigger={() => {
                                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                                // to the root node of the returned component as it will be overwritten.
                                return <a href="#">Print this out!</a>;
                            }}
                            content={() => this.componentRef}
                            />
                    </div>

                    <ReportFields ref={el => (this.componentRef = el)} mainArray={mainArray} />


                    {/* <div className={classes.Mid}>
                        <div className={classes.MidTop}>

                            <i className={`${classes.ItemIcon} ${"fas fa-file-medical"}`} style={{'color' : '#0075f6'}}></i>
                            <span className={classes.Item}>Field</span>
                            <span className={classes.Item}>Current</span>
                            <span className={classes.Item}>Previous</span>
                            <span className={classes.Item}>Status</span>
                            <span className={classes.Item}>Reference</span>

                        </div>

                        <div className={classes.MidReport}>
                            {mainArray.map((iterator, index) => {
                                return(
                                    <ReportField {...iterator} key={index} />
                                )
                            })}
                            {mainArray.map((iterator, index) => {
                                return(
                                    <ReportField {...iterator} key={index} />
                                )
                            })}
                        </div>
                    </div> */}

                </div>
                
                                
            </div>
        )
    }
}

export default MedReport