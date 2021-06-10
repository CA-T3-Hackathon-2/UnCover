import React from 'react';

import { categoryIds } from '../utils/helpers';
import capitalize from '../utils/capitalize';

const Form = ({ location }) => {

  const categories = Object.keys(categoryIds);

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "3em"
  }

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
      <h2 style={{textAlign:"center"} }>Find your next event</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <label htmlFor="category">Event Category</label>
        <select onChange={handleCategorySelection}>
          {categories.map((category) => {
              return <option>{capitalize(category)}</option>;
            })}
        </select>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"20px 0" } }>
          <label htmlFor="datemin">Date From</label>
          <input type="date" id="datemin" name="datemin" />
          <label htmlFor="datemax">Date To</label>
          <input type="date" id="datemax" name="datemax" />
        </div>

        <div style={{display:"flex", flexDirection:"row" } }>
          <label htmlFor="locationDistance">Location Distance (km)</label>
          <input type="number" onChange={handleLocationDistance}>
          </input>

          <label htmlFor="price">Max price: $</label>
          <input type="number" onChange={handlePrice}>
          </input>
        </div>

      </form>
    </div>
  )
}

export default Form
