import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { debuglog } from "util";
import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  render(<App />);
});

test("displays the elements in the form, and the elements can be filled out", () => {
  const wrapper = render(<App />);

  const firstName = wrapper.queryByPlaceholderText("bill");
  const lastName = wrapper.queryByPlaceholderText(/luo/i);
  const email = wrapper.queryByPlaceholderText(/bluebill1049@hotmail.com/i);
  const message = wrapper.queryByText(/message/i);

  expect(firstName).toBeVisible();
  expect(lastName).toBeVisible();
  expect(email).toBeVisible();
  expect(message).toBeVisible();

});

test("the form can be submitted", () => {
  const wrapper = render(<App />);

  const form = wrapper.queryByRole("form");

  fireEvent.submit(form);
  
  expect(form).toBeVisible();

  wrapper.debug();
});


