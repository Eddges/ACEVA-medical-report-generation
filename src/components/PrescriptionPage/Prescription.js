import React, {Component} from 'react';
// import './App.css';
import AddItem from './AddItem';
import './Prescription.css'


class Prescription extends Component{
  state = {
    name: "",
    startDate: "",
    endDate:"",
    quantities: "",
    items: [

    ]
  };


  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

    
  };

  addItem = event => {
    event.preventDefault();
    const {name, startDate, endDate, quantities} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength 
               ?
               (itemsInState[itemsArrayLength - 1].id + 1) 
               : 
               1;
    this.setState({
     items: [
       ...itemsInState,
       Object.assign({}, {
         id,
         name,
         startDate,
         endDate,
         quantities
       })
     ],
     name: "",
     startDate: "",
     endDate: "",
     quantities: ""

   })
  };

  render() {
    const {name, startDate, endDate, quantities} = this.state;
    return <div className = "pres_wrapper">
      {/* <Nav/> */}

      {/* <Jumbtron/> */}

      <div className = "pres_container">

        <AddItem
            name={name}
            startDate={startDate}
            endDate={endDate}
            quantities={quantities}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
        />

        {/* <h1>Items</h1> */}
        <table width = "80%">
            <tr>
                <th>Supplements</th>
                <th>quantities</th>
                <th>startDate</th>
                <th>endDate</th>
                <th className = "none"> bq</th>
                <th className = "none">bq </th>
            </tr>
            
          {
            this.state.items.map((item, index) =>
                <tr key = {item.key}>
                  <td> {item.name} </td>
                  <td> {item.startDate} </td>
                  <td> {item.endDate} </td>
                  <td> {item.quantities} </td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>

                  </tr>
                // <ItemCard
                //     key={item.id}
                //     index={index}
                //     image={image}
                //     item={item}
                // />
            )
          }
        
        </table>

        

        {/* <hr/> */}
        {/* <Footer/> */}
      </div>
    </div>;
  }
}

export default Prescription;
