import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ postRequest }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const maxLength = 10; 

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      setError(`Максимальное количество символов: ${maxLength}`);
    } else {
      setError("");
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      postRequest({
        inputValue,
      });
      setInputValue("");
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          onChange={handleChange}
          value={inputValue}
          type="text"
          required
          maxLength={maxLength}
        />
        <SubmitButton type="submit">Добавить</SubmitButton>
      </StyledForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrapper>
  );
};

export default TodoForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 12px;
  border: 2px solid #d0d0d0;
  border-radius: 4px;
  font-size: 18px;
  color: #333;
  margin-right: 10px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
`;
