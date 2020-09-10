import React from 'react'
import classes from './Report.module.css'
import Logo from '../../assets/ChiroHDLogo.png'
import record from '../../data/record'
import ref from '../../data/ref'
import ReactToPrint from 'react-to-print';
import ReportFields from '../ReportFields/ReportFields'
import Portal from '../Portal/Portal';
import UserConfirmation from '../UserConfirmation/UserConfirmation'



class MedReport extends React.Component{

    state = {
        showCurrent : 0,
        filterState : 0,
        userConfirmation : true
    }

    toggleUserConfirmation = () => {
        this.setState({
            ...this.state,
            userConfirmation : !this.state.userConfirmation
        })
    }

    render(){

        // const currUser = this.props.userName
        const currUser = this.props.userName ? this.props.user.user : 'John Doe'
        const userInfo = record.find(user => {
            return user.user === currUser
        })

        const mainArray = ref.map((iterator, index) => {
            const field = {
                description : iterator.description,
                specific : iterator.specific,
                currentDate : userInfo.report[`${iterator.specific}`] ? userInfo.report[`${iterator.specific}`].current.date : 'NA',
                previousDate : userInfo.report[`${iterator.specific}`] ? userInfo.report[`${iterator.specific}`].previous1.date : 'NA',
                currentValue : userInfo.report[`${iterator.specific}`]? userInfo.report[`${iterator.specific}`].current.value : 'NA',
                previousValue : userInfo.report[`${iterator.specific}`]? userInfo.report[`${iterator.specific}`].previous1.value : 'NA',
                optimalLower : iterator.optimalLower,
                optimalUpper : iterator.optimalUpper,
                standardUpper : iterator.standardUpper,
                standardLower : iterator.standardLower,
                unit : iterator.unit
            }
            let status="GREEN"

            if(userInfo.report[`${iterator.specific}`]){
                if(userInfo.report[`${iterator.specific}`].current.value < iterator.optimalLower || userInfo.report[`${iterator.specific}`].current.value > iterator.optimalUpper) {
                    status="AMBER"
                }
                if(userInfo.report[`${iterator.specific}`].current.value < iterator.standardLower || userInfo.report[`${iterator.specific}`].current.value > iterator.standardUpper) {
                    status="RED"
                }
                field.status = status
            }

            return field
        })

        console.log('mainArray : ', mainArray)

        let eyeColor = '#fff'

        switch (this.state.filterState%4) {
            case 0 : 
                eyeColor = '#fff'
                break
            case 1 : 
                eyeColor = 'rgba(255, 0, 0)'
                break
            case 2 : 
                eyeColor = '#f0b802'
                break
            case 3 : 
                eyeColor = 'rgb(9, 160, 54)'
                break
        }

        const handleFilterState = () => {
            this.setState({
                ...this.state,
                filterState : this.state.filterState + 1
            })
        }

        return(
            <div className={classes.Container}>

                {this.state.userConfirmation ? <UserConfirmation passUser={(user) => this.props.passUser(user)} userReset={this.props.userReset} user={this.props.user} toggleUserConfirmation={this.toggleUserConfirmation} /> : null}

                <div className={classes.Upper}>
                <span className={classes.Heading}>BLOOD TEST REPORT RESULT</span>
                    <div className={classes.ActiveDetails}>
                        <i className={`${"fas fa-user"}`} style={{'color' : 'rgb(82, 82, 82)'}}></i>
                        <p className={classes.Info}> {this.props.user ? this.props.user.user :  "NA"}</p>
                        {
                            this.props.user ? <p className={classes.Info}>Gender : {this.props.user.gender}</p>
                            : null
                        }
                        {
                            this.props.user ? <p className={classes.Info}>Age : {this.props.user.age}</p>
                            : null
                        }
                    </div>

                </div>
                
                <div className={classes.Report}>
                    
                    <div className={classes.Middle}>
                        <ReportFields filterState={this.state.filterState} ref={el => (this.componentRef = el)} mainArray={mainArray} userInfo={userInfo} />
                    </div>

                    <div className={classes.Controls}>

                        <div className={classes.LabelFilter} onClick={handleFilterState} >
                            <i className="fas fa-eye" style={{'color' : eyeColor}}></i>
                            <span className={classes.FilterText}>FILTER</span>
                        </div>

                        <Portal/>


                        <ReactToPrint
                            
                            trigger={() => {
                                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                                // to the root node of the returned component as it will be overwritten.
                                return <button className = {classes.PDF}>SAVE AS PDF</button>;
                            }}
                            pageStyle='@page { size: A5; margin: 0mm; width : 100%; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; } }'
                            content={() => this.componentRef}
                        />

                    </div>


                </div>
                
                                
            </div>
        )
    }
}

export default MedReport