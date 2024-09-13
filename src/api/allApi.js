import { baseURL } from "./baseUrl";

import { commonRequest } from "./commonRequest";

export const candidateRegister = async (body) => {
   return await commonRequest(
      "POST",
      `${baseURL}/api/resource/Student`,
      body,
      {}
   );
};

export const getCandidate = async (name) => {
   return await commonRequest(
      "GET",
      `${baseURL}/api/resource/Student/${name}`,
      {},
      {}
   );
};

export const candidateUpdate = async (body, name) => {
   return await commonRequest(
      "PUT",
      `${baseURL}/api/resource/Student/${name}`,
      body,
      {}
   );
};

export const makePaymentOrder = async (body) =>{
   return await commonRequest("POST",`${baseURL}/api/method/findr.api.create_payment_order`,body)
}

export const verifyPayment = async (body) =>{
   return await commonRequest("POST",`${baseURL}/api/method/findr.api.verify_payment`,body)
}

export const getStudent = async (params) => {
   return await commonRequest(
      "GET",
      `${baseURL}/api/resource/Student`,
      {},
      params
   );
};
