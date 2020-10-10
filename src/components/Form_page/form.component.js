import React from 'react';
import './form.style.css';
import Chirologo from '../../assets/ChiroHDLogo.png';
import {withRouter} from 'react-router-dom'
import record from '../../data/record'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

class FormPage extends React.Component {

    state = {
        userID : ''
    }

    // componentDidMount() {
    //     this.setState({
    //         userID : null
    //     })
    // }

    handleUserInput = (e) => {
        this.setState({
            userID : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.userID==='') {
            alert('Please fill in a valid LabCorp ID')
        }
        else if(this.state.userID) {
            const user = record.find(user => {
                return user.user === this.state.userID
            })
            if(user) {
                this.props.userData(user)
                this.props.history.push('/form')
            }
            else {
                alert('We couldn\'t find any user with this ID. Kindly make sure you have entered correct LabCorp ID')
            }
        }
    }

    render(){
        return (
            <>
            {/* <Header/> */}
            <div className = "form_parent">
                {/* <div className = "logo_wrapper">
                    <img src = {Chirologo} alt="Logo"/>
                </div> */}
                <div className = "form_wrapper">
                    <form className = "content" onSubmit={(e) => this.handleSubmit(e)}>
                        <p>Enter LabCorpID</p>
                        <input type="text" placeholder="Enter ID here" onChange={(e)=> this.handleUserInput(e)} />
                        {/* <NavLink to="/form"> */}
                        <button type="button" className = "btn" onClick={(e) => this.handleSubmit(e)} >
                            Fetch Report
                        </button>
                        {/* </NavLink> */}
                    </form>
                   
                </div>
            </div>
            {/* <Footer/> */}
            </>
        )
    }

}

export default withRouter(FormPage);
