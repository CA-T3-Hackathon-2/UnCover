import React from "react";
import { categoryIds, dateFormatted } from "../utils/helpers";
import Submit from "./styled/Submit";
import capitalize from "../utils/capitalize";
import { Link } from "react-router-dom";

const Form = ({ formData, dispatch }) => {
  const categories = Object.keys(categoryIds);
  const { category, dateFrom, dateTo, locationDistance, price } = formData;

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "3em",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ width: "80rem" }}>
      <h2 style={{ textAlign: "center" }}>Find your next event</h2>
      <form style={formStyles} onChange={handleSubmit}>
        <label htmlFor="category">Event Category</label>
        <select
          onChange={(e) =>
            dispatch({ type: "setCategory", data: e.target.value })
          }
          value={category}
        >
          {categories.map((category) => {
            return <option>{capitalize(category)}</option>;
          })}
        </select>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <label htmlFor="datemin">Date From</label>
          <input
            type="date"
            id="datemin"
            name="datemin"
            value={dateFrom}
            onChange={(e) =>
              dispatch({ type: "setDateFrom", data: e.target.value })
            }
            min={dateFormatted(new Date())}
          />
          <label htmlFor="datemax">Date To</label>
          <input
            type="date"
            id="datemax"
            name="datemax"
            value={dateTo}
            onChange={(e) =>
              dispatch({ type: "setDateTo", data: e.target.value })
            }
            min={dateFormatted(new Date())}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="locationDistance">Location Distance (km)</label>
          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "setLocationDistance", data: e.target.value })
            }
            value={locationDistance}
          ></input>

          <label htmlFor="price">Max price: $</label>
          <input
            type="number"
            onChange={(e) =>
              dispatch({ type: "setPrice", data: e.target.value })
            }
            value={price}
          ></input>
        </div>
        <Link to="/results">
          <Submit>Submit</Submit>
        </Link>
      </form>
    </div>
  );
};

export default Form;
