import axios from "axios";

export default axios.create({
  baseURL: "https://reactjs-market.herokuapp.com/db",
  headers: { "Content-type": "application/json" },
});
