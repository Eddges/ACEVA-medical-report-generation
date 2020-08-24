import React from 'react'
import MedReport from './components/MedReport/MedReport'
import './app.css'
import FormPage from './components/Form_page/form.component';

class App extends React.Component{
    render(){

        return(
            <div>
                {/* <FormPage/> */}
                <MedReport />            
            </div>
        )
    }
}

export default App