import axios from "axios";

const instance = axios.create({
//   baseURL: "https://mern-mitbook.herokuapp.com",
  baseURL: "http://localhost:5000",
});

// instance.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

export default instance;
