import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const AddContactForm = styled(Form)`
  width: 400px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  display: block;
  width: 150px;
  height: 20px;
  border: 2px solid blue;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  width: 158px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: #ffffff;
  font-size: 16px;

  :hover,
  :focus {
    background-color: #fb6d3a;
  }
`;
