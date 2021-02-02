import http from "../http-common";

const getAll = () => {
  return http.get("/companies");
};

const get = (id) => {
  return http.get(`/companies/${id}`);
};

export default {
  getAll,
  get,
};
