import React from "react";

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="type movie name"
      />
    </div>
  );
}
