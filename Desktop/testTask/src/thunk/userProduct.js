import { getProduct, getOrder, getRegions, showProductDetail, productRequestDetail } from "../actions";
import axios from "axios";

const client = axios.create({
  baseURL: 'https://2abb-2409-4043-293-97d6-fb77-6c5e-6cd6-5434.ngrok.io//api',
});
const config = {
  headers: {
    'Content-Type': "application/json",
  },
};

client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const requestProduct = (id) => async (dispatch) => {
  try {
    const response = await client.get('/products', config);
    dispatch(getProduct(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestProductDetail = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/products/${id}`, config);
    dispatch(showProductDetail(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestRegions = () => async (dispatch) => {
  try {
    const response = await client.get('/regions', config);
    dispatch(getRegions(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestOrder = () => async (dispatch) => {
  try {
    const response = await client.get('/orders', config);
    dispatch(getOrder(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestuserAddress = (data, user_id, order_total) => async (dispatch) => {
  const payload = {
    "user_id": user_id,
    "order_total": order_total,
    "addresses": {
      "address": data.address,
      "pincode": data.pincode,
      "country": data.country,
      "city": data.city,
      "state": data.state,
    }
  }
  try {
    const response = await client.post('/orders', payload, config);
    dispatch(getOrder(response));
  } catch (err) {
    console.log(err);
  }
}


export const requestOrderProduct = () => async (dispatch) => {
  try {
    const response = await client.get('/orders', config);
    dispatch(productRequestDetail(response.data));
  } catch (err) {
    console.log(err);
  }
}