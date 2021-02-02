import img from "../assets/img.png";
import logo from "../assets/market-logo.svg";
import bag from "../assets/basket-icon.svg";
import { connect } from "react-redux";

const Header = (props) => {
  const totalPrice = props.basket.reduce(
    (total, item) => (total += item.price),
    0
  );

  return (
    <div className="market-header ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 d-none d-md-block"></div>
          <div className="col-12 col-md-6 header-center">
            <img src={logo} className="" alt="logo" />
          </div>
          <div className="col-12 col-md-3 d-none d-md-block pr-0">
            <div className="basket-sum">
              {" "}
              <img src={bag} className="mr-2" alt="bag" />₺
              {totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Header);
