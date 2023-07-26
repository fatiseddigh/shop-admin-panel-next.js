import http from "./httpServices";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}

//admin

export function getCategoryById(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}
