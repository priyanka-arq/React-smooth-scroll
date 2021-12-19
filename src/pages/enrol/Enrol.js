import { ChildCare } from "@material-ui/icons";
import React from "react";
import { Fragment } from "react";
import {
  Container,
  FormWrap,
  Logo,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./EnrolStyle";

export default function Enrol() {
  return (
    <Fragment>
      <Container>
        <FormWrap>
          <Logo>
            <ChildCare style={{ marginRight: "10px" }} />
            <Icon to="/">KidsWorld</Icon>
          </Logo>
          <FormContent>
            <Form>
              <FormH1>ENQUIRE</FormH1>
              <FormLabel>Guardian Full Name</FormLabel>
              <FormInput type="text" />
              <FormLabel>Child Full Name</FormLabel>
              <FormInput type="text" />
              <FormLabel>Mobile number</FormLabel>
              <FormInput type="number" />
              <FormLabel>Email Address</FormLabel>
              <FormInput type="email" />
              <FormLabel>Child's date of birth</FormLabel>
              <FormInput type="date" />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </Fragment>
  );
}
