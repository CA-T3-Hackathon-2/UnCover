import React from 'react'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleCategorySelection = () => {

  }

  const handleLocationDistance = () => {

  }

  const handlePrice = () => {

  }

  return (
    <div>
      <h2>Find your next event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Event Category</label>
        <select onChange={handleCategorySelection}>
          <option value="" >Select Category</option>
        </select>

        <label htmlFor="datemin">Date From</label>
        <input type="date" id="datemin" name="datemin" />
        <label htmlFor="datemax">Date To</label>
        <input type="date" id="datemax" name="datemax" />

        <label htmlFor="location">Location Distance</label>
        <select onChange={handleLocationDistance}>
          <option value="">Select </option>
        </select>

        <label htmlFor="price">Price</label>
        <select onChange={handlePrice}>
          <option value="">Select Maximum Price</option>
        </select>

      </form>
    </div>
  )
}

export default Form
