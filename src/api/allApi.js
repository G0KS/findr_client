import { baseURL } from "./baseUrl";

import { commonRequest } from "./commonRequest";

const api_key = import.meta.env.VITE_FRAPPE_STUDENT_KEY;
const api_secret = import.meta.env.VITE_FRAPPE_STUDENT_SECRET;

export const candidateRegister = async (body) => {
   return await commonRequest("POST", `${baseURL}/api/resource/Student`, body, {
      Authorization: `token ${api_key}:${api_secret}`,
   });
};

export const getCandidate = async (name) => {
   return await commonRequest(
      "GET",
      `${baseURL}/api/resource/Student/${name}`,
      {},
      { Authorization: `token ${api_key}:${api_secret}` }
   );
};

export const candidateUpdate = async (body, name) => {
   return await commonRequest(
      "PUT",
      `${baseURL}/api/resource/Student/${name}`,
      body,
      { Authorization: `token ${api_key}:${api_secret}` }
   );
};