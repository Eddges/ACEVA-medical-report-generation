import React from 'react'
// import MedReport from './components/MedReport/MedReport'
import './app.css'
import FormPage from './components/Form_page/form.component';
import {Route} from 'react-router-dom'
import MedReport from './components/MedReport/MedReport';
import Prescription from './components/PrescriptionPage/Prescription';
// import Portal from './components/Portal/Portal'

class App extends React.Component{

    state = {
        user : null
    }

    storeUser = (user) => {
        this.setState({
            user : user
        })
    }

    render(){

        return(
            <div>
                <Route path="/" exact render={() => <FormPage userData={(user) => this.storeUser(user)} />} />
                <Route path="/form" exact render={() => <MedReport userName={this.state.user.user} />} />
                {/* <MedReport /> */}
                {/* <Portal/> */}
                {/* <Prescription/> */}
            </div>
        )
    }
}

export default App