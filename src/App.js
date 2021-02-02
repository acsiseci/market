import React, { useEffect } from "react";
import "./assets/App.css";
import ItemsList from "./components/ItemsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { getItems } from "./action";

const App = (props) => {
  useEffect(() => {
    console.log("start");
    props.getItems(1, "");
  }, []);

  return (
    <div>
      <Header />
      <ItemsList />
      <Footer />
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, { getItems })(App);
