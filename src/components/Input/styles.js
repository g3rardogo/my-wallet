import styled from "styled-components";

export const InputName = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: #a3a4af;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  color: #a3a4af;
  background-color: #f3f4fb;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }
`;

export const Icon = styled.i`
  height: fit-content;
  padding: 1.2rem;
  font-size: 2rem;
  color: #6668cc;
  background-color: #f3f4fb;
`;
