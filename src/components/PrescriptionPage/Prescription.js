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

  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };

  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
   };

   handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    });
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
                <th>Quantity</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th className = "none"> bq</th>
                <th className = "none">bq </th>
            </tr>
            
          {
            this.state.items.map((item, index) =>
            item.isEditing ?
            <tr key = {item.key}>
              <td> <input value = {item.name}/> </td>
              <td> <input value = {item.startDate}/> </td>
              <td> <input value = {item.endDate}/> </td>
              <td> <input value = {item.quantities}/> </td>
              <td><button onClick = { () => this.toggleItemEditing(index)}> {item.isEditing ? "Save" : "Edit"}</button></td>
              <td><button onClick = {() => this.onDelete(index)}>Delete</button></td>

              </tr>
              :



              <tr key = {item.key}>
              <td> {item.name} </td>
              <td> {item.startDate} </td>
              <td> {item.endDate} </td>
              <td> {item.quantities} </td>
              <td><button onClick = { () => this.toggleItemEditing(index)}> {item.isEditing ? "Save" : "Edit"}</button></td>
              <td><button onClick = {() => this.onDelete(index)}>Delete</button></td>

              </tr>
            
                
                
            )
          }
        
        </table>

        

        {/* <hr/> */}
        {/* <Footer/> */}
      </div>
    </div>
    ;
  }
}

export default Prescription;
