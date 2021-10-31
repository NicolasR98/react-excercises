import CounterApp from "../CounterApp";
import React from "react";
import { shallow } from "enzyme";

describe("Tests on <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  let buttons;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
    buttons = wrapper.find("button");
  });

  test("Should match with snapshot and default values", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should display the default value of 100", () => {
    const value = "100";
    const wrapper = shallow(<CounterApp value={value} />);
    const valueDisplay = wrapper.find("h2").text().trim();

    expect(valueDisplay).toBe(value);
  });

  test("Button +1 should increment", () => {
    const expectedValue = "11";
    const buttonAdd = buttons.at(0);
    buttonAdd.simulate("click");

    const valueDisplay = wrapper.find("h2").text().trim();

    expect(valueDisplay).toBe(expectedValue);
  });

  test("Button -1 should increment", () => {
    const expectedValue = "9";
    const buttonSubstract = buttons.at(2);
    buttonSubstract.simulate("click");
    const valueDisplay = wrapper.find("h2").text().trim();

    expect(valueDisplay).toBe(expectedValue);
  });

  test("Button reset should give the default value", () => {
    const defaultValue = String(CounterApp.defaultProps.value);
    const buttonAdd = buttons.at(0);
    const buttonReset = buttons.at(1);
    buttonAdd.simulate("click");
    buttonReset.simulate("click");

    const valueDisplay = wrapper.find("h2").text().trim();

    expect(valueDisplay).toBe(defaultValue);
  });
});
