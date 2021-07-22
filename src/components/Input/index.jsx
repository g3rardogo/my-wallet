import React from "react";
import {
  InputName,
  InputContainer,
  Input as InputComponent,
  Icon,
} from "./styles";

export const Input = ({ name,type, nameAttr, placeholder, icon }) => {
  return (
    <>
      <InputName>{name}</InputName>
      <InputContainer >
        <Icon className={icon} />
        <InputComponent type={type} name={nameAttr} placeholder={placeholder} />
      </InputContainer>
    </>
  );
};
