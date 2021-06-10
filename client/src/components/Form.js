import React from "react";
import { categoryIds, dateFormatted } from "../utils/helpers";
import Submit from "./styled/Submit";
import capitalize from "../utils/capitalize";
import { Link } from "react-router-dom";
import {
  FormFieldColumn,
  FormRow,
  Select,
  Input,
  Label,
} from "./styled/FormComponents";
import Header from "./styled/Header";

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
    <div style={{ width: "75rem" }}>
      <Header>
        Find <span style={{ color: "#007bff" }}>your</span> next event
      </Header>
      <form style={formStyles} onChange={handleSubmit}>
        <Label htmlFor="category">Event Category</Label>
        <Select
          onChange={(e) =>
            dispatch({ type: "setCategory", data: e.target.value })
          }
          value={category}
        >
          {categories.map((category) => {
            return <option key={category}>{capitalize(category)}</option>;
          })}
        </Select>

        <FormRow>
          <FormFieldColumn style={{ marginRight: "1rem" }}>
            <Label htmlFor="datemin">Date From</Label>
            <Input
              type="date"
              id="datemin"
              name="datemin"
              value={dateFrom}
              onChange={(e) =>
                dispatch({ type: "setDateFrom", data: e.target.value })
              }
              min={dateFormatted(new Date())}
            />
          </FormFieldColumn>
          <FormFieldColumn style={{ marginLeft: "1rem" }}>
            <Label htmlFor="datemax">Date To</Label>
            <Input
              type="date"
              id="datemax"
              name="datemax"
              value={dateTo}
              onChange={(e) =>
                dispatch({ type: "setDateTo", data: e.target.value })
              }
              min={dateFormatted(new Date())}
            />
          </FormFieldColumn>
        </FormRow>

        <FormRow>
          <FormFieldColumn style={{ marginRight: "1rem" }}>
            <Label htmlFor="locationDistance">Location Distance (km)</Label>
            <Input
              type="number"
              onChange={(e) =>
                dispatch({ type: "setLocationDistance", data: e.target.value })
              }
              value={locationDistance}
              min={1}
            />
          </FormFieldColumn>
          <FormFieldColumn style={{ marginLeft: "1rem" }}>
            <Label htmlFor="price">Max price ($)</Label>
            <Input
              type="number"
              onChange={(e) =>
                dispatch({ type: "setPrice", data: e.target.value })
              }
              value={price}
              min={1}
            />
          </FormFieldColumn>
        </FormRow>
        <Link to="/results">
          <Submit>Submit</Submit>
        </Link>
      </form>
    </div>
  );
};

export default Form;
