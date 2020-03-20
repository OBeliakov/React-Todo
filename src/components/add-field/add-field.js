import React from 'react'
import './add-field.css'

const AddField = ({getAddResult, addItem, addValue}) => {
  const getResult = (e) => {
    if (e.currentTarget.value !== "") {
      getAddResult(e.currentTarget.value)
    } 

    return null
  }

  return (
    <div>
      <div className="add-container d-flex">
        <input placeholder="Fill me :)" onChange={getResult} className="form-control item-input" />
        <button onClick={addValue ? () => addItem(addValue) : null} className="btn btn-outline-secondary">Add item</button>
      </div>
    </div>
  )
}

export default AddField