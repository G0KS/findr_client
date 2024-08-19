import { baseURL } from "./baseUrl";

import { commonRequest } from "./commonRequest";

export const candidateRegister = async (body) => {
   return await commonRequest("POST", `${baseURL}/Student`, body);
};

export const candidateLogin = async (email) => {
   return await commonRequest("GET", `${baseURL}/Student/${email}`, {});
};

export const candidateUpdate = async (body, email) => {
   return await commonRequest("PUT", `${baseURL}/Student/${email}`, body);
};
