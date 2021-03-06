import React from "react";
import { Link } from "react-router-dom";
// data
import { dateFormatted } from "../utils/helpers";
// utils
import capitalize from "../utils/capitalize";
// styled components
import {
  FormFieldColumn,
  FormRow,
  Select,
  Input,
  Label,
} from "./styled/FormComponents";
import Header from "./styled/Header";
import FormDiv from "./styled/form/FormDiv";
import StyledForm from "./styled/form/StyledForm";
import Submit from "./styled/Submit";

const Form = ({ formData, dispatch, categories }) => {
  const { category, dateFrom, dateTo, locationDistance, price } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    // hit the API
  };

  return (
    <FormDiv>
      <Header>
        Find <span style={{ color: "#3b9bd1" }}>your</span> next event
      </Header>
      <StyledForm onChange={handleSubmit}>
        <Label htmlFor="category">Event Category</Label>
        <Select
          onChange={(e) => {
            sessionStorage.setItem("category", e.target.value);
            dispatch({ type: "setCategory", data: e.target.value });
          }}
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
              onChange={(e) => {
                sessionStorage.setItem("dateFrom", e.target.value);
                dispatch({ type: "setDateFrom", data: e.target.value });
              }}
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
              onChange={(e) => {
                sessionStorage.setItem("dateTo", e.target.value);
                dispatch({ type: "setDateTo", data: e.target.value });
              }}
              min={dateFormatted(new Date())}
            />
          </FormFieldColumn>
        </FormRow>

        <FormRow>
          <FormFieldColumn style={{ marginRight: "1rem" }}>
            <Label htmlFor="locationDistance">Location Distance (km)</Label>
            <Input
              type="number"
              onChange={(e) => {
                sessionStorage.setItem("locationDistance", e.target.value);
                dispatch({ type: "setLocationDistance", data: e.target.value });
              }}
              value={locationDistance}
              min={1}
            />
          </FormFieldColumn>
          <FormFieldColumn style={{ marginLeft: "1rem" }}>
            <Label htmlFor="price">Max price ($)</Label>
            <Input
              type="number"
              onChange={(e) => {
                sessionStorage.setItem("price", e.target.value);
                dispatch({ type: "setPrice", data: e.target.value });
              }}
              value={price}
              min={1}
            />
          </FormFieldColumn>
        </FormRow>
        <Link to="/results">
          <Submit>Submit</Submit>
        </Link>
      </StyledForm>
    </FormDiv>
  );
};

export default Form;
