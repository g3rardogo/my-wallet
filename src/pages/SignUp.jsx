import React from "react";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TextBlock } from "../components/TextBlock";

const SignUp = () => {
  return (
    <Section>
      <Title text="Sign Up" />
      <Subtitle text="Enter Your Details to Signup!" />
      <Input name="Username" placeholder="Enter your name" icon="fas fa-user" />
      <Input
        name="Email"
        placeholder="Enter your email address"
        icon="fas fa-envelope"
      />
      <Input
        name="Password"
        placeholder="Enter your password"
        icon="fas fa-lock"
      />
      <Input
        name="Confirm Password"
        placeholder="Confirm your password"
        icon="fas fa-user"
      />
    </Section>
  );
};

export default SignUp;
