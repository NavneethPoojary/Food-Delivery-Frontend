import axios from "axios";

const BaseUrl = "";

const Instance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const makePostRequest = async (endpoint, data) => {
  try {
    const response = await Instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const makeGetRequest = async (endpoint, params = {}) => {
  try {
    const response = await Instance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
};
