import axios from "axios";

const URL = "http://localhost:4000";

const api = axios.create({ baseURL: URL });

export const fetchProductsApi = () => api.get("/product");
export const fetchProductApi = (id) => api.get(`/product/${id}`);
export const reviewProductApi = (id, review) =>
  api.patch(`/product/review/${id}`, review);

export const createUserApi = (user) => api.post("/User/register", user);
export const loginUserApi = (user) => api.post("/User/login", user);
