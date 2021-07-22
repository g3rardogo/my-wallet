import React from "react";
import axios from "axios";
import { Section } from "../components/Section";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TextBlock } from "../components/TextBlock";

const handleSubmit = (e) => {
  e.preventDefault()
  let action = e.target.action
  let data = {}
  let collection = e.target.elements
  for (let item of collection) {
    if (item.attributes['name']){
      data[item.attributes['name'].value] = item.value
    }
  }
  axios.post(action, data).then(d => console.log(d))
}

const Login = () => {
  return (
    <Section>
      <form action="http://localhost:8000/api/v1/login/" method="post" onSubmit={handleSubmit}>
        <Title text="Log In" />
        <Subtitle text="Enter Your Details to Login!" />
        <Input
          nameAttr="email"
          name="Email"
          type="email"
          placeholder="Enter your email address"
          icon="fas fa-envelope"
        />
        <Input
          nameAttr="password"
          type="password"
          name="Password"
          placeholder="Enter your password"
          icon="fas fa-lock"
        />

        <Button text="Log In" />
      </form>
      <TextBlock text="Don't have an account?" span="&nbsp;Sign Up" />
    </Section>
  );
};

export default Login;
