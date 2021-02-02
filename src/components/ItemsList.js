import React from "react";
import Basket from "./Basket";
import Item from "./Item";
import TypeFilter from "./TypeFilter";
import SortFilter from "./SortFilter";
import SearchFilter from "./SearchFilter";

const ItemsList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 ">
          <div className="row mr-md-1 pointer-none">
            <SortFilter />
            <SearchFilter />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row product-title mb-3">Products</div>
          <TypeFilter />
          <Item />
        </div>
        <div className="col-12 col-md-3 ">
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
