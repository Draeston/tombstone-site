import React from "react";
import renderer from "react-test-renderer"
import { Card } from "../components/Tombstones/Card";

test("testing tombstone card", () => {
  const tree = renderer
    .create(<Card img="1.png" title="Tombstone" price="800Р" id={1}/>)
    .toJSON()
  expect(tree).toMatchSnapshot();
})
