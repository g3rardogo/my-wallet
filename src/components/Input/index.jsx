import React from "react";
import {
  InputName,
  InputContainer,
  Input as InputComponent,
  Icon,
} from "./styles";

export const Input = ({ name, placeholder, icon }) => {
  return (
    <>
      <InputName>{name}</InputName>
      <InputContainer>
        <Icon className={icon} />
        <InputComponent placeholder={placeholder} />
      </InputContainer>
    </>
  );
};
