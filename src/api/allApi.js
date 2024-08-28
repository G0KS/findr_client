import { baseURL } from "./baseUrl";

import { commonRequest } from "./commonRequest";

export const candidateRegister = async (body) => {
   return await commonRequest("POST", `${baseURL}/api/resource/Student`, body);
};

export const getCandidate = async (email) => {
   return await commonRequest(
      "GET",
      `${baseURL}/api/resource/Student/${email}`,
      {}
   );
};

export const candidateUpdate = async (body, email) => {
   return await commonRequest(
      "PUT",
      `${baseURL}/api/resource/Student/${email}`,
      body
   );
};
