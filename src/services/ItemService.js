import http from "../http-common";

const getAll = (page, itemType) => {
  console.log(page);
  console.log(itemType);
  return http.get(
    "/items?_page=" +
      page +
      "&_limit=16" +
      (itemType && "&itemType=" + itemType)
  );
  //return http.get("/items?_page="+page+"&_limit=16&_sort=adde&_order=desc");
};

const get = (id) => {
  return http.get(`/items/${id}`);
};

export default {
  getAll,
  get,
};
