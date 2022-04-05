import React from "react";

const FrameWorkList = (props) => {
  if (!props.frameworks || !props.frameworks.length) {
    return <h1>No Data</h1>;
  }
  return (
    <div>
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameWorkList;
