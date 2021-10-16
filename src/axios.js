import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// api.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

export default api;
