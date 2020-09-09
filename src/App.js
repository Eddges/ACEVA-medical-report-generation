import React from 'react'
// import MedReport from './components/MedReport/MedReport'
import './app.css'
import FormPage from './components/Form_page/form.component';
import {Route} from 'react-router-dom'
import MedReport from './components/MedReport/MedReport';
import Layout from './components/Layout/Layout';
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
                <Layout user={this.state.user}>
                    <Route path="/" exact render={() => <FormPage userData={(user) => this.storeUser(user)} />} />
                    <Route path="/form" exact render={() => <MedReport userName={this.state.user.user} />} />
                </Layout>
            </div>
        )
    }
}

export default App