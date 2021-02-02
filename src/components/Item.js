import img from "../assets/img.png";
import { connect } from "react-redux";
import { addItemBasket, getItems } from "../action";
import { useEffect } from "react";

const Item = (props) => {
  return (
    <div className="row product-list">
      {props.items.map((item, index) => (
        <div key={index} className="col-6 col-md-3 product">
          <div className="h-100 d-flex flex-column">
            <div className="product-img-frame">
              <img src={img} className="product-img" alt="item" />
            </div>
            <div className="mt-2 product-price">{item.price}</div>
            <div className="product-name">{item.name}</div>
            <div className="mt-2 mt-auto">
              <button
                onClick={() => props.addItemBasket(item)}
                className="add-button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
export default connect(mapStateToProps, { addItemBasket })(Item);
