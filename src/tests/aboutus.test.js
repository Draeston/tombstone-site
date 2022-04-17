import React from "react";
import renderer from "react-test-renderer";
import { AboutUs } from "../pages/AboutUs";

test("snapshot about us", () => {
  const tree = renderer
    .create(<AboutUs />)
    .toJSON()
  expect(tree).toMatchSnapshot();
})
