import { render, shallow } from "enzyme";
import "@testing-library/jest-dom";
import React from "react";
import FirstApp from "../FirstApp";

describe("Test on <FirstApp />", () => {
  test("should display <FirstApp /> correctly", () => {
    const greet = "Hello world";
    const wrapper = shallow(<FirstApp greet={greet} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should display subtitle correctly", () => {
    const subtitle = `I am a subtitle!`;
    const greet = "Hello world";
    const wrapper = shallow(<FirstApp greet={greet} subtitle={subtitle} />);

    const paragraphText = wrapper.find("p").text();

    expect(paragraphText).toBe(subtitle);
  });
});
