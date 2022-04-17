import React from "react";
import renderer from "react-test-renderer";
import { Tombstones } from "../pages/Tombstones";

test("snapshot tombstone", () => {
  const tree = renderer
    .create(<Tombstones />)
    .toJSON()
  expect(tree).toMatchSnapshot();
})
