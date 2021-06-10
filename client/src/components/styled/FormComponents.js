import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

const FormFieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Select = styled.select`
  padding: 1rem;
  border-radius: 3px;
  border: 2px solid #444;
  background: #fff;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 3px;
  border: 2px solid #444;
  background: #fff;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.6rem;
`;

export { FormRow, FormFieldColumn, Select, Input, Label };
