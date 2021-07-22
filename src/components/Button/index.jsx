import React from "react";
import { Button as ButtonComponent } from "./styles";

export const Button = ({ text }) => {
  return <ButtonComponent type="submit">{text}</ButtonComponent>;
};
