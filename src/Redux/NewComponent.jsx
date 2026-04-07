import React from "react";
import { useSelector } from "react-redux";

export default function NewComp() {
  const count = useSelector((state) => state.counter.value);
  return <h1> Hello Count {count}</h1>;
}