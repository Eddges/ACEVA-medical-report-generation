import React from 'react'
// import MedReport from './components/MedReport/MedReport'
import './app.css'
import FormPage from './components/Form_page/form.component';
import {Route} from 'react-router-dom'
import MedReport from './components/MedReport/MedReport';

class App extends React.Component{
    render(){

        return(
            <div>
                {/* <Route path="/" exact component={FormPage} /> */}
                {/* <Route path="/form" exact component={MedReport} /> */}
                <MedReport />
            </div>
        )
    }
}

export default App