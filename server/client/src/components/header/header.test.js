import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttribute } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};


describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render withour errors", () => {
    const wrapper = findByTestAttribute(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAttribute(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
