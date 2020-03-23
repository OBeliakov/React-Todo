import React from 'react'
import './add-field.css'

const AddField = ({getAddResult, addItem, addValue}) => {
  const getResult = (e) => {
    if (e.currentTarget.value !== "") {
      getAddResult(e.currentTarget.value)
    } 

    return null
  }

  const submitItem = (e) => {
    e.preventDefault();
    if (addValue) {
      addItem(addValue)
    }
  }

  return (
    <div>
      <form 
        className="add-container d-flex"
        onSubmit={submitItem}
      >
        <input 
          placeholder="Fill me :)" 
          onChange={getResult} 
          className="form-control item-input" 
        />
        <button 
          className="btn btn-outline-secondary">
          Add item
        </button>
      </form>
    </div>
  )
}

export default AddField