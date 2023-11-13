import React from "react";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

export default test;

const Person = () => <h2>James</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
