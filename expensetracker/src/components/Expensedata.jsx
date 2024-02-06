import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expensedata = () => {
    const list = [
        { id: 1, cost: 2100, name: 'Shopping' },
        { id: 2, cost: 2450, name: 'Kirana' },
        { id: 3, cost: 2060, name: 'Child care' },
        { id: 4, cost: 2800, name: 'Holiday' }
    ];

    return (
        <div>
            <ul className='list-group'>
                {
                    list.map((expense) => (
                        <ExpenseItem key={expense.id} id={expense.id} cost={expense.cost} name={expense.name} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Expensedata;
