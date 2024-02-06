import React from 'react'
import {TiDelete} from 'react-icons/ti';
const ExpenseItem = (props) => {
  return (
    <div>
        <li className='list-group-item  d-flex justify-content-between'>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
           ${props.cost}
           <TiDelete size='1.5em'/>
                </span>
            </div>
        </li>
      
    </div>
  )
}

export default ExpenseItem
