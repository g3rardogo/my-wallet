import React from "react";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TextBlock } from "../components/TextBlock";

const Login = () => {
  return (
    <Section>
      <Title text="Log In" />
      <Subtitle text="Enter Your Details to Login!" />
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

      <Button text="Log In" />
      <TextBlock text="Don't have an account?" span="&nbsp;Sign Up" />
    </Section>
  );
};

export default Login;
