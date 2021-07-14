import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CompA = () => {
  const store = useSelector((state) => state);
  console.log({ store });

  return <div>{store.list}</div>;
};

export default CompA;
