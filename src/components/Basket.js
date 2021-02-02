import { connect } from "react-redux";
import { addItemBasket, deleteItemBasket } from "../action";

const Basket = (props) => {
  const totalPrice = props.basket.reduce(
    (total, item) => (total += item.price),
    0
  );

  const distinctValues = props.basket.filter(({ slug }, index) => {
    props.basket[index].count = 1;
    if (!(props.basket.findIndex((item) => item.slug === slug) == index)) {
      const valueCount = props.basket.filter(function (value) {
        return value.slug === slug;
      }).length;
      props.basket[index].count = valueCount;
    }
    return props.basket.findIndex((item) => item.slug === slug) === index;
  });

  return (
    <div className="row basket ml-md-1">
      {distinctValues.map((basketItem, index) => (
        <div key={index} className="col-12 basket-item">
          <div className="row">
            <div className="col-6">
              <div className="row basket-item-name">{basketItem.name}</div>
              <div className="row basket-item-price">{basketItem.price}</div>
            </div>
            <div className="col-6">
              <div className="row float-right basket-item-edit">
                <a
                  href="javascript:;"
                  onClick={() => props.deleteItemBasket(basketItem)}
                >
                  <span className="basket-icon">-</span>
                </a>
                <div className="basket-item-count">{basketItem.count}</div>
                <a
                  href="javascript:;"
                  onClick={() => props.addItemBasket(basketItem)}
                >
                  <span className="basket-icon">+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {props.basket.length > 0 ? (
        <div className="col-12 py-2">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="row float-right basket-total">
                <div className="col-12 text-center">
                  ₺{totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12 py-2">
          <div className="row">Sepete Ürün Ekleyiniz</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps, { addItemBasket, deleteItemBasket })(
  Basket
);
