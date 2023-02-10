import React from 'react'
import Topfold from '../../components/topfold'
import AddForm from '../../components/add-form'
import "./add-expense.css"

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <Topfold/>
        <AddForm/>
    </div>
  )
}

export default AddExpense