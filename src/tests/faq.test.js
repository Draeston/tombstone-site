import React from "react";
import renderer from "react-test-renderer";
import { FAQ } from "../pages/FAQ";

test("snapshot faq", () => {
  const tree = renderer
    .create(<FAQ qas={[
        {
          question: "What are you doing here??",
          answer:
            "This site is designed to sell custom tombstone designs. " +
            "Just imagine how sad it would be if your tombstone will not show your artistic and aesthetic preferences. With " +
            "our site, you would not have to worry about all that stuff and may enjoy your afterlife with the tombstone of your choice.",
        },
    {
      question: "Is it a real tombstone?",
      answer:
      "Yes, it does not get more real than ours! Buying from us, you will get a first class marble tombstone.",
    },
    {
      question: "Can you deliver it to my place??",
      answer: "Yes, as long as you will pay for it!",
    },
    {
      question: "And what if I change my mind?",
      answer:
      "For that, you will get a 5% discount on a new tombstone design. However, we " +
      "are working on a subscription model where you could" +
      " pay every month and have your tombstone design ready for you to pass away.",
    },
      ]} />)
    .toJSON()
  expect(tree).toMatchSnapshot();
})
