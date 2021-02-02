import { connect } from "react-redux";
import { getItems } from "../action";
import React, { useState, useEffect } from "react";

const TypeFilter = (props) => {
  const [values, setValues] = useState("");

  useEffect(() => {
    values !== "" && props.getItems(1, values);
  }, [values]);

  return (
    <div className="row type-filter mb-3">
      <div
        className="radio-toolbar"
        onChange={(event) => setValues(event.target.value)}
      >
        <input type="radio" id="radioMug" value="mug" name="type" />{" "}
        <label htmlFor="radioMug">mug</label>
        <input type="radio" id="radioShirt" value="shirt" name="type" />{" "}
        <label htmlFor="radioShirt">shirt</label>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { getItems })(TypeFilter);
