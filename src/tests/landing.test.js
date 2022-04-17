import React from "react";
import renderer from "react-test-renderer";
import { Landing } from "../pages/Landing";
import { BrowserRouter } from "react-router-dom";

test("snapshot landing", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
