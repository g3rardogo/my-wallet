import React from "react";
import { Container, Text, Span } from "./styles";

export const TextBlock = ({ text, span }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Span>{span}</Span>
    </Container>
  );
};
