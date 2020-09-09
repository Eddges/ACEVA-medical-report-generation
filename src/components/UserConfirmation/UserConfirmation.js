import React from 'react'
import classes from './UserConfirmation.module.css'
import {withRouter} from 'react-router-dom'

class UserConfirmation extends React.Component{

    state = {
        name : this.props.user.user,
        age : this.props.user.age,
        gender : this.props.user.gender,
        email : this.props.user.email,
        telephone : this.props.user.telephone,
        mobile : this.props.user.mobile,
        disabled : true
    }

    handleCancel = () => {
        this.props.history.push('/')
        this.props.userReset()
    }

    handleAccept = () => {
        this.props.passUser(this.state)
        this.props.toggleUserConfirmation()
    }

    handleEdit = () => {
        this.setState({
            ...this.state,
            disabled : false
        })
    }

    changeName = (e) => {
        this.setState({
            ...this.state,
            name : e.target.value
        })
    }
    changeAge = (e) => {
        this.setState({
            ...this.state,
            age : e.target.value
        })
    }
    changeGender = (e) => {
        this.setState({
            ...this.state,
            gender : e.target.value
        })
    }
    changeEmail = (e) => {
        this.setState({
            ...this.state,
            email : e.target.value
        })
    }
    changeTelephone = (e) => {
        this.setState({
            ...this.state,
            telephone : e.target.value
        })
    }
    changeMobile = (e) => {
        this.setState({
            ...this.state,
            mobile : e.target.value
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Backdrop}></div>
                <div className={classes.Main}>
                    <span className={classes.Heading}>User Data</span>
                    <div className={classes.Name}>
                        <span>User</span>
                        <input placeholder="Name" value={this.state.name} onChange={(e) => this.changeName(e)} disabled={this.state.disabled} />
                    </div>
                    <div className={classes.Age}>
                        <span>Age</span>
                        <input placeholder="Age" value={this.props.user.age ? this.state.age : 'NA'} onChange={(e) => this.changeAge(e)} disabled={this.state.disabled} />
                        <span className={classes.GenderLabel}>Gender</span>
                        <input placeholder="Gender" value={this.props.user.gender ? this.state.gender : 'NA'} onChange={(e) => this.changeGender(e)} disabled={this.state.disabled} />
                    </div>
                    <div className={classes.Name}>
                        <span>E-Mail</span>
                        <input placeholder="E-Mail" value={this.props.user.email ? this.state.email : 'NA'} onChange={(e) => this.changeEmail(e)} disabled={this.state.disabled} />
                    </div>
                    <div className={classes.Name}>
                        <span>Telephone</span>
                        <input placeholder="Telephone" value={this.props.user.telephone ? this.state.telephone : 'NA'} onChange={(e) => this.changeTelephone(e)} disabled={this.state.disabled} />
                    </div>                    
                    <div className={classes.Name}>
                        <span>Mobile</span>
                        <input placeholder="Mobile" value={this.props.user.mobile ? this.state.mobile : 'NA'} onChange={(e) => this.changeMobile(e)} disabled={this.state.disabled} />
                    </div>
                    <div className={classes.Controls}>
                        <button className={classes.AcceptButton} onClick={this.handleAccept} >Accept and Continue</button>
                        <button className={classes.CancelButton} onClick={() => this.handleEdit()} >Edit</button>
                        <button className={classes.CancelButton} onClick={() => this.handleCancel()} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserConfirmation)