import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddItem.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddItem = ({name, startDate,endDate,quantities, onChange, onSubmit}) => (
 <div className = {styles.main_wrapper}>
   <form className = {styles.input_form} onSubmit = {onSubmit} >
       <div className = {styles.main_input}>
            <select
                type="text"
                className="sub_input"
                placeholder="Item"
                value={name}
                name="name"
                onChange={onChange}
            >
                <option value = "none">Select Item</option>
                <option value="Vitamin1">Vitamin1</option>
                <option value="Vitamin2">Vitamin2</option>
                <option selected value="Vitamin3">Vitamin3</option>
                <option value="Vitamin4">Vitamin4</option>
            </select>
            <button type="submit">Add</button>

       </div>

       <div className = {styles.secondary_input}>
           <label>
               Start Date
           <input
                type="date"
                //  className="form-control"
                // placeholder="Start Date"
                value={startDate}
                name= "startDate"
                onChange={onChange}
            />
           </label>
            <label>
                End Date
            <input
                type="date"
                //  className="form-control"
                placeholder="End Date"
                value={endDate}
                name="endDate"
                onChange={onChange}
            />
            </label>

            <label>
                Quantity
            <input
                type="text"
                //  className="form-control"
                placeholder="quantity"
                value={quantities}
                name="quantities"
                onChange={onChange}
            />
            </label>

               

                
       </div>
     
     
      
       
       
     
   </form>
 </div>
);

AddItem.propTypes = {
 name: PropTypes.string.isRequired,
 startDate: PropTypes.string.isRequired,
 endDate: PropTypes.string.isRequired,
 quantities: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired,
};

export default AddItem