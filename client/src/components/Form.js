import React from "react";
import { Link } from "react-router-dom";
// data
import { categoryIds, dateFormatted } from "../utils/helpers";
// utils
import capitalize from "../utils/capitalize";
// styled components
import Submit from "./styled/Submit";
import FormDiv from "./styled/form/FormDiv";
import FormHeading from "./styled/form/FormHeading";
import StyledForm from "./styled/form/StyledForm";
import FormHorizontalDiv from "./styled/form/FormHorizontalDiv";
import FormVerticalDiv from "./styled/form/FormVerticalDiv";


const Form = ({ formData, dispatch }) => {
  const categories = Object.keys(categoryIds);
  const { category, dateFrom, dateTo, locationDistance, price } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    // hit the API
  };

  return (
    <FormDiv>
      <FormHeading>Find your next event</FormHeading>
      <StyledForm>
        <label htmlFor="category">Event Category</label>
        <select
          onChange={(e) =>
            dispatch({ type: "setCategory", data: e.target.value })
          }
          value={category}>
          {categories.map((category) => {
            return <option key={category}>{capitalize(category)}</option>;
          })}
        </select>

        // col 1
        <FormHorizontalDiv>
          <FormVerticalDiv style={{marginRight: "1rem"} }>
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
          </FormVerticalDiv>
          <FormVerticalDiv style={{marginLeft: "1rem"} }>
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
          </FormVerticalDiv>
        </FormHorizontalDiv>
        
        // col 2
        <FormHorizontalDiv>
          <FormVerticalDiv style={{marginRight: "1rem"}}>
            <label htmlFor="locationDistance">Location Distance (km)</label>
            <input
              type="number"
              onChange={(e) =>
                dispatch({ type: "setLocationDistance", data: e.target.value })
              }
              value={locationDistance}
            />
          </FormVerticalDiv>
          <FormVerticalDiv style={{marginLeft: "1rem"}}>
            <label htmlFor="price">Max price: $</label>
            <input
              type="number"
              onChange={(e) =>
                dispatch({ type: "setPrice", data: e.target.value })
              }
              value={price}
            />
          </FormVerticalDiv>
        </FormHorizontalDiv>
        <Link to="/results">
          <Submit>Submit</Submit>
        </Link>
      </StyledForm>
    </FormDiv>
  );
};

export default Form;
