import React, {Component} from 'react';
// import logo from './logo.svg';
import styles from './main.module.css';
import ListItems from './ListItems';


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }


  handleInput(e) {
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

 addItem(e) {
   e.preventDefault();
   const newItem = this.state.currentItem;
   console.log(newItem);
   if(newItem.text!==""){
     const newItems = [...this.state.items, newItem];
     this.setState({
       items: newItems,
       currentItem: {
         text:'',
         key:''
       }
     })
   }
 }

  render(){
    return (
      <div className = {styles.App} >
        <header>
          <form className = {styles.pres_form} onSubmit = {this.addItem}>
            {/* <input type = "text" placeholder = "Enter Text"
              value = {this.state.currentItem.text}
              onChange = {this.handleInput} list = "med_name"
            /> */}
          <label>
          <select value={this.state.currentItem.text} onChange={this.handleInput}>
          <option value="grapefruit">Select Vitamin</option>
            <option value="Vitamin A 500mg">Vitamin A 500mg</option>
            <option value="Vitamin B 700mg">Vitamin B 700mg</option>
            <option value="Vitamin B12 Complex 900mg">Vitamin B12 Complex 900mg</option>
          </select>
        </label>
            <button type = "submit">
            <img src="https://img.icons8.com/flat_round/40/000000/plus.png"/>
            </button>
          </form>
        </header>
        <div className = {styles.pills}>
         <ListItems items = {this.state.items}/>
        </div>

        <div className={styles.footer}>
            
        </div>
      
      </div>
    );
  }
}

export default Main

