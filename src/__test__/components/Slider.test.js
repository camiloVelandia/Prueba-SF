import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Slider from "../../components/Slider";

describe("<Slider/>", () => {
  const slider = mount(<Slider />);
  test("render del componente Slider", () => {
    expect(slider.length).toEqual(1);
  });
});

describe("Slider snaaapshot", () => {
  test("Comprobar ui del Slider", () => {
    const slider = create(<Slider />);
    expect(slider.toJSON()).toMatchSnapshot();
  });
});
