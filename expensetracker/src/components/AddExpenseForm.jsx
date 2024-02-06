import React from 'react'

const AddExpenseForm = () => {
  return (
    <div>
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' className='form-control' required
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input type='text' id='cost' className='form-control' required
                    ></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </div>
        </form>
      
    </div>
  )
}

export default AddExpenseForm
