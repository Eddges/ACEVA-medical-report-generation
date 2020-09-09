import React from 'react'
// import MedReport from './components/MedReport/MedReport'
import './app.css'
import FormPage from './components/Form_page/form.component';
import {Route} from 'react-router-dom'
import MedReport from './components/MedReport/MedReport';
import Layout from './components/Layout/Layout';
import Prescription from './components/PrescriptionPage/Prescription';
import UserConfirmation from './components/UserConfirmation/UserConfirmation';
// import Portal from './components/Portal/Portal'

class App extends React.Component{

    state = {
        user : null,
        displayUser : true
    }

    storeUser = (user) => {
        this.setState({
            user : user
        })
    }

    userReset = () => {
        this.setState({
            ...this.state,
            user : null
        })
    }

    modifyUser = (user) => {
        console.log('ModifyUser : ', user)
        this.setState({
            ...this.state,
            user : {
                ...this.state.user,
                user : user.name,
                gender : user.gender,
                age : user.age
            }
        })
    }

    render(){

        return(
            <div>
                <Layout user={this.state.user}>
                    <Route path="/" exact render={() => <FormPage userData={(user) => this.storeUser(user)} />} />
                    <Route path="/form" exact render={() => <MedReport passUser={(user) => this.modifyUser(user)} userReset={this.userReset} user={this.state.user} />} />
                    {/* <Prescription /> */}
                    {/* <MedReport user={this.state.user} /> */}
                </Layout>
            </div>
        )
    }
}

export default App