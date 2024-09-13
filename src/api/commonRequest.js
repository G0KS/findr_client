import axios from "axios";

const api_key = import.meta.env.VITE_FRAPPE_STUDENT_KEY;
const api_secret = import.meta.env.VITE_FRAPPE_STUDENT_SECRET;

export const commonRequest = async (method, url, body,params) => {
   let config = {
      method,
      url,
      data: body,
      params,
      headers: {
         "Content-type": "application/json",
         "Authorization": `token ${api_key}:${api_secret}`,
      },
   };

   return await axios(config)
      .then((data) => {
         return data;
      })
      .catch((err) => {
         return err;
      });
};
